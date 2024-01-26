const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  // Desenvolva seu código dentro dessa função...
  let products = [];
  for (let indexProduct = 0; indexProduct < stockProducts.length; indexProduct += 1) {
    const product = stockProducts[indexProduct];
    if (typeof product.nutritionalInfo.vitamins !== 'undefined') {
      products.push(
        {
          description: product.description,
          formattedPrice: `R$ ${product.price}`,
          vitaminsInformation:
            Object.entries(product.nutritionalInfo.vitamins).map((a) => `${a[0]} - ${a[1]}`),
        },
      );
    }
  }
  return products;
};

module.exports = { getProductsRichInVitamin };
