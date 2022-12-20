import React from "react";
import img from "../img/desktop/image-interactive.jpg";

const Features = () => {
  return (
    <section>
      <div className="max-auto container relative my-32 flex max-w-6xl flex-col px-6 text-gray-900 md:flex-row md:px-0  ">
        <img src={img} alt="" />
        <div className="top-48 flex flex-col items-center justify-center bg-white pr-0 md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="mt-10 mb-4 max-w-lg text-center font-sans text-4xl uppercase text-gray-900 md:mt-0 md:text-left md:text-5xl">
            The leader in interactivr VR
          </h2>
          <p className="max-w-lg text-center text-lg md:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            quasi reprehenderit ipsam odio unde. Molestiae, nisi, dicta ullam
            officia perferendis architecto accusantium alias quidem corrupti
            aspernatur consequatur, iure eveniet obcaecati?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
