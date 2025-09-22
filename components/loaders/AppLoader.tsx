"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AppLoader = () => {
  return (
    <DotLottieReact
      src="/assets/animations/Trail loading.lottie"
      loop
      autoplay
      className="h-20 my-12"
    />
  );
};

export default AppLoader;
