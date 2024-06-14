import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <nav
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#200f31]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <Link href="#home" className="nav-link-mobile">
          Home
        </Link>
        <Link href="#tour" className="nav-link-mobile">
          Tour
        </Link>
        <Link href="#hotel" className="nav-link-mobile">
          Hotel
        </Link>
        <Link href="#review" className="nav-link-mobile">
          Review
        </Link>
        <Link href="#contact" className="nav-link-mobile">
          Contact
        </Link>
        <Link
          href="#hotel"
          className="relative inline-flex items-center justify-center px-6 py-2 lg:px-10 lg:py-3 overflow-hidden font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="relative">Book Now</span>
        </Link>
      </div>
      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] z-[1000000] right-[2rem] w-[2rem] h-[2rem] text-white"
      >
        <XMarkIcon />
      </div>
    </nav>
  );
};

export default MobileNav;
