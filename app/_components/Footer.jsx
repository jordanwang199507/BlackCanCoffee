import Arrow from "@/public/icons/Arrow";
import Facebook from "@/public/icons/Facebook";
import Instagram from "@/public/icons/Instagram";
import Linkedin from "@/public/icons/Linkedin";
import TikTok from "@/public/icons/TikTok";
import Youtube from "@/public/icons/Youtube";
import React from "react";

const Footer = () => {
  return (
    <section className="boundry flex items-center ">
      <div className="w-full">
        <div className="flex justify-between gap-12 max-lg:flex-col">
          <div className="flex flex-col max-w-xl max-lg:max-w-full">
            <div className="flex">
              <h2 className="text-[56px] max-sm:text-5xl font-outfitBlack">
                Subscribe
              </h2>
              <button></button>
            </div>
            <hr className="border-primary400 border-1 mt-4" />
            <h5 className="text-xl max-sm:text-base font-outfitBold tracking-wide mt-4">
              About Us
            </h5>
            <p className="font-outfitRegular leading-relaxed mt-2 text-lg max-sm:text-sm text-primary200">
              Crafted for coffee lovers, committed to delivering bold flavors,
              unmatched quality, and a sustainable coffee experience. Every sip
              tells a story of care, craftsmanship, and passion.
            </p>
            <ul className="flex justify-between text-xl max-sm:text-base  font-outfitMedium tracking-wide mt-6 text-primary200">
              <li className="hover:text-primary400 cursor-pointer hover:font-outfitBold inline-block w-20 text-center">
                About
              </li>
              <li className="hover:text-primary400 cursor-pointer hover:font-outfitBold inline-block w-20 text-center">
                Shop
              </li>
              <li className="hover:text-primary400 cursor-pointer hover:font-outfitBold inline-block w-20 text-center">
                Blogs
              </li>
              <li className="hover:text-primary400 cursor-pointer hover:font-outfitBold inline-block w-20 text-center">
                Contact
              </li>
            </ul>
            <ul className="flex gap-6 mt-4">
              <li>
                <Facebook className="fill-primary200 hover:fill-primary400 cursor-pointer" />
              </li>
              <li>
                <Instagram className="fill-primary200 hover:fill-primary400 cursor-pointer" />
              </li>
              <li>
                <TikTok className="fill-primary200 hover:fill-primary400 cursor-pointer" />
              </li>
              <li>
                <Linkedin className="fill-primary200 hover:fill-primary400 cursor-pointer" />
              </li>
              <li>
                <Youtube className="fill-primary200 hover:fill-primary400 cursor-pointer" />
              </li>
            </ul>
          </div>

          <div className="max-w-lg max-xl:max-w-md shrink-0 flex flex-col justify-end mb-6">
            <h5 className="text-xl max-sm:text-base  font-outfitBold tracking-wide">
              Sip Back, Relax, and Let Us Answer All Your Questions About Our
              Products!
            </h5>
            <div className="flex items-center justify-between mt-4 group cursor-pointer transition-all duration-100">
              <p className="font-outfitRegular leading-relaxed mt-2 text-lg max-sm:text-sm text-primary200 group-hover:text-primary400  ">
                How are your coffee beans ethically sourced?
              </p>
              <Arrow className="rotate-45 group-hover:rotate-0 transition-all duration-75 fill-primary200 group-hover:fill-primary400" />
            </div>
            <hr className="border-primary400 border-1 mt-4" />
            <div className="flex items-center justify-between mt-4 group cursor-pointer transition-all duration-100">
              <p className="font-outfitRegular leading-relaxed mt-2 text-lg max-sm:text-sm  text-primary200 group-hover:text-primary400  ">
                Do you have discounts for first-time customers?
              </p>
              <Arrow className="rotate-45 group-hover:rotate-0 transition-all duration-75 fill-primary200 group-hover:fill-primary400" />
            </div>
            <hr className="border-primary400 border-1 mt-4" />
            <div className="flex items-center justify-between mt-4 group cursor-pointer transition-all duration-100">
              <p className="font-outfitRegular leading-relaxed mt-2 text-lg max-sm:text-sm  text-primary200 group-hover:text-primary400  ">
                Where do you ship, and how long does it take?
              </p>
              <Arrow className="rotate-45 group-hover:rotate-0 transition-all duration-75 fill-primary200 group-hover:fill-primary400" />
            </div>
          </div>
        </div>

        <hr className="mt-4 border-primary400 border-1" />
        <div className="w-full flex items-center flex-col text-sm max-sm:text-xs mb-2">
          <ul className="flex max-w-lg justify-between mt-2 w-full text-primary200 font-outfitRegular">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
          <div className="font-outfitRegular leading-relaxed text-primary100 text-center mt-1">
            ©2025 Copyright By - Black Brew Co.™ (Fake brand) Designed and
            Developed by Jordan Wang. Inspired by @uiuxzid on Instagram.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
