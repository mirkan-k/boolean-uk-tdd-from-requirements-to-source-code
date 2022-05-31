//
function getTotalCost (basket) {
  let totalCost = 0

  for (let i = 0; i < basket.length; i++) {
    const cost = basket[i].price * basket[i].quantity
    totalCost += cost
  }
  return totalCost
}

function getBasket(basket) {
  return basket
}

function getReceipt(basket) {
  basket.push(`Total cost: ${getTotalCost(basket)}`)
  return basket
}

module.exports = {
  getTotalCost,
  getReceipt,
  getBasket
}
console.log(getReceipt([{name: 'apple', price: 1, quantity: 3}, {name: 'orange', price: 2, quantity: 1}]))