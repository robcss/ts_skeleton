type Stock = { hold: number }

export class Warehouse {

    getStock(productId: number): Stock {
        return { hold: 1 }
    }
}