import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const categories = ['STARTERS', 'VEGETARIAN', 'NON-VEGETARIAN', 'MAINS', 'BIRYANI', 'BREADS', 'DESSERTS', 'DRINKS'];
  
  for (const name of categories) {
    await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name },
    })
  }

  const menuItems = [
    {
      name: 'Paneer Tikka',
      description: 'Char-grilled cottage cheese marinated in yogurt, aromatic spices and herbs.',
      price: 340,
      image: 'https://images.unsplash.com/photo-1599487405902-5bf1e158e36b?auto=format&fit=crop&q=80&w=800',
      category: 'STARTERS',
      isVegetarian: true,
      isSpicy: true,
      spiceLevel: 'Medium',
      ingredients: 'Paneer, Yogurt, Spices, Bell Peppers',
      allergens: 'Dairy'
    },
    {
      name: 'Truffle Dal Makhani',
      description: 'Black lentils slow-cooked overnight with a touch of truffle oil for an earthy flavor.',
      price: 380,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800',
      category: 'MAINS',
      isVegetarian: true,
      isSpicy: false,
      spiceLevel: 'Mild',
      ingredients: 'Black Lentils, Butter, Truffle Oil, Cream',
      allergens: 'Dairy'
    },
    {
      name: 'Butter Chicken',
      description: 'Tender chicken simmered in a rich, velvety tomato and fenugreek sauce.',
      price: 420,
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
      category: 'MAINS',
      isVegetarian: false,
      isSpicy: false,
      spiceLevel: 'Mild',
      ingredients: 'Chicken, Tomato, Butter, Cream, Cashews',
      allergens: 'Dairy, Nuts'
    },
    {
      name: 'Lamb Rogan Josh',
      description: 'Classic Kashmiri lamb curry with fennel, ginger and dried red chilies.',
      price: 520,
      image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800',
      category: 'MAINS',
      isVegetarian: false,
      isSpicy: true,
      spiceLevel: 'High',
      ingredients: 'Lamb, Yogurt, Spices, Fennel',
      allergens: 'Dairy'
    },
    {
      name: 'Saffron Biryani',
      description: 'Aromatic basmati rice layered with tender meat, saffron, and crispy onions.',
      price: 450,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
      category: 'BIRYANI',
      isVegetarian: false,
      isSpicy: true,
      spiceLevel: 'Medium',
      ingredients: 'Basmati Rice, Chicken/Lamb, Saffron, Spices',
      allergens: 'None'
    },
    {
      name: 'Gulab Jamun Cheesecake',
      description: 'A beautiful fusion of classic New York cheesecake and Indian gulab jamun.',
      price: 280,
      image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&q=80&w=800',
      category: 'DESSERTS',
      isVegetarian: true,
      isSpicy: false,
      spiceLevel: 'None',
      ingredients: 'Cream Cheese, Gulab Jamun, Sugar',
      allergens: 'Dairy, Gluten'
    },
    {
      name: 'Crispy Okra',
      description: 'Thinly sliced okra tossed in amchoor and gram flour, fried until crisp.',
      price: 260,
      image: 'https://images.unsplash.com/photo-1626804475297-41609ea004eb?auto=format&fit=crop&q=80&w=800',
      category: 'STARTERS',
      isVegetarian: true,
      isSpicy: true,
      spiceLevel: 'Mild',
      ingredients: 'Okra, Gram Flour, Spices',
      allergens: 'None'
    },
    {
      name: 'Chicken 65',
      description: 'Spicy, deep-fried chicken appetizer originating from Chennai.',
      price: 360,
      image: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?auto=format&fit=crop&q=80&w=800',
      category: 'STARTERS',
      isVegetarian: false,
      isSpicy: true,
      spiceLevel: 'High',
      ingredients: 'Chicken, Red Chiles, Curry Leaves',
      allergens: 'None'
    },
    {
      name: 'Palak Paneer',
      description: 'Cottage cheese in a thick paste made from puréed spinach and seasoned with garlic.',
      price: 350,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&q=80&w=800',
      category: 'VEGETARIAN',
      isVegetarian: true,
      isSpicy: false,
      spiceLevel: 'Mild',
      ingredients: 'Spinach, Paneer, Garlic, Cream',
      allergens: 'Dairy'
    },
    {
      name: 'Garlic Naan',
      description: 'Soft leavened flatbread baked in a tandoor and brushed with garlic butter.',
      price: 110,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
      category: 'BREADS',
      isVegetarian: true,
      isSpicy: false,
      spiceLevel: 'None',
      ingredients: 'Flour, Yeast, Garlic, Butter',
      allergens: 'Dairy, Gluten'
    },
    {
      name: 'Malai Kofta',
      description: 'Potato and paneer balls deep fried and served in a creamy, spiced tomato gravy.',
      price: 370,
      image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800',
      category: 'VEGETARIAN',
      isVegetarian: true,
      isSpicy: false,
      spiceLevel: 'Mild',
      ingredients: 'Paneer, Potatoes, Cream, Spices',
      allergens: 'Dairy, Nuts'
    },
    {
      name: 'Prawns Ghee Roast',
      description: 'Mangalorean style fiery red, tangy and spicy prawns roasted in ghee.',
      price: 540,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
      category: 'NON-VEGETARIAN',
      isVegetarian: false,
      isSpicy: true,
      spiceLevel: 'High',
      ingredients: 'Prawns, Ghee, Byadagi Chilies',
      allergens: 'Shellfish, Dairy'
    },
    {
      name: 'Vegetable Biryani',
      description: 'Mixed vegetables slow-cooked with basmati rice and aromatic spices.',
      price: 360,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
      category: 'BIRYANI',
      isVegetarian: true,
      isSpicy: true,
      spiceLevel: 'Medium',
      ingredients: 'Basmati Rice, Mixed Veg, Saffron, Spices',
      allergens: 'None'
    },
    {
      name: 'Tandoori Roti',
      description: 'Whole wheat flatbread cooked in a clay oven.',
      price: 70,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800',
      category: 'BREADS',
      isVegetarian: true,
      isSpicy: false,
      spiceLevel: 'None',
      ingredients: 'Whole Wheat Flour, Water',
      allergens: 'Gluten'
    },
    {
      name: 'Rasmalai',
      description: 'Flattened paneer discs soaked in malai (clotted cream) flavored with cardamom.',
      price: 220,
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800',
      category: 'DESSERTS',
      isVegetarian: true,
      isSpicy: false,
      spiceLevel: 'None',
      ingredients: 'Milk, Sugar, Cardamom, Pistachios',
      allergens: 'Dairy, Nuts'
    },
    {
      name: 'Mango Lassi',
      description: 'Sweet and refreshing yogurt-based mango smoothie.',
      price: 150,
      image: 'https://images.unsplash.com/photo-1616788220023-e18e8dc44f43?auto=format&fit=crop&q=80&w=800',
      category: 'DRINKS',
      isVegetarian: true,
      isSpicy: false,
      spiceLevel: 'None',
      ingredients: 'Yogurt, Mango Pulp, Sugar, Cardamom',
      allergens: 'Dairy'
    },
    {
      name: 'Masala Chai',
      description: 'Classic Indian tea brewed with milk and aromatic spices.',
      price: 90,
      image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=800',
      category: 'DRINKS',
      isVegetarian: true,
      isSpicy: false,
      spiceLevel: 'None',
      ingredients: 'Black Tea, Milk, Sugar, Spices',
      allergens: 'Dairy'
    },
    {
      name: 'Fish Tikka',
      description: 'Tender fish pieces marinated in yogurt and spices, grilled in tandoor.',
      price: 480,
      image: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?auto=format&fit=crop&q=80&w=800',
      category: 'STARTERS',
      isVegetarian: false,
      isSpicy: true,
      spiceLevel: 'Medium',
      ingredients: 'Fish, Yogurt, Tandoori Masala',
      allergens: 'Fish, Dairy'
    },
    {
      name: 'Baingan Bharta',
      description: 'Roasted eggplant mashed and cooked with onions, tomatoes and spices.',
      price: 320,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&q=80&w=800',
      category: 'VEGETARIAN',
      isVegetarian: true,
      isSpicy: true,
      spiceLevel: 'Medium',
      ingredients: 'Eggplant, Onions, Tomatoes, Spices',
      allergens: 'None'
    },
    {
      name: 'Mutton Korma',
      description: 'Slow-cooked mutton in a rich, creamy sauce made with yogurt and nuts.',
      price: 540,
      image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800',
      category: 'NON-VEGETARIAN',
      isVegetarian: false,
      isSpicy: true,
      spiceLevel: 'Medium',
      ingredients: 'Mutton, Yogurt, Cashews, Spices',
      allergens: 'Dairy, Nuts'
    }
  ]

  for (const item of menuItems) {
    const exists = await prisma.menuItem.findFirst({ where: { name: item.name } })
    if (!exists) {
      await prisma.menuItem.create({ data: item })
    }
  }

  console.log('Database seeded!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
