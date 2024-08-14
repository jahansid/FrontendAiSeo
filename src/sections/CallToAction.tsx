import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridlines from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section className=" py-20 md:py-24">
      <div className=" container">
        <div
          className=" relative border border-white/15 py-24 rounded-xl overflow-hidden"
          style={{
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <div
            className=" absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] "
            style={{
              backgroundImage: `url(${gridlines.src})`,
            }}
          ></div>
          <div className=" relative">
            <h2 className=" text-5xl md:text-6xl max-w-sm mx-auto font-medium tracking-tighter text-center">
              AI driven SEO for everyone.
            </h2>
            <p className=" text-lg md:text-xl max-w-xs mx-auto tracking-tight text-white/70 mt-5 px-4 text-center">
              Achieve clear, impactful results without the complexity.
            </p>
          </div>
          <div className=" flex justify-center mt-10">
            <Button>Join waitlist</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
