const stockProducts = require('./data.json');

const searchProductsByBrand = (brand) => {
  // Desenvolva seu código dentro dessa função...
  let filterProducts = [];
  for (let indexProducts = 0; indexProducts < stockProducts.length; indexProducts++) {
    const product = stockProducts[indexProducts];
    if (product.brand === brand) {
      filterProducts.push(
        { description: product.description, formattedPrice: `R$ ${product.price}`}
      );
    }
  }
  return filterProducts;
};

module.exports = { searchProductsByBrand };
