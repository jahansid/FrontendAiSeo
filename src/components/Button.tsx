const Button = (props: React.PropsWithChildren) => {
  return (
    <button className=" relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0px_0px_20px_#8c45ff] focus:outline-none focus:ring-2 focus:ring-[#8c45ff] focus:ring-opacity-50 transition-shadow duration-300 ease-in-out">
      <div className=" absolute inset-0 rounded-lg">
        <div className=" absolute rounded-lg border border-white/20 inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)] "></div>
        <div className=" absolute rounded-lg border border-white/40 inset-0 [mask-image:linear-gradient(to_top,black,transparent)] "></div>
        <div className=" absolute rounded-lg inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset]"></div>
      </div>
      <span className=" bg-transparent relative">{props.children}</span>
    </button>
  );
};

export default Button;
