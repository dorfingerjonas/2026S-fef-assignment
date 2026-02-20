const productWrapper = document.getElementById('products-container');

const products = items.sort((a, b) => a.name.localeCompare(b.name));

function createAddToCartButton(item) {
    const addToCartIcon = document.createElement('span');
    addToCartIcon.classList.add('material-symbols-outlined', 'cart-btn');
    addToCartIcon.textContent = 'add_shopping_cart';

    addToCartIcon.addEventListener('click', () => {
        // prevent multiple items added because of double click (or multiple clicks)
        if (addToCartIcon.textContent === 'check_circle') return;

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item.id);
        localStorage.setItem('cart', JSON.stringify(cart));

        addToCartIcon.textContent = 'check_circle';
        addToCartIcon.style.color = 'green';
        addToCartIcon.style.pointerEvents = 'none';

        setTimeout(() => {
            addToCartIcon.textContent = 'add_shopping_cart';
            addToCartIcon.style.color = '';
            addToCartIcon.style.pointerEvents = '';
        }, 2000);
    });

    return addToCartIcon;
}

for (const item of products) {
    const card = document.createElement('div');

    card.classList.add('product-card');

    const img = document.createElement('img');
    img.src = `images/products/${ item.imageFileName }`;
    img.alt = item.name;
    card.appendChild(img);

    const name = document.createElement('h3');
    name.textContent = item.name;
    card.appendChild(name);

    const description = document.createElement('p');
    description.textContent = item.description;
    card.appendChild(description);

    const priceWrapper = document.createElement('div');
    priceWrapper.classList.add('price-wrapper');

    const price = document.createElement('p');
    price.textContent = `${ item.price.toFixed(2) } €`;
    price.classList.add('product-price');
    priceWrapper.appendChild(price);
    priceWrapper.appendChild(createAddToCartButton(item));
    card.appendChild(priceWrapper);

    const showMore = document.createElement('a');
    showMore.href = `product.html?id=${ item.id }`;
    showMore.textContent = 'Show more';
    showMore.classList.add('show-more');

    const icon = document.createElement('span');
    icon.classList.add('material-symbols-outlined');
    icon.textContent = 'expand_circle_right';
    showMore.appendChild(icon);

    card.appendChild(showMore);

    productWrapper.appendChild(card);
}
