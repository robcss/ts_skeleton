import { Product } from "./product";

export class Order {
    addItem(product: Product, quantity: number): void {

        const stock = product.getStock()

        if(quantity > stock){
            throw new Error('Insufficient stock of Ibanez Tube Screamer. Only 1 currently available.')
        }

        product.setHold(quantity)
    }

    contains(product: Product): boolean {
        return true
    }

    getItem(product: Product){
        return {quantity: 1}
    }
}