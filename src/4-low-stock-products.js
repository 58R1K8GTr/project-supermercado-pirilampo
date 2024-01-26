const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let lowStockProductsNames = [];
  for (let indexProduct = 0; indexProduct < stockProducts.length; indexProduct += 1) {
    const element = stockProducts[indexProduct];
    if (element.quantityInStock > 0 && element.quantityInStock <= 10) {
      lowStockProductsNames.push(`${element.productName}: ${element.quantityInStock} unidades`);
    }
  }
  return lowStockProductsNames;
};

module.exports = { getLowStockProducts };
