const SubscribeNow = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h3 className="text-2xl font-bold pb-2">Subscribe now & get 10% off</h3>
      <p className="text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
      <div className="flex justify-center py-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 px-2 py-2 w-80 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button className="bg-orange-500 text-white px-8 py-2 hover:bg-orange-400 cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeNow;
