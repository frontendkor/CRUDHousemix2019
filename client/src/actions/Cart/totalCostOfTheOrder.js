// Calculate the total amount of purchases
let totalCostOfTheOrder = cart => {
  let arrSum = cart.map(({ price }) => {
    return +price;
  });
  let sum = arrSum.reduce((previusResult, item) => {
    return previusResult + item;
  }, 0);
  return sum.toFixed(1);
};

export default totalCostOfTheOrder;
