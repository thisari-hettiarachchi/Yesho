import HeroSection from "@/components/sections/HomeSection/HeroSection";
import Image from "next/image";
import { bghero } from "@/assets";
import Navbar from "@/components/shared/NavBar";
import HomePage from "./Home/page";

export default function Home() {
  return (
    <div className="z-10">
      <div className="absolute inset-0 z-40 h-screen overflow-hidden">
        <div
          className="w-full h-full relative"
          style={{
            borderBottomLeftRadius: "5%",
            borderBottomRightRadius: "5%",
            overflow: "hidden",
          }}
        >
          <Image
            src={bghero}
            alt="hero background"
            fill
            className="object-cover opacity-90 dark:opacity-40 z-50"
          />
          <div className="absolute inset-0 max-h-screen bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-60"></div>
        </div>
      </div>
      <HomePage />
    </div>
  );
}
