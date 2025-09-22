import AppLoader from "@/components/loaders/AppLoader";
import SearchProducts from "@/features/products/SearchProducts";
import { Suspense } from "react";

const ShopPage = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-64">
            <AppLoader />
          </div>
        }
      >
        <SearchProducts />
      </Suspense>
    </div>
  );
};

export default ShopPage;
