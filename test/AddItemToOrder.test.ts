import "mocha"
import { strict as assert } from "assert";
import {describe, it} from "node:test";
import { Warehouse } from "../src/warehouse";
import { OrderManager } from "../src/orderManager";

describe("Add Item to order", () => {
    it(`Given a new order with no items
		And the customer selects the product:
				| id  | description          | stock | hold |
				| 327 | Ibanez Tube Screamer | 7     | 0    |
		And the customer specifies a sale quantity of 1
		When the customer adds the item to their order
		Then a temporary hold of 1 is placed on the product stock`, () => {

        // Arrange
        const orderManager = new OrderManager();
        const warehouse = new Warehouse();
        const productId = 327
        
        //Act
        orderManager.addItem(productId)
        
        // Assert
        const productStock = warehouse.getStock(productId)
        assert.equal(productStock.hold, 1);
    });
});