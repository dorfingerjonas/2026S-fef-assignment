const cartProductIds = JSON.parse(localStorage.getItem('cart')) || [];

renderCart();

function renderCart() {
    const groupedProducts = {};

    if (cartProductIds.length === 0) {
        document.getElementById('cart-wrapper').style.display = 'none';
        document.getElementById('empty-cart').style.display = 'block';
        return;
    } else {
        document.getElementById('cart-wrapper').style.display = 'unset';
        document.getElementById('empty-cart').style.display = 'none';
    }

    cartProductIds.forEach(id => {
        if (groupedProducts[id]) {
            groupedProducts[id].amount++;
        } else {
            const item = items.find(p => p.id === id);
            if (isNaN(id) || !id || !item) {
                // invalid ID -> skip
                return;
            }

            groupedProducts[id] = { amount: 1, item: items.find(p => p.id === id) };
        }
    });

    const productsContainer = document.getElementById('products-container');

    // clear previous content
    productsContainer.innerHTML = '';

    let cartPrice = 0;

    Object.values(groupedProducts)
        .sort((a, b) => a.item.name.localeCompare(b.item.name))
        .forEach(({ amount, item }) => {
            const product = document.createElement('tr');
            product.classList.add('product');

            const imageCell = document.createElement('td');
            const image = document.createElement('img');
            image.alt = item.name;
            image.src = `images/products/${ item.imageFileName }`;
            imageCell.appendChild(image);
            product.appendChild(imageCell);

            const name = document.createElement('td');
            name.textContent = item.name;
            product.appendChild(name);

            const piecePrice = document.createElement('td');
            piecePrice.textContent = `${ (item.price).toFixed(2) }€`;
            product.appendChild(piecePrice);

            const quantityWrapper = document.createElement('td');
            quantityWrapper.classList.add('quantity-wrapper');

            const quantity = document.createElement('span');
            quantity.textContent = `x${ amount }`;

            const addOneButton = document.createElement('span');
            addOneButton.textContent = '+';

            addOneButton.addEventListener('click', () => {
                cartProductIds.push(item.id);

                localStorage.setItem('cart', JSON.stringify(cartProductIds));

                renderCart();
            });

            const removeOneButton = document.createElement('span');
            removeOneButton.textContent = '-';

            removeOneButton.addEventListener('click', () => {
                const index = cartProductIds.indexOf(item.id);

                if (index > -1) {
                    cartProductIds.splice(index, 1);
                }

                localStorage.setItem('cart', JSON.stringify(cartProductIds));

                renderCart();
            });

            quantityWrapper.appendChild(removeOneButton);
            quantityWrapper.appendChild(quantity);
            quantityWrapper.appendChild(addOneButton);

            product.appendChild(quantityWrapper);

            const totalPrice = document.createElement('td');
            totalPrice.textContent = `${ (item.price * amount).toFixed(2) }€`;
            product.appendChild(totalPrice);

            cartPrice += item.price * amount;

            productsContainer.appendChild(product);
        });

    const cartPriceElement = document.getElementById('cartPrice');
    cartPriceElement.textContent = `${ cartPrice.toFixed(2) }€`;

}

function checkout() {
    localStorage.setItem('cart', JSON.stringify([]));
}
