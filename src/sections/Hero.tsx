import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section
      className=" h-[492px] md:h-[700px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] "
      //makes star png spread all over background
      style={{ backgroundImage: `url(${starsBg.src})` }}
    >
      <div className=" absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      <div className=" absolute size-64 md:size-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] "></div>
      {/* making ring around the circle */}
      {/* ring1 */}
      <div className="absolute size-[344px] md:size-[580px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" absolute size-2 bg-white rounded-full left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className=" absolute size-2 bg-white rounded-full left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className=" absolute size-5 border border-white rounded-full left-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center">
          <div className=" absolute size-2 bg-white rounded-full"></div>
        </div>
      </div>
      {/* ring2 */}
      <div className=" absolute size-[444px] md:size-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      {/* ring3 */}
      <div className=" absolute size-[544px] md:size-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" absolute size-2 bg-white rounded-full left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className=" absolute size-2 bg-white rounded-full left-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container relative mt-16">
        <h1 className=" text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          AI Seo
        </h1>
        <p className=" text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center">
          Elevate your SEO strategy with AI to enhance rankings, attract
          targeted traffic, and optimize your website effortlessly.
        </p>
        <div className=" flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </section>
  );
};
