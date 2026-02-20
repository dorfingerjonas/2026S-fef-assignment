const id = Number(new URLSearchParams(window.location.search).get('id'));

const product = items.find(p => p.id === id);

if (isNaN(id) || !id || !product) {
    // product not found or invalid ID -> show error message
    document.getElementById('error-text').style.display = 'block';
}

// everything is fine -> show product details
const productWrapper = document.createElement('div');

productWrapper.classList.add('product-wrapper');

const name = document.createElement('h2');
name.textContent = product.name;

const image = document.createElement('img');
image.src = `images/products/${ product.imageFileName }`;
image.alt = product.name;

const description = document.createElement('p');
description.textContent = product.description;

const price = document.createElement('p');
price.textContent = `Price: ${ product.price.toFixed(2) } €`;

price.classList.add('product-price');

productWrapper.appendChild(name);
productWrapper.appendChild(image);
productWrapper.appendChild(description);
productWrapper.appendChild(price);

document.getElementById('product-container').appendChild(productWrapper);
