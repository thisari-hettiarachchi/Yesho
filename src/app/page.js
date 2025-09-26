import HeroSection from "@/components/sections/HomeSection/HeroSection";
import Image from "next/image";
import { bghero } from "@/assets";
import Navbar from "@/components/shared/NavBar";
import HomePage from "./Home/page";

export default function Home() {
  return (
    <div className="relative z-10">
      <Navbar />
      <div className="absolute inset-0 -z-10 h-screen ">
        <Image
          src={bghero}
          alt="hero background"
          fill
          className="object-cover opacity-40 rounded-b-4xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent rounded-2xl"></div>
      </div>
      <HomePage />
    </div>
  );
}
