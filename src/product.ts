type Stock = { hold: number }

export class Product {

    getStock(): Stock {
        return { hold: 1 }
    }
}