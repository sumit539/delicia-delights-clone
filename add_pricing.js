const fs = require('fs');
const path = require('path');

// Read the mockData.js file
const filePath = path.join(__dirname, 'src/data/mockData.js');
let content = fs.readFileSync(filePath, 'utf8');

// Define pricing rules based on category and sizes
const pricingRules = {
    'Jams': {
        '200g': 150,
        '500g': 320,
        '1kg': 580
    },
    'Chutneys': {
        '300g': 180,
        '1kg': 450
    },
    'Pickles': {
        '400g': 160,
        '1kg': 380,
        '5kg': 1500
    },
    'Ready to Eat': {
        '300g': 120,
        '500g': 195
    },
    'Canned Food': {
        '400g': 180,
        '800g': 340
    },
    'Sauces': {}  // Will handle individually
};

// Special pricing for specific sauce products
const saucePricing = {
    'Tomato Ketchup': { '200g': 80, '500g': 180, '1kg': 320, '5kg': 1400 },
    'Baked Beans': { '400g': 220 },
    'Rainbow Sauce': { '200g': 100, '500g': 220 },
    'Green Chili Sauce': { '200g': 90, '500g': 200 },
    'Tomato Puree': { '200g': 60, '800g': 180 }
};

// Function to add pricing to a product
function addPricingToProduct(productText, category, productName, sizes) {
    // If pricing already exists, skip
    if (productText.includes('pricing:')) {
        return productText;
    }

    let pricing;

    // Determine pricing based on category
    if (category === 'Sauces' && saucePricing[productName]) {
        pricing = saucePricing[productName];
    } else if (pricingRules[category]) {
        pricing = {};
        sizes.forEach(size => {
            if (pricingRules[category][size]) {
                pricing[size] = pricingRules[category][size];
            }
        });
    }

    if (!pricing || Object.keys(pricing).length === 0) {
        return productText;
    }

    // Format pricing object
    const pricingString = `        pricing: {\n${Object.entries(pricing).map(([size, price]) =>
        `            "${size}": ${price}`
    ).join(',\n')}\n        },\n`;

    // Insert pricing after sizes line
    const sizesRegex = /(sizes: \[.*?\],\n)/;
    return productText.replace(sizesRegex, `$1${pricingString}`);
}

// Process the file
console.log('Adding pricing to products...');

// Split into products
const products = content.split(/(?=\s{4}{\n\s{8}id: \d+,)/);

let modified = false;
const processedProducts = products.map((product, index) => {
    if (index === 0) return product; // Skip header

    // Extract product details
    const categoryMatch = product.match(/category: "(.*?)"/);
    const nameMatch = product.match(/name: "(.*?)"/);
    const sizesMatch = product.match(/sizes: \[(.*?)\]/);

    if (categoryMatch && nameMatch && sizesMatch) {
        const category = categoryMatch[1];
        const productName = nameMatch[1];
        const sizes = sizesMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''));

        const updated = addPricingToProduct(product, category, productName, sizes);
        if (updated !== product) {
            modified = true;
            console.log(`✅ Added pricing to: ${productName}`);
        }
        return updated;
    }

    return product;
});

if (modified) {
    const updatedContent = processedProducts.join('');
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log('\n✅ Successfully added pricing to all products!');
} else {
    console.log('\n⚠️  All products already have pricing or no updates needed.');
}
