"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Hero = ({ imageRef }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (container && image) {
      const mm = gsap.matchMedia();

      //finish laptop gsap first
      //after check for larger screen
      //after check each media size
      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isTablet: "(min-width: 768px) and (max-width: 1023px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          let { isDesktop, isTablet, isMobile } = context.conditions;
          const startY =
            window.innerHeight * (isDesktop ? 0.15 : isTablet ? 0.12 : 0);
          const endY =
            window.innerHeight * (isDesktop ? 0.85 : isTablet ? 0.8 : 0.65);
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "2% 1%",
              end: isDesktop
                ? "bottom 80%"
                : isTablet
                ? "bottom 90%"
                : "100% 90%",
              scrub: true,
              //   markers: true,
              pin: true,
              anticipatePin: 1,
              toggleActions: "play none reverse none",
            },
          });

          tl.fromTo(
            image,
            {
              y: startY,
              scale: isDesktop ? 1 : isTablet ? 0.9 : 0.65,
              zIndex: 1,
            },
            {
              y: endY,
              x: isMobile ? "-35vmin" : "",
              rotate: 0,
              scale: isDesktop ? 1.5 : isTablet ? 1.2 : 1.2,
              ease: "power2.out",
              duration: 3,
              zIndex: 0,
            }
          ).to("#title", { scale: 1.2, duration: 3 }, 0);
          return () => {
            tl.kill();
          };
        }
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-auto h-screen flex flex-col pt-32 justify-center"
    >
      <div className="h-full w-full my-36 flex flex-col justify-center">
        <div className="w-full text-center py-10 z-0 ">
          <h1
            id="title"
            className="inline-block uppercase font-outfitExtraBold word-spacing-wider text-[84px] max-md:text-[72px] max-sm:text-[58px] max-[450px]:text-[48px] max-[450px]:my-20 text-primary400 tracking-wider"
          >
            Black Can
          </h1>
        </div>
        <div className="flex justify-between items-start py-20  max-md:mt-20 max-md:flex-col max-md:items-center max-md:gap-10 z-10">
          <div className="max-w-[340px] text-lg font-outfitRegular text-pretty max-md:max-w-md max-[450px]:max-w-xs max-md:text-pretty max-md:text-center max-[450px]:text-base">
            <p>
              Life’s too short for average coffee. Discover the perfect balance
              of boldness and smoothness.
            </p>
          </div>
          <ul className="flex flex-col gap-12 max-w-xs w-full max-lg:max-w-64 shrink-0 transition-all duration-75">
            <li>
              <h3 className="text-4xl font-outfitBlack tracking-wider max-[450px]:text-3xl">
                100K
              </h3>
              <p className="text-lg font-outfitRegular text-primary300 max-[450px]:text-base">
                Daily Energized Customers{" "}
              </p>
            </li>
            <li>
              <h3 className="text-4xl font-outfitBlack tracking-wider max-[450px]:text-3xl">
                85%
              </h3>
              <p className="text-lg font-outfitRegular text-primary300 max-[450px]:text-base">
                Customers’ “Go-To” Coffee{" "}
              </p>
            </li>
            <li>
              <h3 className="text-4xl font-outfitBlack tracking-wider max-[450px]:text-3xl">
                100%
              </h3>
              <p className="text-lg font-outfitRegular text-primary300 max-[450px]:text-base">
                Eco-friendly Packaging{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
