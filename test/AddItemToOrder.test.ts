import "mocha"
import { strict as assert } from "assert";
import { describe, it } from "node:test";
import { Order } from "../src/orderManager";
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
        const product = new Product();

        //Act
        order.addItem(product, 1)

        // Assert
        const { hold } = product.getStock()
        assert.equal(hold, 1);
    });

    // it(`Given a new order with no items
    // 	And the customer selects the product:
    // 			| id  | description          | stock | hold |
    // 			| 327 | Ibanez Tube Screamer | 7     | 0    |
    // 	And the customer specifies a sale quantity of 1
    // 	When the customer adds the item to their order
    // 	Then the order contains an item for the selected product with quantity 1`, () => {

    //     // Arrange
    //     const order = new Order();

    //     const expectedItem = {id: 327, description: 'Ibanez Tube Screamer', quantity: 1}

    //     // Act
    //     order.addItem(expectedProduct.id, expectedProduct.quantity)

    //     // Assert
    //     assert.deepEqual(order.item, expectedItem);
    // });
});