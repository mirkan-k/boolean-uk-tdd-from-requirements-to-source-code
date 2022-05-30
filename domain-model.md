// Add your domain model below

```md
As a supermarket shopper,
So that I can pay for items at checkout items,
I'd like to be able to know the total cost of items in my basket.

As an organised individual,
So that I can evaluate my shopping habits,
I'd like to see a receipt that includes line items (quantity, name, cost) and the total cost.
```

| Nouns | Verbs
| ------ | ------
| supermarket | Pay
| shopper |  able to know
| items | evaluate
| total cost |  see
| items |  
| basket |
| individual |

| Methods | Inputs | Scenario | Outputs
| ------ | ------ | ------ | -----
| addItemToBasket(item, itemQuantity) | item(@Object{Name, Quantity}), itemQuatinty(@Number) | If Quantity is lower or equal to the item total quantity in the supermarket's main stock array  | item Object is added to Basket array which is filled with other all other item objects
| getBasketTotal(basket[]) | basket([item{Quantity, Cost}]) | Multiply the Quantity by Cost for each item, then Sum up all  | totalCost(@Number)
