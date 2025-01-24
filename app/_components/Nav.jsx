import React from "react";
import Image from "next/image";
import Heart from "@/public/icons/Heart";
import ShoppingCart from "@/public/icons/ShoppingCart";

const Nav = () => {
  return (
    <div className="boundry h-24 max-sm:h-16 flex items-center fixed top-2 w-full left-1/2 -translate-x-1/2">
      <nav className="h-auto flex justify-between w-full ">
        <Image
          src={"/icons/logo.svg"}
          id="logo"
          width={84}
          height={44}
          alt="company logo"
        />
        <ul className="px-4 py-1 bg-[#ffffff33] rounded-lg flex text-lg gap-6 items-center max-lg:hidden">
          <li className="cursor-pointer font-outfitExtraLight px-3.5 py-1.5 rounded-md active hover:bg-primary200 hover:text-dark hover:font-outfitLight">
            Home
          </li>
          <li className="cursor-pointer font-outfitExtraLight px-4 py-2 rounded-md hover:bg-primary200 hover:text-dark hover:font-outfitLight">
            About
          </li>
          <li className="cursor-pointer font-outfitExtraLight px-4 py-2 rounded-md hover:bg-primary200 hover:text-dark hover:font-outfitLight">
            Shop
          </li>
          <li className="cursor-pointer font-outfitExtraLight px-4 py-2 rounded-md hover:bg-primary200 hover:text-dark hover:font-outfitLight">
            Discovery
          </li>
          <li className="cursor-pointer font-outfitExtraLight px-4 py-2 rounded-md hover:bg-primary200 hover:text-dark hover:font-outfitLight">
            Blogs
          </li>
        </ul>
        <div className="flex gap-4 max-[450px]:gap-2">
          <div className="btn">
            <Heart height={25} width={25} />
          </div>
          <div className="btn">
            <ShoppingCart className="fill-primary400" />
            <p className="uppercase font-outfitBold">Cart</p>
          </div>
          <div className="hidden max-lg:flex items-start justify-center bg-darkSecondary rounded-lg gap-1.5 hover:bg-primary200 p-3 flex-col max-[450px]:gap-1">
            <span className="w-7 h-1 bg-primary400 rounded-full max-[450px]:w-5 max-[450px]:h-0.5"></span>
            <span className="w-4 h-1 bg-primary400 rounded-full max-[450px]:h-0.5"></span>
            <span className="w-7 h-1 bg-primary400 rounded-full max-[450px]:w-5 max-[450px]:h-0.5"></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
