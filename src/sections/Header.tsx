import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/20 md:border-none">
      <div className=" container ">
        <div className=" flex justify-between items-center md:border border-white/20 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div>
            <div className=" size-10 border border-white/20 rounded-lg inline-flex justify-center items-center">
              <LogoIcon className="size-8" />
            </div>
          </div>
          <div className=" hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a
                className="text-white/70 hover:text-white transition ease-in duration-300"
                href="#"
              >
                Features
              </a>
              <a
                className="text-white/70 hover:text-white transition ease-in duration-300"
                href="#"
              >
                Developers
              </a>
              <a
                className="text-white/70 hover:text-white transition ease-in duration-300"
                href="#"
              >
                Pricing
              </a>
              <a
                className="text-white/70 hover:text-white transition ease-in duration-300"
                href="#"
              >
                changelog
              </a>
            </nav>
          </div>
          <div className=" flex gap-4 items-center">
            <button className=" relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0px_0px_20px_#8c45ff] focus:outline-none focus:ring-2 focus:ring-[#8c45ff] focus:ring-opacity-50 transition-shadow duration-300 ease-in-out">
              <div className=" absolute inset-0 rounded-lg">
                <div className=" absolute rounded-lg border border-white/20 inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)] "></div>
                <div className=" absolute rounded-lg border border-white/40 inset-0 [mask-image:linear-gradient(to_top,black,transparent)] "></div>
                <div className=" absolute rounded-lg inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset]"></div>
              </div>
              <span className=" bg-transparent relative">Join waitlist</span>
            </button>
            <MenuIcon className=" md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
