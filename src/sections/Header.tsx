import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/20 md:border-none sticky top-0 z-10">
      <div className=" container ">
        <div className=" flex justify-between items-center md:border border-white/20 md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur">
          <div>
            <div className=" size-10 border border-white/20 rounded-lg inline-flex justify-center items-center">
              <LogoIcon className="size-8" />
            </div>
          </div>
          <div className=" hidden md:block">
            <nav className="flex gap-8 text-sm capitalize">
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
            <Button>Join waitlist</Button>

            <MenuIcon className=" md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
