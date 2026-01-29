const items = [
    {
        id: -1,
        name: 'Sample Item',
        description: 'This is a sample item for demonstration purposes.',
        imageFileName:'',
        price: 9.99,
        category: 'Sample Category'
    }
].map((item, i) => ({ ...item, id: i + 1 }));
