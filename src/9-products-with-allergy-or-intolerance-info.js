const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  // Desenvolva seu código dentro dessa função...
  let products = [];
  for (let indexProducts = 0; indexProducts < stockProducts.length; indexProducts += 1) {
    const product = stockProducts[indexProducts];
    if (typeof product.allergyOrIntolerance !== 'undefined') {
      products.push(
        {
          description: product.description,
          formattedPrice: `R$ ${product.price}`,
          allergyOrIntoleranceMessage: `Pode conter: ${product.allergyOrIntolerance.join(' ')}`,
        },
      );
    }
  }
  return products;
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
