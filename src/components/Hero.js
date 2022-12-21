import logo from "../img/logo.svg";
import { useState } from "react";

const Hero = () => {
  const [navState, setNavState] = useState(false);
  const onNavClick = (event) => {
    setNavState((prev) => !prev);
  };
  return (
    <section>
      <div className="container mx-auto max-w-6xl px-6 py-12 " id="hero">
        <nav className="flex items-center justify-between font-bold text-white">
          <img src={logo} alt="" />
          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            <div className="group">
              <a href="ada" className="text-lg">
                About
              </a>
              <div className="mx-2 group-hover:border group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="ada" className="text-lg">
                Product
              </a>
              <div className="mx-2 group-hover:border group-hover:border-blue-50 "></div>
            </div>
            <div className="group">
              <a href="ada" className="text-lg">
                Support
              </a>
              <div className="mx-2 group-hover:border group-hover:border-blue-50 "></div>
            </div>
            <div className="group">
              <a href="ada" className="text-lg">
                Info
              </a>
              <div className="mx-2 group-hover:border group-hover:border-blue-50 "></div>
            </div>
          </div>
          {/* add hambueger here */}
          <div
            onClick={onNavClick}
            className={`hamburger group relative z-40 flex h-12 w-12 cursor-pointer flex-col items-center transition-all duration-300 hover:-translate-y-1 md:hidden
            ${!navState && "open"}`}
          >
            <div className="hamburger-top absolute  top-2 w-10 border border-gray-200 group-hover:shadow-lg"></div>
            <div className="hamburger-middle absolute top-4 w-10 border border-gray-200 group-hover:shadow-lg"></div>
            <div className="hamburger-bottom absolute top-6 w-10 border border-gray-200 group-hover:shadow-lg"></div>
          </div>
        </nav>
        {/* hambuerger menu here */}
        <div id="menu" className={`${navState && "hidden"} md:hidden`}>
          <div className=" fixed top-0 bottom-0 left-0 -mt-[15rem] flex w-screen flex-col items-center justify-center gap-4 overflow-hidden bg-black text-2xl text-white">
            <a href="dad" className="hover:text-pink-500">
              About
            </a>
            <a href="dad" className="hover:text-pink-500">
              Careers
            </a>
            <a href="dad" className="hover:text-pink-500">
              Events
            </a>
            <a href="dad" className="hover:text-pink-500">
              Products
            </a>
            <a href="dad" className="hover:text-pink-500">
              Support
            </a>
          </div>
        </div>

        <div className="md:test-6xl mt-32 mb-32 max-w-lg border-2 p-4 font-sans text-4xl uppercase text-white md:m-32 md:mx-0 md:p-10">
          impresive experiences that deliver
        </div>
      </div>
    </section>
  );
};

export default Hero;
