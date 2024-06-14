import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-[100vh] relative">
      <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-blue-800/50"></div>
      <video
        src="/images/hero.mp4"
        muted
        loop
        autoPlay
        className="w-[100%] h-[100%] object-cover"
      ></video>
      {/* Navbar */}
      <nav id="home" className="w-full bg-white absolute top-0">
        <div className="flex w-4/5 mx-auto items-center justify-between py-4 h-[14vh]">
          <div className="relative cursor-pointer w-16 h-16 lg:w-20 lg:h-20">
            <Image
              src="/images/logo.png"
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex items-center space-x-6 lg:space-x-12">
            <Link href="#home" className="nav-link">
              Home
            </Link>
            <Link href="#tour" className="nav-link">
              Tour
            </Link>
            <Link href="#hotel" className="nav-link">
              Hotel
            </Link>
            <Link href="#review" className="nav-link">
              Review
            </Link>
            <Link href="#contact" className="nav-link">
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
      </nav>
    </div>
  );
}
