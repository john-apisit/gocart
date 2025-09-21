import { popularProducts, Product, products } from "./model";
import ProductCard from "./ProductCard";
import SearchTitle from "./SearchTitle";

const SearchProducts = () => {
  return (
    <div>
      <SearchTitle />
      <div className="grid grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default SearchProducts;
