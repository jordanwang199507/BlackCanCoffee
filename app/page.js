"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { About, Discovery, Hero, Shop } from "./_components";

export default function Home() {
  const imageRef = useRef(null);
  return (
    <main className="w-full h-full">
      <div className="boundry relative">
        <img
          ref={imageRef}
          src={"/images/bottle-image.png"}
          alt="Moving bottle"
          className="z-10 absolute left-1/2 -translate-x-1/2  rotate-[20deg] max-md:scale-90 max-sm:scale-75 max-[450px]:scale-[65%] "
        />
        <Hero imageRef={imageRef} />
        <About imageRef={imageRef} />
        <Shop imageRef={imageRef} />
        <Discovery />
      </div>
    </main>
  );
}
