import React from "react";
import Image from "next/image";
import ShoppingCart from "@/public/icons/ShoppingCart";

const Discovery = () => {
  return (
    <section className="py-10">
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
