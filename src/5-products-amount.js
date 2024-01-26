const stockProducts = require('./data.json');

const getProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
  let quantity = 0;
  for (let indexProduct = 0; indexProduct < stockProducts.length; indexProduct++) {
    const product = stockProducts[indexProduct];
    quantity += product.quantityInStock;
  }
  return quantity;
};

module.exports = { getProductsAmount };
