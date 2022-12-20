import React from "react";
import img from "../img/desktop/image-interactive.jpg";
import gimgdesk1 from "../img/desktop/image-deep-earth.jpg";
import gimgmob1 from "../img/mobile/image-deep-earth.jpg";

const Features = () => {
  return (
    <>
      <section>
        <div className="container relative mx-auto my-32 flex max-w-6xl flex-col px-6 text-gray-900 md:flex-row md:px-0  ">
          <img src={img} alt="" />
          <div className="top-48 flex flex-col items-center justify-center bg-white pr-0 md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="mt-10 mb-4 max-w-lg text-center font-sans text-4xl uppercase text-gray-900 md:mt-0 md:text-left md:text-5xl">
              The leader in interactivr VR
            </h2>
            <p className="max-w-lg text-center text-lg md:text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae quasi reprehenderit ipsam odio unde. Molestiae, nisi,
              dicta ullam officia perferendis architecto accusantium alias
              quidem corrupti aspernatur consequatur, iure eveniet obcaecati?
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto my-32 max-w-6xl px-6 text-gray-900 md:px-0">
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between ">
            <h2 className="text-4xl font-medium uppercase">Our creation</h2>
            <button className="hidden border-2 border-black py-2 px-10 font-alata text-xl uppercase tracking-widest hover:bg-black hover:text-white md:block">
              See all
            </button>
          </div>
          <div className="mt-6 grid space-y-8 p-2 text-2xl md:grid-cols-3 md:space-x-8 md:space-y-0">
            {/* fist iteam */}
            <div className="group relative overflow-hidden ">
              <img src={gimgmob1} alt="" className="w-full md:hidden" />
              <img src={gimgdesk1} alt="" className="hidden w-full md:block" />
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-white group-hover:to-gray-50 group-hover:opacity-70 "></div>
              <h5 className=" absolute bottom-4 w-52 px-6 text-4xl text-gray-400 duration-300 group-hover:scale-110 group-hover:text-black md:bottom-8 md:px-10">
                Nature
              </h5>
            </div>

            {/* seond iteam */}
            <div className="group relative overflow-hidden ">
              <img src={gimgmob1} alt="" className="w-full md:hidden" />
              <img src={gimgdesk1} alt="" className="hidden w-full md:block" />
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-white group-hover:to-gray-50 group-hover:opacity-70 "></div>
              <h5 className=" absolute bottom-4 w-52 px-6 text-4xl text-gray-400 duration-300 group-hover:scale-110 group-hover:text-black md:bottom-8 md:px-10">
                Nature
              </h5>
            </div>
            {/* seond iteam */}
            <div className="group relative overflow-hidden ">
              <img src={gimgmob1} alt="" className="w-full md:hidden" />
              <img src={gimgdesk1} alt="" className="hidden w-full md:block" />
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-white group-hover:to-gray-50 group-hover:opacity-70 "></div>
              <h5 className=" absolute bottom-4 w-52 px-6 text-4xl text-gray-400 duration-300 group-hover:scale-110 group-hover:text-black md:bottom-8 md:px-10">
                Nature
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
