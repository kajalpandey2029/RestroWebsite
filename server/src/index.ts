import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { fallbackMenuItems } from './fallbackMenu';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

const sendEmail = (to: string, subject: string, text: string) => {
  if (process.env.RESEND_API_KEY) {
    console.log(`[Email Service] Sent email to ${to}: ${subject}`);
    // Placeholder for actual Resend implementation
  } else {
    console.log("Email service not configured — skipping email.");
  }
};

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// --- ROUTES ---

// 1. Menu
app.get('/api/menu', async (req, res) => {
  try {
    const items = await prisma.menuItem.findMany({
      where: { available: true }
    });
    res.json(items);
  } catch (error) {
    console.warn("Database unavailable. Returning fallback menu data.");
    res.json(fallbackMenuItems);
  }
});

app.get('/api/menu/:id', async (req, res) => {
  try {
    const item = await prisma.menuItem.findUnique({
      where: { id: req.params.id }
    });
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch menu item' });
  }
});

// 2. Reservations
app.post('/api/reservations', async (req, res) => {
  try {
    const { name, email, phone, date, time, guests, occasion, specialRequest } = req.body;
    
    // Basic validation
    if (!name || !email || !phone || !date || !time || !guests) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const reservation = await prisma.reservation.create({
      data: {
        name, email, phone, date, time, guests: parseInt(guests), occasion, specialRequest
      }
    });
    
    // Simulate email notification
    console.log(`Reservation confirmed for ${name} on ${date} at ${time}`);
    
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create reservation' });
  }
});

app.get('/api/reservations/availability', async (req, res) => {
  
  try {
    const { date, guests } = req.query;
    if (!date || !guests) return res.status(400).json({ error: 'Missing date or guests' });
    
    const guestCount = parseInt(guests as string);
    const timeSlots = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];
    const availableSlots = [];
    
    for (const time of timeSlots) {
      const existingReservations = await prisma.reservation.findMany({
        where: { date: date as string, time }
      });
      
      const currentBookedGuests = existingReservations.reduce((sum, res) => sum + res.guests, 0);
      
      if (currentBookedGuests + guestCount <= 80) {
        availableSlots.push(time);
      }
    }
    
    res.json({ availableSlots });
  } catch (error) {
    res.status(500).json({ error: 'Failed to check availability' });
  }
});

// 3. Orders
app.post('/api/orders', async (req, res) => {
  try {
    const { customerName, phone, email, address, city, zip, orderType, paymentMethod, items, instructions } = req.body;
    
    if (!customerName || !phone || !orderType || !paymentMethod || !items || items.length === 0) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Verify prices and calculate totals on backend
    let subtotal = 0;
    const orderItemsData = [];
    
    for (const item of items) {
      const dbItem = await prisma.menuItem.findUnique({ where: { id: item.id } });
      if (!dbItem) return res.status(400).json({ error: `Item ${item.id} not found` });
      
      const itemTotal = dbItem.price * item.quantity;
      subtotal += itemTotal;
      orderItemsData.push({
        menuItemId: dbItem.id,
        quantity: item.quantity,
        price: dbItem.price
      });
    }

    const tax = subtotal * 0.05;
    const deliveryFee = orderType === 'Delivery' ? 40 : 0;
    const total = subtotal + tax + deliveryFee;

    const order = await prisma.order.create({
      data: {
        customerName, phone, email, address, city, zip, orderType, paymentMethod,
        subtotal, tax, deliveryFee, total, instructions,
        items: {
          create: orderItemsData
        }
      },
      include: { items: true }
    });

    console.log(`Order ${order.id} placed by ${customerName}`);
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

app.get('/api/orders/:id', async (req, res) => {
  try {
    const order = await prisma.order.findUnique({
      where: { id: req.params.id },
      include: { items: true }
    });
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order' });
  }
});

// 4. Contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const contact = await prisma.contactMessage.create({
      data: { name, email, phone, subject, message }
    });

    console.log(`Contact message from ${name} received`);
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save message' });
  }
});

// 5. Newsletter
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) return res.status(400).json({ error: 'Email is required' });

    const existing = await prisma.subscriber.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: 'You are already subscribed' });
    }

    await prisma.subscriber.create({ data: { email } });
    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

app.listen(port, () => {
  console.log(`Ember & Spice server running at http://localhost:${port}`);
});
