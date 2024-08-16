"use client";
import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import productImage from "@/assets/product-image.png";
import { useRef } from "react";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (tab: (typeof tabs)[number]) => {
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
  const handleTabHover = ()=>{
    if(dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();

  }
  return (
    <div onMouseEnter={handleTabHover} className=" border border-white/15 rounded-xl flex gap-2.5 p-2.5 items-center lg:flex-1">
      <div className=" size-12 inline-flex justify-center items-center border border-white/15 rounded-lg">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={tab.icon}
          className=" size-5"
          autoplay
        />
      </div>
      <div className="font-medium">{tab.title}</div>
      {tab.isNew && (
        <div className=" text-xs rounded-full px-2 py-0.5 text-black font-semibold bg-[#8c44ff]">
          new
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  return (
    <section className=" py-20 md:py-24">
      <div className=" container">
        <h2 className=" text-5xl md:text-6xl tracking-tighter font-medium text-center">
          Elevate your SEO efforts.
        </h2>
        <p className=" text-lg md:text-xl max-w-2xl mx-auto tracking-tight font-lg text-white/70 text-center mt-5">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="  mt-10 flex flex-col lg:flex-row gap-3 ">
          {tabs.map((tab) => (
            <FeatureTab {...tab} key={tab.title} />
          ))}
        </div>
        <div className=" border border-white/20 mt-3 p-2.5 rounded-xl">
          <div
            className=" aspect-video bg-cover border border-white/15 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
