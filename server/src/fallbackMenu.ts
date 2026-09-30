export const fallbackMenuItems = [
  // STARTERS
  {
    id: "s1",
    name: "Paneer Tikka",
    description: "Cottage cheese marinated in spices and grilled in a tandoor.",
    price: 350,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600",
    category: "STARTERS",
    isVegetarian: true,
    isSpicy: true,
    spiceLevel: "Medium",
    ingredients: "Paneer, Yogurt, Spices",
    available: true
  },
  {
    id: "s2",
    name: "Chicken Tikka",
    description: "Boneless chicken pieces marinated in spiced yogurt and grilled.",
    price: 450,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600",
    category: "STARTERS",
    isVegetarian: false,
    isSpicy: true,
    spiceLevel: "Medium",
    ingredients: "Chicken, Yogurt, Spices",
    available: true
  },
  {
    id: "s3",
    name: "Vegetable Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas.",
    price: 150,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600",
    category: "STARTERS",
    isVegetarian: true,
    isSpicy: false,
    spiceLevel: "Mild",
    ingredients: "Potatoes, Peas, Pastry",
    available: true
  },
  {
    id: "s4",
    name: "Seekh Kebab",
    description: "Minced lamb mixed with spices and grilled on skewers.",
    price: 500,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600",
    category: "STARTERS",
    isVegetarian: false,
    isSpicy: true,
    spiceLevel: "Hot",
    ingredients: "Minced Lamb, Spices",
    available: true
  },
  
  // VEGETARIAN MAINS
  {
    id: "v1",
    name: "Palak Paneer",
    description: "Paneer cubes in a smooth spinach puree.",
    price: 380,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600",
    category: "VEGETARIAN",
    isVegetarian: true,
    isSpicy: false,
    spiceLevel: "Mild",
    ingredients: "Spinach, Paneer, Spices",
    available: true
  },
  {
    id: "v2",
    name: "Dal Makhani",
    description: "Black lentils cooked overnight with butter and cream.",
    price: 320,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=600",
    category: "VEGETARIAN",
    isVegetarian: true,
    isSpicy: false,
    spiceLevel: "Mild",
    ingredients: "Black Lentils, Butter, Cream",
    available: true
  },
  {
    id: "v3",
    name: "Aloo Gobi",
    description: "Classic Indian dish made with potatoes and cauliflower.",
    price: 280,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=600",
    category: "VEGETARIAN",
    isVegetarian: true,
    isSpicy: true,
    spiceLevel: "Medium",
    ingredients: "Potatoes, Cauliflower, Spices",
    available: true
  },
  
  // NON-VEGETARIAN MAINS
  {
    id: "nv1",
    name: "Butter Chicken",
    description: "Tender chicken cooked in a rich, creamy tomato sauce.",
    price: 480,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=600",
    category: "NON-VEGETARIAN",
    isVegetarian: false,
    isSpicy: false,
    spiceLevel: "Mild",
    ingredients: "Chicken, Tomato, Cream, Butter",
    available: true
  },
  {
    id: "nv2",
    name: "Lamb Rogan Josh",
    description: "Aromatic lamb dish of Persian origin, signature recipe of Kashmiri cuisine.",
    price: 550,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600",
    category: "NON-VEGETARIAN",
    isVegetarian: false,
    isSpicy: true,
    spiceLevel: "Medium",
    ingredients: "Lamb, Yogurt, Spices",
    available: true
  },
  {
    id: "nv3",
    name: "Chicken Tikka Masala",
    description: "Roasted marinated chicken chunks in a spiced sauce.",
    price: 460,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600",
    category: "NON-VEGETARIAN",
    isVegetarian: false,
    isSpicy: true,
    spiceLevel: "Medium",
    ingredients: "Chicken, Spices, Tomato",
    available: true
  },
  
  // BIRYANI
  {
    id: "b1",
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with marinated chicken and spices.",
    price: 450,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600",
    category: "BIRYANI",
    isVegetarian: false,
    isSpicy: true,
    spiceLevel: "Medium",
    ingredients: "Basmati Rice, Chicken, Spices",
    available: true
  },
  {
    id: "b2",
    name: "Mutton Biryani",
    description: "Fragrant rice layered with tender mutton and slow-cooked.",
    price: 550,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=600",
    category: "BIRYANI",
    isVegetarian: false,
    isSpicy: true,
    spiceLevel: "Hot",
    ingredients: "Basmati Rice, Mutton, Spices",
    available: true
  },
  {
    id: "b3",
    name: "Veg Biryani",
    description: "Mixed vegetables cooked with basmati rice and aromatic spices.",
    price: 350,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600",
    category: "BIRYANI",
    isVegetarian: true,
    isSpicy: true,
    spiceLevel: "Medium",
    ingredients: "Basmati Rice, Mixed Vegetables, Spices",
    available: true
  },
  {
    id: "b4",
    name: "Hyderabadi Biryani",
    description: "Authentic dum biryani with special Hyderabadi spices.",
    price: 480,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600",
    category: "BIRYANI",
    isVegetarian: false,
    isSpicy: true,
    spiceLevel: "Hot",
    ingredients: "Basmati Rice, Chicken, Special Spices",
    available: true
  },

  // BREADS
  {
    id: "br1",
    name: "Garlic Naan",
    description: "Soft flatbread topped with garlic and butter.",
    price: 80,
    image: "https://images.unsplash.com/photo-1626074964464-f6551b32d0c2?auto=format&fit=crop&q=80&w=600",
    category: "BREADS",
    isVegetarian: true,
    isSpicy: false,
    spiceLevel: "Mild",
    ingredients: "Flour, Garlic, Butter",
    available: true
  },
  {
    id: "br2",
    name: "Butter Naan",
    description: "Traditional Indian flatbread brushed with butter.",
    price: 70,
    image: "https://images.unsplash.com/photo-1626074964464-f6551b32d0c2?auto=format&fit=crop&q=80&w=600",
    category: "BREADS",
    isVegetarian: true,
    isSpicy: false,
    spiceLevel: "Mild",
    ingredients: "Flour, Butter",
    available: true
  },
  {
    id: "br3",
    name: "Tandoori Roti",
    description: "Whole wheat bread baked in a clay oven.",
    price: 50,
    image: "https://images.unsplash.com/photo-1626074964464-f6551b32d0c2?auto=format&fit=crop&q=80&w=600",
    category: "BREADS",
    isVegetarian: true,
    isSpicy: false,
    spiceLevel: "Mild",
    ingredients: "Whole Wheat Flour",
    available: true
  },

  // DESSERTS
  {
    id: "d1",
    name: "Gulab Jamun",
    description: "Deep-fried milk dumplings soaked in rose-flavored sugar syrup.",
    price: 150,
    image: "https://images.unsplash.com/photo-1596450514735-a131b787bbf6?auto=format&fit=crop&q=80&w=600",
    category: "DESSERTS",
    isVegetarian: true,
    isSpicy: false,
    spiceLevel: "Mild",
    ingredients: "Milk Solids, Sugar, Rose Water",
    available: true
  },
  {
    id: "d2",
    name: "Rasmalai",
    description: "Soft paneer balls immersed in chilled creamy milk.",
    price: 180,
    image: "https://images.unsplash.com/photo-1596450514735-a131b787bbf6?auto=format&fit=crop&q=80&w=600",
    category: "DESSERTS",
    isVegetarian: true,
    isSpicy: false,
    spiceLevel: "Mild",
    ingredients: "Paneer, Milk, Saffron",
    available: true
  },
  {
    id: "d3",
    name: "Gajar Halwa",
    description: "Traditional carrot pudding made with milk and nuts.",
    price: 160,
    image: "https://images.unsplash.com/photo-1596450514735-a131b787bbf6?auto=format&fit=crop&q=80&w=600",
    category: "DESSERTS",
    isVegetarian: true,
    isSpicy: false,
    spiceLevel: "Mild",
    ingredients: "Carrots, Milk, Sugar, Nuts",
    available: true
  },

  // DRINKS
  {
    id: "dr1",
    name: "Mango Lassi",
    description: "Refreshing yogurt-based drink blended with mango.",
    price: 120,
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=600",
    category: "DRINKS",
    isVegetarian: true,
    isSpicy: false,
    spiceLevel: "Mild",
    ingredients: "Yogurt, Mango, Sugar",
    available: true
  },
  {
    id: "dr2",
    name: "Masala Chai",
    description: "Indian spiced tea made with milk.",
    price: 80,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600",
    category: "DRINKS",
    isVegetarian: true,
    isSpicy: false,
    spiceLevel: "Mild",
    ingredients: "Tea, Milk, Spices",
    available: true
  },
  {
    id: "dr3",
    name: "Fresh Lime Soda",
    description: "Sweet or salted lime juice with soda water.",
    price: 100,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
    category: "DRINKS",
    isVegetarian: true,
    isSpicy: false,
    spiceLevel: "Mild",
    ingredients: "Lime, Soda, Sugar/Salt",
    available: true
  }
];
