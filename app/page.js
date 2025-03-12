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
          className="z-10 absolute -translate-x-1/2 left-1/2 rotate-[20deg]"
        />
        <Hero imageRef={imageRef} />
        <About imageRef={imageRef} />
        <Shop imageRef={imageRef} />
        <Discovery imageRef={imageRef} />
      </div>
    </main>
  );
}
