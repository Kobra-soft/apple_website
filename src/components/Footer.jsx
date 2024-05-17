import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5 bg-[#1d1d1f]">
      <div className="screen-max-width">
        <div>
          <p className="font-extralight text-[#909091] text-[11.666px]">
            More ways to shop:{" "}
            <span className="underline text-blue">find an Apple Store</span> or{" "}
            <span className="underline text-blue">other retailer</span> near
            you. Or call 0800 048 0408.
          </p>
        </div>

        <div className="bg-[#535355] my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <div>
            <p className="font-extralight text-[#909091] text-[11.666px]">
              Copyright &copy; 2024 Apple Inc. All rights reserved.
            </p>
          </div>
          <div className="hidden md:flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-normal text-[#c7c7c7] text-xs">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
          <div>
            <p className="font-extralight text-[#c7c7c7] text-[11.666px]">
              United Kingdom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
