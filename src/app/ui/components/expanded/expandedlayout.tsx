"use client";
import Header from "./header";
import Journey from "../journey";
import { Builds } from "../builds";
import { Contact } from "../contact";

export default function ExpandedLayout() {
  return (
    <div className="hidden md:flex flex-col items-center">
      <section className="relative w-full flex flex-col items-center max-w-7xl px-6 ">
        <Header />
        <Journey />
        <Builds />
        <Contact />
      </section>
    </div>
  );
}
