import React from "react";

const About = () => {
  return (
    <section className="min-h-fit">
      <div className="flex justify-between max-[1180px]:flex-col max-[1180px]:gap-24 max-sm:gap-96 max-sm:items-center">
        <div className="max-w-[20rem] max-[1180px]:max-w-sm max-md:max-w-[20rem] flex flex-col gap-12 shrink-0">
          <div className="h-80 max-md:h-64 max-sm:h-44 flex gap-6">
            <div className="w-1/2 h-full rounded-lg bg-assetImage01 bg-cover bg-center" />
            <div className=" w-1/2 h-full rounded-lg bg-assetImage02 bg-cover bg-center" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl max-sm:text-3xl font-outfitBlack tracking-wider">
              Coffee That Keeps Up With You
            </h3>
            <p className="text-lg max-sm:text-base font-outfitRegular leading-relaxed text-pretty text-primary300">
              Every sip packs the intensity of perfectly roasted beans,
              delivering an unapologetically rich coffee experience.
            </p>
          </div>
        </div>
        <div className="max-w-[26rem] max-md:max-w-[20rem] shrink-0 flex flex-col gap-4">
          <p className="text-lg max-sm:text-base font-outfitRegular leading-relaxed text-primary300 text-pretty">
            Our iconic black cans are more than just packaging—they’re a
            statement of sophistication and simplicity.
          </p>
          <div className="flex flex-col gap-6 mt-2">
            <div className="h-36 flex gap-6">
              <div className="w-1/2 h-full bg-assetImage03 bg-cover bg-center rounded-lg" />
              <div className="w-1/2 h-full bg-assetImage04 bg-cover bg-center rounded-lg" />
            </div>
            <div className="h-36">
              <div className="w-full h-full bg-assetImage05 bg-cover bg-top rounded-lg" />
            </div>
          </div>
          <p className="text-lg max-sm:text-base font-outfitRegular leading-relaxed text-pretty text-primary300 mt-4">
            At Black Brew Co.™, we take pride in sourcing the finest beans from
            sustainable farms across the globe. Each can you crack open
            represents our commitment to quality, flavor, and the planet.
          </p>
          <div className="w-full mt-4">
            <button className="px-5 py-3 bg-primary400 text-dark rounded-lg font-outfitRegular text-lg max-md:text-base max-md:px-4 hover:bg-primary200">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-64 mb-72 max-lg:flex-col max-lg:gap-12 max-sm:justify-center">
        <h4 className="text-3xl font-outfitBlack tracking-wider max-w-sm max-sm:text-2xl max-sm:max-w-xs">
          Black Coffee Co.™ - Crafted for the Bold
        </h4>
        <p className="max-w-xl font-outfitRegular leading-relaxed text-lg max-lg:inline-block max-lg:ml-auto max-md:max-w-md max-md:text-pretty max-sm:max-w-sm max-sm:text-base">
          we deliver bold, smooth coffee in every sleek black can. Designed for
          modern go-getters, our brew fuels your day with premium flavor and
          energy—simple, powerful, and unforgettable.
        </p>
      </div>
    </section>
  );
};

export default About;
