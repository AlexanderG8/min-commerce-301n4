export interface Product {
    id: string;
    name: string;
    price: number;
    salePrice?: number;
    imageURL: string;
    category: string;
    onSale?: boolean;
}

export interface CartItem{
    product: Product;
    quantity: number;
}