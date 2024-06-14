import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed h-[14vh] bg-white w-[100%] z-10">
      <div className="w-[80%] mx-auto flex justify-between items-center">
        <div className="w-16 h-16 lg:w-20 lg:h-20 relative cursor-pointer">
          <Image
            src="/images/logo.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex space-x-12 items-center">
          <Link href="#home" className="nav-link">
            Home
          </Link>
          <Link href="#home" className="nav-link">
            Tour
          </Link>
          <Link href="#home" className="nav-link">
            Hotel
          </Link>
          <Link href="#home" className="nav-link">
            Review
          </Link>
          <Link href="#home" className="nav-link">
            Contact
          </Link>
          <Link
            href="#hotel"
            className="relative hidden lg:inline-flex items-center justify-center px-6 py-2 lg:px-10 lg:py-3 overflow-hidden font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative">Book Now</span>
          </Link>
          {/* <Bars3Icon
            onClick={openNav}
            className="w-[2rem] lg:hidden h-[2rem] text-blue-800 font-bold"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
