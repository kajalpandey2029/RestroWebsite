export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVegetarian: boolean;
  isSpicy?: boolean;
  rating: number;
  prepTime: string;
  ingredients: string[];
}

export const menuItems: MenuItem[] = [
  {
    id: 's1',
    name: 'Paneer Tikka',
    description: 'Cottage cheese marinated in yogurt and spices, grilled to perfection.',
    price: 289,
    category: 'STARTERS',
    image: 'https://images.unsplash.com/photo-1599487405902-5bf1e158e36b?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    isSpicy: true,
    rating: 4.8,
    prepTime: '15 mins',
    ingredients: ['Paneer', 'Yogurt', 'Spices', 'Bell Peppers', 'Onions']
  },
  {
    id: 's2',
    name: 'Crispy Corn',
    description: 'Sweet corn kernels fried until crisp and tossed with Indian spices.',
    price: 229,
    category: 'STARTERS',
    image: 'https://images.unsplash.com/photo-1626804475297-41609ea004eb?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    isSpicy: true,
    rating: 4.7,
    prepTime: '10 mins',
    ingredients: ['Sweet Corn', 'Flour', 'Spices', 'Lemon']
  },
  {
    id: 's3',
    name: 'Chicken Tikka',
    description: 'Juicy boneless chicken marinated in aromatic spices and grilled.',
    price: 329,
    category: 'STARTERS',
    image: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?auto=format&fit=crop&q=80&w=800',
    isVegetarian: false,
    isSpicy: true,
    rating: 4.9,
    prepTime: '15 mins',
    ingredients: ['Chicken', 'Yogurt', 'Tandoori Masala', 'Lemon']
  },
  {
    id: 'm1',
    name: 'Butter Chicken',
    description: 'Tender chicken simmered in a rich, creamy tomato gravy.',
    price: 399,
    category: 'MAIN COURSE',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
    isVegetarian: false,
    rating: 4.9,
    prepTime: '20 mins',
    ingredients: ['Chicken', 'Tomato', 'Butter', 'Cream', 'Cashews', 'Spices']
  },
  {
    id: 'm2',
    name: 'Paneer Butter Masala',
    description: 'Soft paneer cubes cooked in a luscious and creamy tomato sauce.',
    price: 349,
    category: 'MAIN COURSE',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    rating: 4.8,
    prepTime: '20 mins',
    ingredients: ['Paneer', 'Tomato', 'Butter', 'Cream', 'Spices']
  },
  {
    id: 'm3',
    name: 'Dal Makhani',
    description: 'Black lentils slow-cooked overnight with butter and cream.',
    price: 299,
    category: 'MAIN COURSE',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    rating: 4.9,
    prepTime: '20 mins',
    ingredients: ['Black Lentils', 'Kidney Beans', 'Butter', 'Cream', 'Spices']
  },
  {
    id: 'm4',
    name: 'Biryani',
    description: 'Fragrant basmati rice layered with marinated meat and exotic spices.',
    price: 379,
    category: 'MAIN COURSE',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    isVegetarian: false,
    isSpicy: true,
    rating: 4.8,
    prepTime: '25 mins',
    ingredients: ['Basmati Rice', 'Chicken/Mutton', 'Yogurt', 'Saffron', 'Spices']
  },
  {
    id: 'p1',
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomato sauce, mozzarella, and basil.',
    price: 299,
    category: 'PIZZA',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    rating: 4.6,
    prepTime: '15 mins',
    ingredients: ['Pizza Dough', 'Tomato Sauce', 'Mozzarella', 'Fresh Basil']
  },
  {
    id: 'p2',
    name: 'Farmhouse Pizza',
    description: 'Loaded with crunchy veggies and double cheese.',
    price: 399,
    category: 'PIZZA',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    rating: 4.7,
    prepTime: '15 mins',
    ingredients: ['Pizza Dough', 'Onion', 'Capsicum', 'Mushroom', 'Tomato', 'Cheese']
  },
  {
    id: 'p3',
    name: 'Spicy Chicken Pizza',
    description: 'Spicy chicken chunks, jalapenos, and red paprika.',
    price: 449,
    category: 'PIZZA',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    isVegetarian: false,
    isSpicy: true,
    rating: 4.8,
    prepTime: '15 mins',
    ingredients: ['Pizza Dough', 'Spicy Chicken', 'Jalapenos', 'Cheese']
  },
  {
    id: 'b1',
    name: 'Classic Veg Burger',
    description: 'Crispy veg patty with fresh lettuce, tomatoes, and house sauce.',
    price: 249,
    category: 'BURGERS',
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    rating: 4.5,
    prepTime: '10 mins',
    ingredients: ['Burger Bun', 'Veg Patty', 'Lettuce', 'Tomato', 'Sauce']
  },
  {
    id: 'b2',
    name: 'Crispy Chicken Burger',
    description: 'Golden fried chicken breast with mayo and pickles.',
    price: 299,
    category: 'BURGERS',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    isVegetarian: false,
    rating: 4.7,
    prepTime: '10 mins',
    ingredients: ['Burger Bun', 'Crispy Chicken', 'Lettuce', 'Mayo', 'Pickles']
  },
  {
    id: 'pa1',
    name: 'Creamy Alfredo Pasta',
    description: 'Penne tossed in a rich, cheesy, and creamy white sauce.',
    price: 349,
    category: 'PASTA',
    image: 'https://images.unsplash.com/photo-1612874683156-42ee5962ca45?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    rating: 4.6,
    prepTime: '15 mins',
    ingredients: ['Penne Pasta', 'Cream', 'Parmesan', 'Garlic', 'Butter']
  },
  {
    id: 'pa2',
    name: 'Arrabbiata Pasta',
    description: 'Spicy tomato basil sauce tossed with your choice of pasta.',
    price: 329,
    category: 'PASTA',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    isSpicy: true,
    rating: 4.5,
    prepTime: '15 mins',
    ingredients: ['Penne Pasta', 'Tomatoes', 'Garlic', 'Chili Flakes', 'Olive Oil']
  },
  {
    id: 'pa3',
    name: 'Chicken Penne',
    description: 'Penne pasta with grilled chicken in a mixed sauce.',
    price: 399,
    category: 'PASTA',
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&q=80&w=800',
    isVegetarian: false,
    rating: 4.8,
    prepTime: '15 mins',
    ingredients: ['Penne Pasta', 'Chicken', 'Mixed Sauce', 'Cheese']
  },
  {
    id: 'd1',
    name: 'Chocolate Brownie',
    description: 'Warm fudgy brownie served with vanilla ice cream.',
    price: 199,
    category: 'DESSERTS',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    rating: 4.9,
    prepTime: '5 mins',
    ingredients: ['Chocolate', 'Flour', 'Butter', 'Vanilla Ice Cream']
  },
  {
    id: 'd2',
    name: 'Gulab Jamun',
    description: 'Soft milk dumplings soaked in rose-flavored sugar syrup.',
    price: 149,
    category: 'DESSERTS',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    rating: 4.8,
    prepTime: '5 mins',
    ingredients: ['Milk Solids', 'Flour', 'Sugar', 'Rose Water', 'Cardamom']
  },
  {
    id: 'd3',
    name: 'Cheesecake',
    description: 'Classic New York style cheesecake with a berry compote.',
    price: 249,
    category: 'DESSERTS',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    rating: 4.7,
    prepTime: '5 mins',
    ingredients: ['Cream Cheese', 'Graham Cracker Crust', 'Sugar', 'Berries']
  },
  {
    id: 'dr1',
    name: 'Mango Lassi',
    description: 'Sweet and rich yogurt-based mango smoothie.',
    price: 129,
    category: 'DRINKS',
    image: 'https://images.unsplash.com/photo-1616788220023-e18e8dc44f43?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    rating: 4.9,
    prepTime: '5 mins',
    ingredients: ['Yogurt', 'Mango Pulp', 'Sugar', 'Cardamom']
  },
  {
    id: 'dr2',
    name: 'Fresh Lime Soda',
    description: 'Refreshing fizzy drink with fresh lime juice, sweet or salted.',
    price: 99,
    category: 'DRINKS',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    rating: 4.5,
    prepTime: '5 mins',
    ingredients: ['Lime', 'Soda', 'Sugar/Salt', 'Mint']
  },
  {
    id: 'dr3',
    name: 'Cold Coffee',
    description: 'Blended iced coffee with milk and a touch of chocolate.',
    price: 159,
    category: 'DRINKS',
    image: 'https://images.unsplash.com/photo-1461023058943-07cb1ce8db8a?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    rating: 4.7,
    prepTime: '5 mins',
    ingredients: ['Coffee', 'Milk', 'Sugar', 'Ice', 'Chocolate Syrup']
  }
];