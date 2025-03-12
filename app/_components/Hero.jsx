"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Hero = ({ imageRef }) => {
  const containerRef = useRef(null);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);

      const handleResize = () => {
        setWindowHeight(window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  useEffect(() => {
    if (windowHeight === 0) return;
    setTimeout(() => {}, 100);
    const container = containerRef.current;
    const image = imageRef.current;

    if (container && image) {
      const mm = gsap.matchMedia();

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
              x:
                image.getBoundingClientRect().left +
                image.offsetWidth / 1 -
                window.innerWidth / 2,
              y: startY,
              scale: isDesktop ? 1 : isTablet ? 0.9 : 0.65,
              zIndex: 1,
            },
            {
              y: endY,
              x: isMobile ? "-35vmin" : "", // Mobile adjusts X, others remain
              rotate: 0,
              scale: isDesktop ? 1.5 : isTablet ? 1.2 : 1.2,
              ease: "power2.out",
              duration: 3,
              zIndex: 0,
            }
          );
          const facts = gsap.utils.toArray(".fact");
          gsap.to(facts, {
            y: 0,
            opacity: 1,
            duraation: 1,
            ease: "power2.inOut",
            stagger: {
              each: 0.2,
            },
            scrollTrigger: {
              trigger: "#description",
              toggleActions: "restart reverse restart reverse",
              start: "top 85%",
            },
          });

          gsap.to("#description", {
            y: 0,
            opacity: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: "#description",
              toggleActions: "restart reverse restart reverse",
              start: "top 85%",
            },
          });
          return () => {
            tl.kill();
          };
        }
      );
    }
  }, [windowHeight]);

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
            <p id="description" className="opacity-0 translate-y-20">
              Life’s too short for average coffee. Discover the perfect balance
              of boldness and smoothness.
            </p>
          </div>
          <ul className="flex flex-col gap-12 max-w-xs w-full max-lg:max-w-64 shrink-0 transition-all duration-75">
            <li className="fact  opacity-0 translate-y-20">
              <h3 className="text-4xl font-outfitBlack tracking-wider max-[450px]:text-3xl">
                100K
              </h3>
              <p className="text-lg font-outfitRegular text-primary300 max-[450px]:text-base">
                Daily Energized Customers{" "}
              </p>
            </li>
            <li className="fact  opacity-0 translate-y-20">
              <h3 className="text-4xl font-outfitBlack tracking-wider max-[450px]:text-3xl">
                85%
              </h3>
              <p className="text-lg font-outfitRegular text-primary300 max-[450px]:text-base">
                Customers’ “Go-To” Coffee{" "}
              </p>
            </li>
            <li className="fact  opacity-0 translate-y-20">
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
