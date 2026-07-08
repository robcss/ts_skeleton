
export class Product {
    hold: number
    stock: number

    constructor(stock: number){
        this.stock = stock
        this.hold = 0
    }

    getHold(): number {
        return this.hold
    }

    setHold(quantity: number): void {
        this.hold = quantity
    }

    getStock(): number {
        return this.stock
    }
}