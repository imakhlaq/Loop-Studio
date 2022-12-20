import logo from "../img/logo.svg";

const Hero = () => {
  return (
    <section>
      <div className="container max-w-6xl mx-auto px-6 py-12 " id="hero">
        <nav className="flex items-center justify-between font-bold text-white">
          <img src={logo} alt="" />
          <div className="hidden md:flex md:space-x-8 font-alata h-10">
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
        </nav>
        {/* hambuerger menu here */}

        <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:test-6xl">
          impresive experiences that deliver
        </div>
      </div>
    </section>
  );
};

export default Hero;
