import React from "react";
import logo from "../img/logo.svg";
import fb from "../img/icon-facebook.svg";
import insta from "../img/icon-instagram.svg";
import twitter from "../img/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container  mx-auto flex max-w-6xl flex-col justify-between gap-6 py-2 md:flex-row">
        <div className="mt-4 flex flex-col items-center justify-center">
          <img src={logo} alt="" className="max-w-xs md:self-start" />
          <div className="mt-4 flex flex-col gap-4 text-white md:flex-row">
            <a href="da">About</a>
            <a href="dada">Career</a>
            <a href="dad">Event</a>
            <a href="dad">Product</a>
            <a href="dad">Support</a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center justify-center gap-6 md:self-start">
            <img src={twitter} alt="" className="max-w-xs" />
            <img src={insta} alt="" className="max-w-xs" />
            <img src={fb} alt="" className="max-w-xs" />
          </div>
          <p className="font-alata text-gray-400">
            &copy; Loopstudio. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
