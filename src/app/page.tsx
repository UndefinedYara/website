"use client";
import Particles from "./ui/components/particles";
import MobileLayout from "./ui/components/compact/compactlayout";
import ExpandedLayout from "./ui/components/expanded/expandedlayout";
import { Blur } from "./ui/components/blur";
import LoadingScreen from "./ui/components/loading";
export default function Home() {
  return (
    <div className="relative  font-sans flex flex-col items-center justify-center gap-16 ">
      <Particles className="absolute inset-0 z-[2] opacity-50" quantity={50} />
      <main className="flex flex-col  row-start-2  z-[3] md:w-full  ">
        {/* desktop */}
        <Blur className="hidden lg:block" top={250} left={500} />
        <Blur className="hidden lg:block" top={1000} left={-100} />
        <Blur className="hidden lg:block" top={2000} left={900} />
        {/* mobile */}
        <Blur className="block lg:hidden" top={300} left={-150} />
        <Blur
          className="block lg:hidden overflow-x-hidden"
          top={300}
          left={120}
        />
        <Blur className="block lg:hidden" top={1500} left={100} />
        <LoadingScreen />
        <ExpandedLayout />
        <MobileLayout />
      </main>
    </div>
  );
}
