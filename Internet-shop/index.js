document.addEventListener('DOMContentLoaded', () => {
  const categoryList = document.getElementById('category-list');
  const productList = document.getElementById('product-list');
  const productDetails = document.getElementById('product-details');
  const buyButton = document.getElementById('buy-button');
  const buyMessage = document.getElementById('buy-message');
  const products = [
    { id: 1, category: 1, name: 'Груші' },
    { id: 2, category: 1, name: 'Абрикос' },
    { id: 3, category: 1, name: 'Яблука' },
    { id: 4, category: 2, name: 'Картопля' },
    { id: 5, category: 2, name: 'Капуста' },
    { id: 6, category: 2, name: 'Помідор' },
    { id: 7, category: 3, name: 'Вишня' },
    { id: 8, category: 3, name: 'Полуниця' },
    { id: 9, category: 3, name: 'Малина' }
  ];

  const productDetailsData = {
    1: { name: 'Груші', description: 'Груша Киргизка', price: 100 },
    2: { name: 'Абрикос', description: 'Абрикос Цунамі', price: 49 },
    3: { name: 'Яблука', description: 'Яблука Фуджі', price: 25 },
    4: { name: 'Картопля', description: 'Картопля Королева Ганна', price: 50 },
    5: { name: 'Капуста', description: 'Капуста Центуріон', price: 80 },
    6: { name: 'Помідор', description: 'Помідор Монгольський карлик', price: 15 },
    7: { name: 'Вишня', description: 'Вишня Шоколадниця', price: 28 },
    8: { name: 'Полуниця', description: 'Полуниця Капрі', price: 200 },
    9: { name: 'Малина', description: 'Малина Метеор', price: 148 },
  };

  const showProducts = (categoryId) => {
    const categoryProducts = products.filter(product => product.category === parseInt(categoryId));
    productList.innerHTML = categoryProducts.map(product =>
      `<li data-product="${product.id}">${product.name}</li>`
    ).join('');
  };

  const showProductDetails = (productId) => {
    const product = productDetailsData[productId];
    productDetails.textContent = `Назва: ${product.name} Опис: ${product.description} Ціна: ${product.price}`;
    buyButton.style.display = 'block';
  };

  categoryList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'LI') {
      const categoryId = target.getAttribute('data-category');
      showProducts(categoryId);
    }
  });

  productList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'LI') {
      const productId = target.getAttribute('data-product');
      showProductDetails(productId);
    }
  });

  buyButton.addEventListener('click', () => {
    buyMessage.style.display = 'block';
    setTimeout(resetPage, 2000);
  });

  const resetPage = () => {
    productList.innerHTML = '';
    productDetails.textContent = '';
    buyButton.style.display = 'none';
    buyMessage.style.display = 'none';
  };
});
