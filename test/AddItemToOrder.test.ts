import "mocha"
import { strict as assert } from "assert";
import { describe, it } from "node:test";
import { Order } from "../src/order";
import { Product } from "../src/product";

describe("Add Item to order", () => {
    it(`Given a new order with no items
		And the customer selects the product:
				| id  | description          | stock | hold |
				| 327 | Ibanez Tube Screamer | 7     | 0    |
		And the customer specifies a sale quantity of 1
		When the customer adds the item to their order
		Then a temporary hold of 1 is placed on the product stock`, () => {

        // Arrange
        const order = new Order();
        const product = new Product(7);

        //Act
        order.addItem(product, 1)

        // Assert
        assert.equal(product.getHold(), 1);
    });

    it(`Given a new order with no items
    	And the customer selects the product:
    			| id  | description          | stock | hold |
    			| 327 | Ibanez Tube Screamer | 7     | 0    |
    	And the customer specifies a sale quantity of 1
    	When the customer adds the item to their order
    	Then the order contains an item for the selected product with quantity 1`, () => {

        // Arrange
        const order = new Order();
        const product = new Product(7)
        // Act
        order.addItem(product, 1)

        // Assert
        assert.equal(order.contains(product), true);
        assert.equal(order.getItem(product).quantity, 1)
    });

    it(`Reject adding an item when insufficient stock is available and no stock is on hold
		Given a new order with no items
		And the customer selects the product:
				| id  | description          | stock | hold |
				| 327 | Ibanez Tube Screamer | 1     | 0    |
		And the customer specifies a sale quantity of 2
		When the customer requests to add the item to their order
		Then an "Insufficient stock" error is raised
		And the error message is:
"Insufficient stock of Ibanez Tube Screamer. Only 1 currently available."`, () => {

        // Arrange
        const order = new Order();
        const product = new Product(1)        

        // Act and Assert
        assert.throws(() => order.addItem(product, 2), 
        new Error('Insufficient stock of Ibanez Tube Screamer. Only 1 currently available.')
    )
    });
});