// Import local images
import pineappleJam from '../assets/products/pineapple-jam.jpg';
import appleJam from '../assets/products/apple-jam.jpg';
import mangoJam from '../assets/products/mango-jam.jpg';
import strawberryJam from '../assets/products/strawberry-jam.jpg';
import sarsonSaag from '../assets/products/sarson-ka-saag.jpg';
import dalMakhani from '../assets/products/dal-makhani.jpg';
import cannedLitchi from '../assets/products/canned-litchi.jpg';
import mangoChutney from '../assets/products/mango-chutney.jpg';

export const products = [
    // Jams
    {
        id: 1,
        name: "Pineapple Jam",
        description: "Sweet and tangy jam made from fresh pineapples.",
        image: pineappleJam,
        category: "Jams",
        sizes: ["200g", "500g", "1kg"],
        pricing: {
            "200g": 150,
            "500g": 320,
            "1kg": 580
        },
        packing: "Glass Jars / Cans",
        shelfLife: "18 Months",
        ingredients: "Sugar, Pineapple Pulp (45%), Pectin, Citric Acid, Preservative (E211).",
        storage: "Store in a cool, dry place. Refrigerate after opening.",
        keyFeatures: ["Real Fruit Content", "No Artificial Colors", "Tangy & Sweet"],
        nutritionalInfo: {
            energy: "285 Kcal",
            protein: "0.3g",
            carbohydrate: "66g",
            sugar: "62g",
            fat: "0.1g"
        }
    },
    {
        id: 2,
        name: "Apple Jam",
        description: "Rich apple goodness in every spoon.",
        image: appleJam,
        category: "Jams",
        sizes: ["200g", "500g", "1kg"],
        pricing: {
            "200g": 150,
            "500g": 320,
            "1kg": 580
        },
        packing: "Glass Jars / Cans",
        shelfLife: "18 Months",
        ingredients: "Sugar, Apple Pulp (45%), Pectin, Citric Acid, Preservative (E211).",
        storage: "Store in a cool, dry place. Refrigerate after opening.",
        keyFeatures: ["Real Fruit Content", "No Artificial Colors", "Rich in Taste"],
        nutritionalInfo: {
            energy: "284 Kcal",
            protein: "0.2g",
            carbohydrate: "65g",
            sugar: "60g",
            fat: "0.1g"
        }
    },
    {
        id: 3,
        name: "Mango Jam",
        description: "The taste of real mangoes preserved for you.",
        image: mangoJam,
        category: "Jams",
        sizes: ["200g", "500g", "1kg"],
        pricing: {
            "200g": 150,
            "500g": 320,
            "1kg": 580
        },
        packing: "Glass Jars / Cans",
        shelfLife: "18 Months",
        ingredients: "Sugar, Mango Pulp (45%), Pectin, Citric Acid, Preservative (E211).",
        storage: "Store in a cool, dry place. Refrigerate after opening.",
        keyFeatures: ["Real Fruit Content", "No Artificial Colors", "Rich in Taste"],
        nutritionalInfo: {
            energy: "280 Kcal",
            protein: "0.4g",
            carbohydrate: "68g",
            sugar: "65g",
            fat: "0.1g"
        }
    },
    {
        id: 4,
        name: "Strawberry Jam",
        description: "Classic strawberry jam, a favorite for kids.",
        image: strawberryJam,
        category: "Jams",
        sizes: ["200g", "500g", "1kg"],
        pricing: {
            "200g": 150,
            "500g": 320,
            "1kg": 580
        },
        packing: "Glass Jars / Cans",
        shelfLife: "18 Months",
        ingredients: "Sugar, Strawberry Pulp (45%), Pectin, Citric Acid, Preservative (E211).",
        storage: "Store in a cool, dry place. Refrigerate after opening.",
        keyFeatures: ["Real Fruit Content", "No Artificial Colors", "Rich in Taste"],
        nutritionalInfo: {
            energy: "288 Kcal",
            protein: "0.3g",
            carbohydrate: "67g",
            sugar: "63g",
            fat: "0.1g"
        }
    },
    {
        id: 5,
        name: "Orange Jam",
        description: "Zesty orange marmalade jam.",
        image: pineappleJam, // Placeholder, ideally should be orangeJam
        category: "Jams",
        sizes: ["200g", "500g", "1kg"],
        pricing: {
            "200g": 150,
            "500g": 320,
            "1kg": 580
        },
        packing: "Glass Jars / Cans",
        shelfLife: "18 Months",
        ingredients: "Sugar, Orange Pulp (45%), Pectin, Citric Acid, Preservative (E211).",
        storage: "Store in a cool, dry place. Refrigerate after opening.",
        keyFeatures: ["Real Fruit Content", "No Artificial Colors", "Zesty Flavor"],
        nutritionalInfo: {
            energy: "282 Kcal",
            protein: "0.2g",
            carbohydrate: "64g",
            sugar: "59g",
            fat: "0.1g"
        }
    },

    // Chutneys
    {
        id: 6,
        name: "Guava Imli Chutney",
        description: "Tangy blend of guava and tamarind.",
        image: mangoChutney,
        category: "Chutneys",
        sizes: ["300g", "1kg"],
        pricing: {
            "300g": 180,
            "1kg": 450
        },
        packing: "Glass Jars",
        shelfLife: "12 Months",
        ingredients: "Guava Pulp, Tamarind, Sugar, Spices, Salt.",
        storage: "Store in a cool, dry place. Refrigerate after opening.",
        keyFeatures: ["Sweet & Tangy", "Unique Flavor", "Perfect with Snacks"],
        nutritionalInfo: {
            energy: "220 Kcal",
            protein: "1.0g",
            carbohydrate: "55g",
            sugar: "50g",
            fat: "0.2g"
        }
    },
    {
        id: 7,
        name: "Mango Chutney",
        description: "Sweet and spicy mango chutney.",
        image: mangoChutney,
        category: "Chutneys",
        sizes: ["300g", "1kg"],
        pricing: {
            "300g": 180,
            "1kg": 450
        },
        packing: "Glass Jars",
        shelfLife: "12 Months",
        ingredients: "Mango Slices, Sugar, Spices, Salt, Acidity Regulator.",
        storage: "Store in a cool, dry place. Refrigerate after opening.",
        keyFeatures: ["Sweet & Spicy", "Real Mango Slices", "Accompanies Indian Meals"],
        nutritionalInfo: {
            energy: "250 Kcal",
            protein: "0.5g",
            carbohydrate: "60g",
            sugar: "58g",
            fat: "0.1g"
        }
    },
    {
        id: 8,
        name: "Roasted Chilli Garlic Chutney",
        description: "Spicy roasted chilli with a garlic kick.",
        image: mangoChutney,
        category: "Chutneys",
        sizes: ["300g", "1kg"],
        pricing: {
            "300g": 180,
            "1kg": 450
        },
        packing: "Glass Jars",
        shelfLife: "12 Months",
        ingredients: "Garlic, Dry Red Chillies, Vegetable Oil, Spices, Salt, Acidity Regulator.",
        storage: "Store in a cool, dry place. Use dry spoon.",
        keyFeatures: ["Bold Flavor", "Spicy", "Versatile Dip"],
        nutritionalInfo: {
            energy: "210 Kcal",
            protein: "2.0g",
            carbohydrate: "15g",
            sugar: "3g",
            fat: "15g"
        }
    },
    {
        id: 9,
        name: "Tomato Chutney",
        description: "Traditional tomato chutney.",
        image: mangoChutney,
        category: "Chutneys",
        sizes: ["300g", "1kg"],
        pricing: {
            "300g": 180,
            "1kg": 450
        },
        packing: "Glass Jars",
        shelfLife: "12 Months",
        ingredients: "Tomato Pulp, Sugar, Spices, Salt, Acidity Regulator.",
        storage: "Store in a cool, dry place. Refrigerate after opening.",
        keyFeatures: ["Tangy Tomato Taste", "Mild Spices", "Great Spread"],
        nutritionalInfo: {
            energy: "190 Kcal",
            protein: "1.5g",
            carbohydrate: "45g",
            sugar: "40g",
            fat: "0.2g"
        }
    },

    // Pickles
    {
        id: 30,
        name: "Mango Pickle",
        description: "Traditional spicy mango pickle.",
        image: mangoChutney,
        category: "Pickles",
        sizes: ["400g", "1kg", "5kg"],
        pricing: {
            "400g": 160,
            "1kg": 380,
            "5kg": 1500
        },
        packing: "Glass Jars / Pet Jars",
        shelfLife: "12 Months",
        ingredients: "Raw Mango Pieces, Salt, Mustard Oil, Spices & Condiments, Acidity Regulator (E260).",
        storage: "Store in a cool, dry place. Use dry spoon.",
        keyFeatures: ["Traditional Recipe", "Spicy & Tangy", "No Artificial Preservatives"],
        nutritionalInfo: {
            energy: "180 Kcal",
            protein: "1.5g",
            carbohydrate: "12g",
            sugar: "2g",
            fat: "14g"
        }
    },
    {
        id: 31,
        name: "Mixed Pickle",
        description: "A mix of fresh vegetables pickled to perfection.",
        image: mangoChutney,
        category: "Pickles",
        sizes: ["400g", "1kg", "5kg"],
        pricing: {
            "400g": 160,
            "1kg": 380,
            "5kg": 1500
        },
        packing: "Glass Jars / Pet Jars",
        shelfLife: "12 Months",
        ingredients: "Mixed Vegetables (Mango, Carrot, Lime, Green Chilli), Salt, Mustard Oil, Spices, Acidity Regulator (E260).",
        storage: "Store in a cool, dry place. Use dry spoon.",
        keyFeatures: ["Traditional Recipe", "Spicy & Tangy", "No Artificial Preservatives"],
        nutritionalInfo: {
            energy: "175 Kcal",
            protein: "1.8g",
            carbohydrate: "10g",
            sugar: "1g",
            fat: "13g"
        }
    },
    {
        id: 32,
        name: "Green Chilli Pickle",
        description: "Spicy green chillies pickled in oil.",
        image: mangoChutney,
        category: "Pickles",
        sizes: ["400g", "1kg"],
        pricing: {
            "400g": 160,
            "1kg": 380
        },
        packing: "Glass Jars / Pet Jars",
        shelfLife: "12 Months",
        ingredients: "Green Chilli, Salt, Mustard Oil, Spices & Condiments, Acidity Regulator (E260).",
        storage: "Store in a cool, dry place. Use dry spoon.",
        keyFeatures: ["Extra Spicy", "Traditional Taste", "Handpicked Chillies"],
        nutritionalInfo: {
            energy: "160 Kcal",
            protein: "2.5g",
            carbohydrate: "8g",
            sugar: "1g",
            fat: "12g"
        }
    },

    // Ready to Eat
    {
        id: 10,
        name: "Sarson Ka Saag",
        description: "Authentic North Indian delicacy.",
        image: sarsonSaag,
        category: "Ready to Eat",
        sizes: ["300g", "500g"],
        pricing: {
            "300g": 120,
            "500g": 195
        },
        packing: "Cans",
        shelfLife: "24 Months",
        ingredients: "Mustard Leaves, Spinach, Ginger, Garlic, Maize Flour, Vegetable Oil, Salt.",
        storage: "Store in a cool, dry place. Once opened, consume immediately.",
        keyFeatures: ["Authentic Punjabi Taste", "Ready to Eat", "No Preservatives"],
        nutritionalInfo: {
            energy: "120 Kcal",
            protein: "4g",
            carbohydrate: "8g",
            sugar: "0.5g",
            fat: "8g"
        }
    },
    {
        id: 11,
        name: "Dal Makhani",
        description: "Creamy and rich Dal Makhani.",
        image: dalMakhani,
        category: "Ready to Eat",
        sizes: ["300g", "500g"],
        pricing: {
            "300g": 120,
            "500g": 195
        },
        packing: "Cans",
        shelfLife: "24 Months",
        ingredients: "Black Lentils, Butter, Cream, Tomato, Ginger, Garlic, Spices.",
        storage: "Store in a cool, dry place. Once opened, consume immediately.",
        keyFeatures: ["Rich & Creamy", "Slow Cooked", "Ready to Eat"],
        nutritionalInfo: {
            energy: "190 Kcal",
            protein: "6g",
            carbohydrate: "15g",
            sugar: "1g",
            fat: "12g"
        }
    },
    {
        id: 12,
        name: "Palak Paneer",
        description: "Cottage cheese in spinach gravy.",
        image: sarsonSaag, // Placeholder, ideally should be palakPaneer
        category: "Ready to Eat",
        sizes: ["300g", "500g"],
        pricing: {
            "300g": 120,
            "500g": 195
        },
        packing: "Cans",
        shelfLife: "24 Months",
        ingredients: "Spinach, Cottage Cheese, Onion, Tomato, Spices, Vegetable Oil.",
        storage: "Store in a cool, dry place. Once opened, consume immediately.",
        keyFeatures: ["Authentic Indian Flavor", "Ready to Eat", "Vegetarian Delight"],
        nutritionalInfo: {
            energy: "150 Kcal",
            protein: "8g",
            carbohydrate: "10g",
            sugar: "1g",
            fat: "9g"
        }
    },
    {
        id: 13,
        name: "Matar Paneer",
        description: "Peas and cottage cheese curry.",
        image: dalMakhani, // Placeholder, ideally should be matarPaneer
        category: "Ready to Eat",
        sizes: ["300g", "500g"],
        pricing: {
            "300g": 120,
            "500g": 195
        },
        packing: "Cans",
        shelfLife: "24 Months",
        ingredients: "Peas, Cottage Cheese, Onion, Tomato, Spices, Vegetable Oil.",
        storage: "Store in a cool, dry place. Once opened, consume immediately.",
        keyFeatures: ["Classic Indian Dish", "Ready to Eat", "Mildly Spiced"],
        nutritionalInfo: {
            energy: "140 Kcal",
            protein: "7g",
            carbohydrate: "12g",
            sugar: "2g",
            fat: "7g"
        }
    },
    {
        id: 14,
        name: "Kadhi Pakora",
        description: "Yogurt curry with fritters.",
        image: sarsonSaag, // Placeholder, ideally should be kadhiPakora
        category: "Ready to Eat",
        sizes: ["300g", "500g"],
        pricing: {
            "300g": 120,
            "500g": 195
        },
        packing: "Cans",
        shelfLife: "24 Months",
        ingredients: "Yogurt, Gram Flour, Onion Fritters, Spices, Vegetable Oil.",
        storage: "Store in a cool, dry place. Once opened, consume immediately.",
        keyFeatures: ["Homestyle Taste", "Ready to Eat", "Tangy & Flavorful"],
        nutritionalInfo: {
            energy: "130 Kcal",
            protein: "5g",
            carbohydrate: "15g",
            sugar: "1g",
            fat: "6g"
        }
    },
    {
        id: 25,
        name: "Chana Masala",
        description: "Spicy chickpea curry.",
        image: dalMakhani, // Placeholder, ideally should be chanaMasala
        category: "Ready to Eat",
        sizes: ["300g", "500g"],
        pricing: {
            "300g": 120,
            "500g": 195
        },
        packing: "Cans",
        shelfLife: "24 Months",
        ingredients: "Chickpeas, Onion, Tomato, Vegetable Oil, Spices, Salt.",
        storage: "Store in a cool, dry place. Once opened, consume immediately.",
        keyFeatures: ["Protein Rich", "Ready to Eat", "Rich Gravy"],
        nutritionalInfo: {
            energy: "150 Kcal",
            protein: "7g",
            carbohydrate: "20g",
            sugar: "1g",
            fat: "5g"
        }
    },
    {
        id: 26,
        name: "Rajma Masala",
        description: "Kidney beans in thick gravy.",
        image: dalMakhani, // Placeholder, ideally should be rajmaMasala
        category: "Ready to Eat",
        sizes: ["300g", "500g"],
        pricing: {
            "300g": 120,
            "500g": 195
        },
        packing: "Cans",
        shelfLife: "24 Months",
        ingredients: "Red Kidney Beans, Onion, Tomato, Vegetable Oil, Spices, Salt.",
        storage: "Store in a cool, dry place. Once opened, consume immediately.",
        keyFeatures: ["Home Style Taste", "Ready to Eat", "High Fiber"],
        nutritionalInfo: {
            energy: "145 Kcal",
            protein: "6g",
            carbohydrate: "22g",
            sugar: "1g",
            fat: "4g"
        }
    },
    {
        id: 27,
        name: "Baingan ka Bharta",
        description: "Smoky roasted eggplant mash.",
        image: sarsonSaag, // Placeholder, ideally should be bainganBharta
        category: "Ready to Eat",
        sizes: ["300g", "500g"],
        pricing: {
            "300g": 120,
            "500g": 195
        },
        packing: "Cans",
        shelfLife: "24 Months",
        ingredients: "Roasted Eggplant, Onion, Tomato, Spices, Vegetable Oil.",
        storage: "Store in a cool, dry place. Once opened, consume immediately.",
        keyFeatures: ["Smoky Flavor", "Ready to Eat", "Authentic Recipe"],
        nutritionalInfo: {
            energy: "110 Kcal",
            protein: "3g",
            carbohydrate: "10g",
            sugar: "2g",
            fat: "7g"
        }
    },

    // Canned Fruits
    {
        id: 15,
        name: "Canned Litchi",
        description: "Juicy litchis canned in syrup.",
        image: cannedLitchi,
        category: "Canned Food",
        sizes: ["400g", "800g"],
        pricing: {
            "400g": 180,
            "800g": 340
        },
        packing: "Cans",
        shelfLife: "36 Months",
        ingredients: "Litchi, Water, Sugar, Citric Acid.",
        storage: "Store in a cool, dry place.",
        keyFeatures: ["Juicy & Sweet", "Ready to Eat", "No Artificial Flavors"],
        nutritionalInfo: {
            energy: "70 Kcal",
            protein: "0.5g",
            carbohydrate: "18g",
            sugar: "16g",
            fat: "0.1g"
        }
    },
    {
        id: 16,
        name: "Canned Mango Slice",
        description: "Fresh mango slices preserved.",
        image: cannedLitchi, // Placeholder, ideally should be cannedMangoSlice
        category: "Canned Food",
        sizes: ["400g", "800g"],
        pricing: {
            "400g": 180,
            "800g": 340
        },
        packing: "Cans",
        shelfLife: "36 Months",
        ingredients: "Mango Slices, Water, Sugar, Citric Acid.",
        storage: "Store in a cool, dry place.",
        keyFeatures: ["Sweet & Tangy", "Ready to Eat", "Natural Mango Flavor"],
        nutritionalInfo: {
            energy: "85 Kcal",
            protein: "0.6g",
            carbohydrate: "21g",
            sugar: "19g",
            fat: "0.1g"
        }
    },
    {
        id: 17,
        name: "Canned Peach Halves",
        description: "Premium peach halves in syrup.",
        image: cannedLitchi, // Placeholder, ideally should be cannedPeachHalves
        category: "Canned Food",
        sizes: ["400g", "800g"],
        pricing: {
            "400g": 180,
            "800g": 340
        },
        packing: "Cans",
        shelfLife: "36 Months",
        ingredients: "Peach Halves, Water, Sugar, Citric Acid.",
        storage: "Store in a cool, dry place.",
        keyFeatures: ["Premium Quality", "Sweet & Tender", "Versatile Dessert Ingredient"],
        nutritionalInfo: {
            energy: "75 Kcal",
            protein: "0.5g",
            carbohydrate: "19g",
            sugar: "17g",
            fat: "0.1g"
        }
    },
    {
        id: 18,
        name: "Canned Pear Halves",
        description: "Sweet pear halves ready to eat.",
        image: cannedLitchi, // Placeholder, ideally should be cannedPearHalves
        category: "Canned Food",
        sizes: ["400g", "800g"],
        pricing: {
            "400g": 180,
            "800g": 340
        },
        packing: "Cans",
        shelfLife: "36 Months",
        ingredients: "Pear Halves, Water, Sugar, Citric Acid.",
        storage: "Store in a cool, dry place.",
        keyFeatures: ["Sweet & Juicy", "Ready to Eat", "Perfect for Desserts"],
        nutritionalInfo: {
            energy: "78 Kcal",
            protein: "0.4g",
            carbohydrate: "20g",
            sugar: "18g",
            fat: "0.1g"
        }
    },
    {
        id: 19,
        name: "Canned Pineapple Slice",
        description: "Tropical pineapple slices.",
        image: cannedLitchi, // Placeholder, ideally should be cannedPineappleSlice
        category: "Canned Food",
        sizes: ["400g", "800g"],
        pricing: {
            "400g": 180,
            "800g": 340
        },
        packing: "Cans",
        shelfLife: "36 Months",
        ingredients: "Pineapple Slices, Water, Sugar, Citric Acid.",
        storage: "Store in a cool, dry place.",
        keyFeatures: ["Tropical Flavor", "Ready to Eat", "Versatile Ingredient"],
        nutritionalInfo: {
            energy: "80 Kcal",
            protein: "0.5g",
            carbohydrate: "20g",
            sugar: "18g",
            fat: "0.1g"
        }
    },
    {
        id: 28,
        name: "Canned Red Cherries",
        description: "Sweet red cherries preserved in syrup.",
        image: cannedLitchi, // Placeholder, ideally should be cannedRedCherries
        category: "Canned Food",
        sizes: ["400g", "800g"],
        pricing: {
            "400g": 180,
            "800g": 340
        },
        packing: "Cans",
        shelfLife: "36 Months",
        ingredients: "Red Cherries, Water, Sugar, Citric Acid.",
        storage: "Store in a cool, dry place.",
        keyFeatures: ["Sweet & Tart", "Ready to Eat", "Vibrant Color"],
        nutritionalInfo: {
            energy: "90 Kcal",
            protein: "0.7g",
            carbohydrate: "22g",
            sugar: "20g",
            fat: "0.2g"
        }
    },

    // Sauces & Ketchup
    {
        id: 20,
        name: "Tomato Ketchup",
        description: "Classic tomato ketchup.",
        image: mangoChutney, // Placeholder, ideally should be tomatoKetchup
        category: "Sauces",
        sizes: ["200g", "500g", "1kg", "5kg"],
        pricing: {
            "200g": 80,
            "500g": 180,
            "1kg": 320,
            "5kg": 1400
        },
        packing: "Glass Bottles / Pet Bottles / Cans",
        shelfLife: "18 Months",
        ingredients: "Tomato Paste (28%), Sugar, Salt, Vinegar, Spices, Stabilizers.",
        storage: "Store in a cool, dry place. Refrigerate after opening.",
        keyFeatures: ["Thick & Rich", "Made from Red Tomatoes", "Perfect Dip"],
        nutritionalInfo: {
            energy: "140 Kcal",
            protein: "1.5g",
            carbohydrate: "33g",
            sugar: "28g",
            fat: "0.2g"
        }
    },
    {
        id: 21,
        name: "Baked Beans",
        description: "Beans in tomato sauce.",
        image: mangoChutney, // Placeholder, ideally should be bakedBeans
        category: "Sauces",
        sizes: ["400g"],
        pricing: {
            "400g": 220
        },
        packing: "Cans",
        shelfLife: "24 Months",
        ingredients: "Navy Beans, Tomato Sauce, Sugar, Salt, Spices, Modified Starch.",
        storage: "Store in a cool, dry place.",
        keyFeatures: ["Protein Source", "Rich Tomato Sauce", "English Breakfast Essential"],
        nutritionalInfo: {
            energy: "130 Kcal",
            protein: "6g",
            carbohydrate: "22g",
            sugar: "5g",
            fat: "0.5g"
        }
    },
    {
        id: 22,
        name: "Rainbow Sauce",
        description: "A mix of flavors in one sauce.",
        image: mangoChutney,
        category: "Sauces",
        sizes: ["200g", "500g"],
        pricing: {
            "200g": 100,
            "500g": 220
        },
        packing: "Glass Bottles",
        shelfLife: "18 Months",
        ingredients: "Mixed Vegetables, Sugar, Vinegar, Spices, Salt, Preservatives.",
        storage: "Store in a cool, dry place. Refrigerate after opening.",
        keyFeatures: ["Unique Flavor Blend", "Versatile Use", "No Artificial Colors"],
        nutritionalInfo: {
            energy: "120 Kcal",
            protein: "1.0g",
            carbohydrate: "28g",
            sugar: "25g",
            fat: "0.1g"
        }
    },
    {
        id: 23,
        name: "Green Chili Sauce",
        description: "Spicy green chili sauce.",
        image: mangoChutney,
        category: "Sauces",
        sizes: ["200g", "500g"],
        pricing: {
            "200g": 90,
            "500g": 200
        },
        packing: "Glass Bottles",
        shelfLife: "18 Months",
        ingredients: "Green Chillies, Vinegar, Sugar, Salt, Garlic, Spices, Preservatives.",
        storage: "Store in a cool, dry place. Refrigerate after opening.",
        keyFeatures: ["Extra Spicy", "Authentic Flavor", "Perfect for Asian Cuisine"],
        nutritionalInfo: {
            energy: "100 Kcal",
            protein: "1.2g",
            carbohydrate: "22g",
            sugar: "18g",
            fat: "0.2g"
        }
    },
    {
        id: 24,
        name: "Tomato Puree",
        description: "Rich tomato puree for cooking.",
        image: mangoChutney, // Placeholder, ideally should be tomatoPuree
        category: "Sauces",
        sizes: ["200g", "800g"],
        pricing: {
            "200g": 60,
            "800g": 180
        },
        packing: "Cans",
        shelfLife: "24 Months",
        ingredients: "Tomato Paste, Water, Salt, Citric Acid.",
        storage: "Store in a cool, dry place. Refrigerate after opening.",
        keyFeatures: ["Concentrated", "Natural Color", "Cooking Essential"],
        nutritionalInfo: {
            energy: "40 Kcal",
            protein: "2g",
            carbohydrate: "8g",
            sugar: "4g",
            fat: "0.2g"
        }
    }
];

export const clientele = [
    { name: "Bharti Retail", image: "https://catalog.wlimg.com/1/304027/small-images/bharti-retail-1227736.jpg" },
    { name: "Bharti Walmart", image: "https://catalog.wlimg.com/1/304027/small-images/bharti-walmart-1227737.jpg" },
    { name: "Carrefour", image: "https://catalog.wlimg.com/1/304027/small-images/carrefour-1227738.jpg" },
    { name: "Dabur", image: "https://catalog.wlimg.com/1/304027/small-images/dabur-1227739.jpg" },
    { name: "Desai Brothers Ltd.", image: "https://catalog.wlimg.com/1/304027/small-images/desai-brothers-ltd-1227741.jpg" },
    { name: "Earthy Foods", image: "https://catalog.wlimg.com/1/304027/small-images/earthy-foods-1227742.jpg" },
    { name: "Spencer's", image: "https://catalog.wlimg.com/1/304027/small-images/spencer-s-1227744.jpg" }
];

export const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Retail Partner",
        text: "Delicia Delights has been our trusted supplier for over 5 years. The quality of their jams is unmatched in the market."
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Hotel Manager",
        text: "Our guests love the breakfast spread, especially the mixed fruit jam and canned pineapples. Consistently great taste!"
    },
    {
        id: 3,
        name: "Amit Patel",
        role: "Food Distributor",
        text: "Working with Delicia Foods has been a pleasure. Their products fly off the shelves, and customer satisfaction is always high."
    },
    {
        id: 4,
        name: "Priya Sharma",
        role: "Restaurant Owner",
        text: "The ready-to-eat products have been a game changer for our menu. Authentic taste with consistent quality every single time."
    },
    {
        id: 5,
        name: "David Wilson",
        role: "Export Partner",
        text: "Delicia's international quality standards make them our preferred choice for exports. Reliable delivery and excellent product range."
    }
];
