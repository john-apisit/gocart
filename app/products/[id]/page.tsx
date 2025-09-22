import { mockProducts } from "@/features/products/model";
import ProductDetail from "@/features/products/ProductDetail";
import ProductDetailImage from "@/features/products/ProductDetailImage";
import { notFound } from "next/navigation";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = await mockProducts.find((product) => product.id === id);

  if (!product) {
    return notFound();
  }

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="grid grid-cols-3 gap-8">
        <ProductDetailImage
          productName={product.name}
          imageUrl={product.image[0]}
        />
        <ProductDetail product={product} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
