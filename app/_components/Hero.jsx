import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen h-auto flex flex-col pt-32 justify-center -mt-24 max-sm:-mt-16">
      <img
        src={"/images/bottle-image.png"}
        alt="Moving bottle"
        className="absolute left-1/2 -translate-x-1/2 top-[10%] -translate-y-1/2 rotate-[20deg] max-md:scale-90 max-sm:scale-75 max-[450px]:scale-[65%] max-lg:top-[8%]"
      />
      <div className="h-full w-full my-36">
        <div className="w-full text-center py-10 ">
          <h1 className="uppercase font-outfitExtraBold word-spacing-wider text-[92px] max-md:text-[84px] max-sm:text-[58px] max-[450px]:text-[48px] text-primary400 tracking-wider">
            Black Can
          </h1>
        </div>
        <div className="flex justify-between items-start py-20 mt-40 max-md:flex-col max-md:items-center max-md:gap-10">
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
