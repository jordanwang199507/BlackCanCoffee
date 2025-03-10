"use client";
import React from "react";
import Image from "next/image";
import ShoppingCart from "@/public/icons/ShoppingCart";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Discovery = ({ imageRef }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (container && image) {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: "(min-width: 1280px)",
          isTablet: "(min-width: 1180px) and (max-width: 1279px)",
          isMobile: "(min-width: 1081px) and (max-width: 1179px)",
          isSmallMobile: "(min-width: 1025px) and (max-width: 1080px)",
          isSmallSmall: "(min-width: 768px) and (max-width: 1024px)",
          isPhone: "(min-width: 381px) and (max-width: 767px)",
          isExtraSmall: "(max-width: 380px)",
        },
        (context) => {
          let {
            isDesktop,
            isTablet,
            isMobile,
            isSmallMobile,
            isSmallSmall,
            isPhone,
          } = context.conditions;
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "-10% 90%",
              end: "50% 65%",
              markers: true,
              scrub: true,
              anticipatePin: 1,
              toggleActions: "play none reverse none",
            },
          });
          tl.to(image, {
            y: isDesktop
              ? "316vh"
              : isTablet
              ? "424vh"
              : isMobile
              ? "500vh"
              : isSmallMobile
              ? "500vh"
              : isSmallSmall
              ? "510vh"
              : isPhone
              ? "547vh"
              : "582vh",
            x: isDesktop
              ? "32vmin"
              : isTablet
              ? "25vw"
              : isMobile
              ? "23vw"
              : isSmallMobile
              ? "21vw"
              : isSmallSmall
              ? "21vw"
              : "5vw",
            rotate: 15,
            duration: 2,
            ease: "power2.inOut",
            zIndex: 2,
          });
        }
      );
      //   let tl = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: container,
      //       start: "-10% 90%",
      //       end: "50% 65%",
      //       //   markers: true,
      //       scrub: true,
      //       anticipatePin: 1,
      //       toggleActions: "play none reverse none",
      //     },
      //   });
      //   tl.to(image, {
      //     // y: "295vh",
      //     // x: "30vmin",
      //     // rotate: 0,
      //     duration: 2,
      //     ease: "power2.inOut",
      //   });
    }
  }, []);

  return (
    <section className="py-10" ref={containerRef}>
      <div className="">
        <hr className="w-11/12 m-auto border-primary400 border-1" />
        <div className="flex gap-8 items-center justify-center my-12 max-lg:flex-wrap max-lg:justify-start max-lg:w-11/12 max-lg:mx-auto">
          <h5 className="text-xl font-outfitBold tracking-wide max-w-xs max-lg:max-w-60">
            Crafted for the Coffee Lover in You
          </h5>
          <h5 className="text-xl font-outfitBold tracking-wide max-w-xs max-lg:max-w-60">
            Taste the Excellence in Every Drop
          </h5>
          <p className="max-w-md max-lg:max-w-lg font-outfitRegular leading-relaxed text-lg max-sm:text-base text-primary300">
            Artisan Perfection: Every can is crafted with premium, ethically
            sourced beans for an unmatched coffee experience.
          </p>
        </div>
        <div className="w-full py-6 px-24 max-md:pb-20 max-sm:pb-32 max-md:px-12 bg-primary400 rounded-xl relative overflow-hidden mt-32 mb-24">
          <div className="flex flex-col my-10 max-w-md z-10 relative">
            <p className="text-white100 text-sm font-outfitRegular">
              (Winter Promotion)
            </p>
            <h3 className="text-4xl max-sm:text-3xl text-white font-outfitSemiBold tracking-wider mt-2 leading-10">
              <span className="text-secondary font-outfitBold">
                3 out of 4 people{" "}
              </span>{" "}
              prefer it over leading brands.
            </h3>
            <div className="w-full mt-8">
              <button className="btn-tertiary group">
                <ShoppingCart className="fill-primary400 group-hover:fill-secondary transition-all duration-100" />
                <p className="uppercase font-outfitBold">Shop</p>
              </button>
            </div>
          </div>
          <Image
            src={"/images/bottle-position02.png"}
            width={275}
            height={350}
            alt="background image 02"
            className="absolute right-32 top-10 z-0 max-lg:top-40 max-md:top-52 max-sm:top-72 max-lg:right-24 max-md:right-20 max-sm:right-10 transition-all duration-75"
          />
        </div>
      </div>
    </section>
  );
};

export default Discovery;
