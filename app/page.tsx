import Banner from "@/features/home/Banner";
import SubscribeNow from "@/features/home/SubscribeNow";
import FeaturedProducts from "@/features/products/FeaturedProducts";
import PopularProducts from "@/features/products/PopularProducts";

const HomePage = () => {
  return (
    <div className="min-h-screen max-w-5xl mx-auto">
      <Banner />
      <PopularProducts />
      <FeaturedProducts />
      <SubscribeNow />
    </div>
  );
};

export default HomePage;
