import { featuredProducts } from "./model";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  return (
    <div>
      <h2 className="text-lg text-gray-500 font-bold pt-12 pb-4">
        Featured Products
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {featuredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
