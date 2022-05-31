// TEST CODE
const { getTotalCost, getReceipt } = require('../src/supermarketCheckout.js')

describe("Supermarket Checkout", () => {
  it("returns 0 if quantity is 0", () => {
    // setup
    const basket = [{name: 'apple', price: 1, quantity: 0}, {name: 'orange', price: 2, quantity: 0}]
    // execute
    const totalCost = getTotalCost(basket)
    // verify
    expect(totalCost).toEqual(0)
  })

  it("returns 4 is the quantity of apple is 2, and orange 1", () => {
    // setup
    const basket = [{name: 'apple', price: 1, quantity: 2}, {name: 'orange', price: 2, quantity: 1}]
    // execute
    const totalCost = getTotalCost(basket)
    // verify
    expect(totalCost).toEqual(4)
  })

  it("returns a list of items and total cost", () => {
    // setup
    const basket = [{name: 'apple', price: 1, quantity: 3}, {name: 'orange', price: 2, quantity: 1}]
    const expected = [{name: 'apple', price: 1, quantity: 3}, {name: 'orange', price: 2, quantity: 1}, 'Total cost: 5']
    // execute
    const result = getReceipt(basket)
    // verify
    expect(result).toEqual(expected)
  })
})