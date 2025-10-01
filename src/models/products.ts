import type { Product } from "../types"

export const products : Product[] = [
    {
        id: '1',
        name: 'Product 1',
        price: 100,
        salePrice: 90,
        imageURL: 'https://picsum.photos/200/300',
        category: 'Category 1',
        onSale: true,
    },
    {
        id: '2',
        name: 'Product 2',
        price: 200,
        imageURL: 'https://picsum.photos/200/300',
        category: 'Category 2',
        onSale: false,
    },
    {
        id: '3',
        name: 'Product 3',
        price: 300,
        salePrice: 270,
        imageURL: 'https://picsum.photos/200/300',
        category: 'Category 3',
        onSale: true,
    },
    {
        id: '4',
        name: 'Product 4',
        price: 400,
        imageURL: 'https://picsum.photos/200/300',
        category: 'Category 4',
        onSale: false,
    },
    {
        id: '5',
        name: 'Product 5',
        price: 500,
        salePrice: 450,
        imageURL: 'https://picsum.photos/200/300',
        category: 'Category 5',
        onSale: true,
    },
    {
        id: '6',
        name: 'Product 6',
        price: 600,
        imageURL: 'https://picsum.photos/200/300',
        category: 'Category 6',
        onSale: false,
    }
]