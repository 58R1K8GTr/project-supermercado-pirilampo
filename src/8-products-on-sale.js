const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  // Desenvolva seu código dentro dessa função...
  let products = [];
  for (let indexProducts = 0; indexProducts < stockProducts.length; indexProducts++) {
    const product = stockProducts[indexProducts];
    if (product.onSale) {
      products.push(
        {
          description: product.description,
          formattedPrice: `R$ ${product.price}`,
          onSale: product.onSale
        }
      );
    }
  }
  return products;
};

module.exports = { getProductsOnSale };
