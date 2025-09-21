import { popularProducts, Product } from "./model";
import ProductCard from "./ProductCard";

const PopularProducts = () => {
  return (
    <div>
      <h2 className="text-lg text-gray-500 font-bold pt-12 pb-4">Popular Products</h2>
      <div className="grid grid-cols-4 gap-8">
        {popularProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
