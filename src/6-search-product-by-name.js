const stockProducts = require('./data.json');

const searchProductByName = (name) => {
  // Desenvolva seu código dentro dessa função...
  for (let indexProduct = 0; indexProduct < stockProducts.length; indexProduct += 1) {
    const product = stockProducts[indexProduct];
    if (product.productName === name) {
      return {
        description: product.description,
        formattedPrice: `R$ ${product.price}`,
      };
    }
  }
  return null;
};

module.exports = { searchProductByName };
