import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
    </div>
  );
}
