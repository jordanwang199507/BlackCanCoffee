"use client";
import Heart from "@/public/icons/Heart";
import ShoppingCart from "@/public/icons/ShoppingCart";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Shop = ({ imageRef }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (container && image) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "-50% 90%",
          end: "50% 65%",
          scrub: true,
          markers: true,
        },
      });
    }
  });

  return (
    <section className="py-10" ref={containerRef}>
      <div className="flex justify-between gap-10 max-[1080px]:justify-end max-[1080px]:gap-0">
        {/* <div className="w-full flex-grow "> */}
        <Image
          src={"/images/bottle-position01.png"}
          width={480}
          height={730}
          alt="background image"
          className="max-[1080px]:absolute max-[1080px]:-left-[250px] max-md:-left-[220px] shrink-0 w-[480px] h-[730px]"
        />
        {/* </div> */}
        <div className="w-2/3 max-md:min-w-min flex flex-col gap-12 min-w-[30rem] max-w-[50rem] relative">
          <div className="max-w-lg flex flex-col gap-6 ml-auto">
            <h4 className="text-3xl font-outfitBold tracking-wide max-w-md max-sm:text-2xl">
              Taste Profile: Bold, Smooth, and Perfectly Balanced
            </h4>
            <p className="font-outfitRegular leading-relaxed text-lg max-sm:text-base text-primary300">
              Experience the perfect harmony of rich, robust coffee with a
              velvety smooth finish. Black Brew Co.™ combines deep roasted notes
              with a hint of natural sweetness, creating a flavor that’s bold
              without being overpowering.
            </p>
          </div>
          <div className="my-20 flex flex-col gap-1 max-w-lg">
            <h5 className="text-xl max-sm:text-lg font-outfitBold tracking-wide">
              Bold Flavor. Bold Moves.
            </h5>
            <div className="flex gap-2 items-baseline max-sm:flex-wrap">
              <h2 className="text-[56px] max-sm:text-5xl font-outfitBlack">
                $35.99{" "}
              </h2>
              <span className="text-[56px] max-sm:text-4xl font-outfitRegular">
                /
              </span>
              <span className="text-primary200 font-outfitRegular text-[16px] max-sm:text-sm">
                pack of 24 cans
              </span>
            </div>
            <div className="flex gap-4 mt-3">
              <button className="btn-secondary">
                <ShoppingCart className="fill-primary400" />
                <p className="uppercase font-outfitBold">Shop</p>
              </button>
              <button className="btn-secondary">
                <Heart height={25} width={25} />
              </button>
            </div>
            <div className="h-40 max-sm:h-28 mt-6 flex gap-4">
              <div className="flex-1 basis-1/3 h-full rounded-lg bg-assetImage02 bg-center bg-cover"></div>
              <div className="flex-1 basis-1/3 h-full rounded-lg bg-assetImage05 bg-center bg-cover"></div>
              <div className="flex-1 basis-1/3 h-full rounded-lg bg-assetImage06 bg-center bg-cover max-sm:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
