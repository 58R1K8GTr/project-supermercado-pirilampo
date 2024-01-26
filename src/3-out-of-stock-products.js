const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let productsUnavaliable = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
      productsUnavaliable.push(stockProducts[index].productName);
    }
  }
  return productsUnavaliable;
};

module.exports = { getOutOfStockProducts };
