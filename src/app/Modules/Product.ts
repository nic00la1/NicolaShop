export class Product {
    constructor (
        public id: number,
        public name: string,
        public price: number,
        public image: string,
        public quantityInStock: number
    ) {}

    public static products = [
        new Product(1, 'Product 1', 100, 'https://via.placeholder.com/150', 10),
        new Product(2, 'Product 2', 200, 'https://via.placeholder.com/150', 15),
        new Product(3, 'Product 3', 300, 'https://via.placeholder.com/150', 5),
    ]
}

