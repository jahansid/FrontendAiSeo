import Logo from "@/assets/logo.svg";
import Xsocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";


export const Footer = () => {
  return <footer className=" py-5 border-t border-white/15">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-8">
      <div className=" flex gap-2 items-center flex-1">
        <Logo className="size-6" />
        <div className=" font-medium">AI SEO</div>
      </div>

    
        <nav className=" flex flex-col lg:flex-row lg:justify-center lg:flex-1 gap-5 lg:gap-7">
          <a className=" text-xs md:text-sm text-white/70 hover:text-white transition ease-in-out duration-200" href="#">Features</a>
          <a className=" text-xs md:text-sm text-white/70 hover:text-white transition ease-in-out duration-200" href="#">Developers</a>
          <a className=" text-xs md:text-sm text-white/70 hover:text-white transition ease-in-out duration-200" href="#">Company</a>
          <a className=" text-xs md:text-sm text-white/70 hover:text-white transition ease-in-out duration-200" href="#">Blog</a>
          <a className=" text-xs md:text-sm text-white/70 hover:text-white transition ease-in-out duration-200" href="#">Changelog</a>


        </nav>
    

      <div className=" flex gap-5 lg:justify-end lg:flex-1">
        <Xsocial className=" text-white/40 hover:text-white transition ease-in-out duration-200" />
        <InstaSocial className=" text-white/40 hover:text-white transition ease-in-out duration-200" />
        <YTSocial className=" text-white/40 hover:text-white transition ease-in-out duration-200" />
      </div>
      </div>
    </div>
  </footer>;
};
