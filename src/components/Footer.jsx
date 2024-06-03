import React from "react";
import { footerLinks } from "../constants";
import { navSubLinks_Search } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-4 bg-[#1d1d1f]">
      <div className="screen-max-width">
        <div>
          <p className="font-extralight text-[#909091] text-[11.666px]">
            More ways to shop:{" "}
            <span className="underline text-blue cursor-pointer">
              find an Apple Store
            </span>{" "}
            or{" "}
            <span className="underline text-blue cursor-pointer">
              other retailer
            </span>{" "}
            near you. Or call 0800 048 0408.
          </p>
        </div>

        <div className="bg-[#535355] mt-5 mb-5 h-[1px] w-full hidden md:flex" />

        <div className="flex flex-wrap md:flex-nowrap md:items-center justify-between">
          <div>
            <p
              className="font-extralight text-[#c7c7c7] text-[11.666px] mb-4 mt-4 sm:mt-0
            flex md:hidden "
            >
              United Kingdom
            </p>
            <p className="font-extralight text-[#909091] text-[11.666px]">
              Copyright &copy; 2024 Apple Inc. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap">
            {footerLinks.map((link, i) => (
              <p
                key={link}
                className="font-normal text-[#c7c7c7] text-[11.666px]
              leading-4 mt-1.5 sm:mt-0"
              >
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2 font-thin text-[#868686]"> | </span>
                )}
              </p>
            ))}
          </div>
          {/*           <div className="flex flex-wrap cursor-pointer">
            {navSubLinks_Search.map((link, i) => (
              <p
                key={link}
                className="font-normal text-[#c7c7c7] text-[11.666px]
              leading-4 mt-1.5 sm:mt-0 hover:underline"
              >
                {link}{" "}
                {i !== navSubLinks_Search.length - 1 && (
                  <span className="mx-2 font-thin text-[#868686]"> | </span>
                )}
              </p>
            ))}
          </div> */}
          <div>
            <p
              className="font-extralight text-[#c7c7c7] text-[11.666px] mt-2 sm:mt-0
            hidden md:flex"
            >
              United Kingdom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
