import { ProductCard } from "./ProductCard";
import { products } from "../models/products";

export function ProductList () {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
                <ProductCard {...product} key={product.id} />
            ))}
        </div>
    )
}