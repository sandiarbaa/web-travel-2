import React from "react";

const Hero = () => {
  return (
    <main className="w-full h-[100vh]">
      <div className="bg-blue-800/50 w-[100%] h-[100%] absolute top-0 left-0"></div>
      <video
        src="/images/hero.mp4"
        muted
        autoPlay
        loop
        preload="metadat"
        className="w-[100%] h-[100%] object-cover"
      ></video>
    </main>
  );
};

export default Hero;
