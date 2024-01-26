const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  // Desenvolva seu código dentro dessa função...
  const names = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    names.push(stockProducts[index].productName);
  }
  return names;
};

module.exports = { getUniqueProductsName };
