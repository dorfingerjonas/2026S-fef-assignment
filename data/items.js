// description was generated with the help of Google Gemini.
// all images are taken from similar shops on the internet and may be protected by copyright. they are only used for
// demonstration purposes.
const items = [
    {
        name: 'Tipo 00 Flour - 1kg',
        description: 'The gold standard for Neapolitan pizza. Finely milled for a silky dough and the perfect \'leopard-spotted\' char.',
        imageFileName: 'flour_00.png',
        price: 3.50,
        category: 'Ingredients'
    },
    {
        name: 'San Marzano D.O.P. Tomatoes',
        description: 'Authentic canned tomatoes grown in the volcanic soil of Mount Vesuvius. Naturally sweet and low acidity.',
        imageFileName: 'san_marzano.webp',
        price: 5.50,
        category: 'Ingredients'
    },
    {
        name: 'Perforated Aluminum Pizza Peel',
        description: 'Lightweight and professional-grade. The perforations allow excess flour to fall away for a crispier base.',
        imageFileName: 'pizza_peel.avif',
        price: 45.00,
        category: 'Accessories'
    },
    {
        name: 'Cordierite Pizza Stone',
        description: 'Heavy-duty baking stone that retains high heat to give your home oven the power of a wood-fired brick oven.',
        imageFileName: 'pizza_stone.avif',
        price: 35.99,
        category: 'Equipment'
    },
    {
        name: 'Digital Dough Scale',
        description: 'Precision is key. Measures down to 0.1g for getting your yeast and salt ratios exactly right.',
        imageFileName: 'scale.webp',
        price: 22.00,
        category: 'Accessories'
    },
    {
        name: 'Infrared Laser Thermometer',
        description: 'Never guess again. Measure your stone temperature instantly to ensure the perfect launch environment.',
        imageFileName: 'infrared.avif',
        price: 29.50,
        category: 'Accessories'
    },
    {
        name: 'Dough Proofing Box',
        description: 'An airtight container designed to let your dough balls ferment and rise without drying out.',
        imageFileName: 'dough_box.webp',
        price: 18.99,
        category: 'Accessories'
    },
    {
        name: 'Stainless Steel Dough Scraper',
        description: 'The pizzaiolo\'s best friend. Perfect for portioning dough and cleaning your workstation with ease.',
        imageFileName: 'dough_scraper.png',
        price: 9.99,
        category: 'Accessories'
    },
    {
        name: 'Sicilian Extra Virgin Olive Oil',
        description: 'Cold-pressed and fruity. The ideal finishing touch for your pizza right before serving.',
        imageFileName: 'olive_oil.webp',
        price: 19.00,
        category: 'Ingredients'
    },
    {
        name: 'Pizza Cutter',
        description: 'A blade that slices through the entire pizza in one swift motion without dragging toppings.',
        imageFileName: 'pizza_cutter.avif',
        price: 24.99,
        category: 'Accessories'
    },
    {
        name: 'Dried Oregano 25g',
        description: 'Intensely aromatic herbs dried on the vine. Essential for a classic Marinara or Margherita.',
        imageFileName: 'oregano.webp',
        price: 7.25,
        category: 'Ingredients'
    },
    {
        name: 'Cozze 17" Gas Pizza Oven',
        'description': 'Master the art of the 2-minute pizza. This powerful gas-fired oven reaches 400°C in just 20 minutes.',
        imageFileName: 'pizza_oven.avif',
        price: 249.99,
        category: 'Equipment'
    }
].map((item, i) => ({ ...item, id: i + 1 }));
