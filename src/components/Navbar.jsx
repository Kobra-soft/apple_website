import React, { useState, useRef, useEffect } from "react";
import { bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import "./Navbar.css";
import NavbarSubMenu from "./NavbarSubMenu";
import Navbar2 from "./Navbar2";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const firstNavItemRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    if (isHovered) {
      const firstNavItem = firstNavItemRef.current;
      const firstNavItemRect = firstNavItem.getBoundingClientRect();
      const submenu = document.querySelector(".navbar-submenu");
      submenu.style.left = `${firstNavItemRect.left}px`;
    }
  }, [isHovered]);

  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [isBagHovered, setIsBagHovered] = useState(false);

  return (
    <div
      className="navbar-container relative flex flex-col lg:items-center"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsSubmenuOpen(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsSubmenuOpen(false);
      }}
      onClick={() => {
        // Toggle submenu visibility on click for mobile devices
        setIsHovered(!isHovered);
        setIsSubmenuOpen(!isSubmenuOpen);
      }}
    >
      <header
        className={`navbar flex justify-between ${
          isHovered ? "navbar-hovered" : ""
        }`}
      >
        <nav className="hidden md:flex justify-between items-center w-full">
          <div
            className="navbar-logo mr-4"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            style={{ cursor: "pointer" }}
          >
            {/* SVG for Apple logo */}
            <svg
              className="text-[#cccccc] fill-current"
              width="16"
              height="16"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5545 6.1362C13.4548 6.2172 11.6936 7.2558 11.6936 9.5652C11.6936 12.2364 13.9346 13.1814 14.0017 13.2048C13.9914 13.2624 13.6457 14.499 12.8201 15.759C12.084 16.8678 11.3152 17.9748 10.1457 17.9748C8.97617 17.9748 8.67518 17.2638 7.32506 17.2638C6.00934 17.2638 5.54152 17.9982 4.47174 17.9982C3.40197 17.9982 2.65553 16.9722 1.7973 15.7122C0.803194 14.2326 0 11.934 0 9.7524C0 6.2532 2.17396 4.3974 4.31351 4.3974C5.45037 4.3974 6.39803 5.1786 7.11179 5.1786C7.79115 5.1786 8.85061 4.3506 10.144 4.3506C10.6342 4.3506 12.3953 4.3974 13.5545 6.1362ZM9.52997 2.8692C10.0649 2.205 10.4432 1.2834 10.4432 0.3618C10.4432 0.234 10.4329 0.1044 10.4106 0C9.54029 0.0342 8.50491 0.6066 7.88059 1.3644C7.39042 1.9476 6.93292 2.8692 6.93292 3.8034C6.93292 3.9438 6.95528 4.0842 6.9656 4.1292C7.02064 4.14 7.11007 4.1526 7.19951 4.1526C7.98034 4.1526 8.96241 3.6054 9.52997 2.8692Z"
                fill={isLogoHovered ? "#ffffff" : "#cccccc"}
              />
            </svg>
          </div>

          <div className="navbar-items">
            {navLists.map((nav, index) => (
              <div
                className="navbar-item hidden md:flex lg:flex text-[#a6a6a6] hover:text-[#E7E7E7]"
                key={nav.name}
                ref={index === 0 ? firstNavItemRef : null}
                onMouseEnter={() => setHoveredItem(nav)}
              >
                {nav.name}
              </div>
            ))}
          </div>

          <div className="navbar-icons flex space-x-8 ml-4">
            {/* SVG for Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="44px"
              viewBox="0 0 15 44"
              fill={isSearchHovered ? "#ffffff" : "#cccccc"}
              onMouseEnter={() => setIsSearchHovered(true)}
              onMouseLeave={() => setIsSearchHovered(false)}
              style={{ cursor: "pointer" }}
            >
              <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
            </svg>
            {/* SVG for Bag Icon */}
            <svg
              height="44"
              viewBox="0 0 14 44"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
              fill={isBagHovered ? "#ffffff" : "#cccccc"}
              onMouseEnter={() => setIsBagHovered(true)}
              onMouseLeave={() => setIsBagHovered(false)}
              style={{ cursor: "pointer" }}
            >
              <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
            </svg>
          </div>
        </nav>

        {/* Mobile Navbar - HIDDEN Until === Mobile screen 
        then the top nav is hidden and this one displays! */}
        <nav className="flex md:hidden justify-between items-center w-full px-4">
          <div className="flex items-center justify-between w-full">
            {" "}
            <div
              className="navbar-logo mr-4 flex"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
              style={{ cursor: "pointer" }}
            >
              <svg
                className="text-[#cccccc] fill-current"
                width="16"
                height="16"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5545 6.1362C13.4548 6.2172 11.6936 7.2558 11.6936 9.5652C11.6936 12.2364 13.9346 13.1814 14.0017 13.2048C13.9914 13.2624 13.6457 14.499 12.8201 15.759C12.084 16.8678 11.3152 17.9748 10.1457 17.9748C8.97617 17.9748 8.67518 17.2638 7.32506 17.2638C6.00934 17.2638 5.54152 17.9982 4.47174 17.9982C3.40197 17.9982 2.65553 16.9722 1.7973 15.7122C0.803194 14.2326 0 11.934 0 9.7524C0 6.2532 2.17396 4.3974 4.31351 4.3974C5.45037 4.3974 6.39803 5.1786 7.11179 5.1786C7.79115 5.1786 8.85061 4.3506 10.144 4.3506C10.6342 4.3506 12.3953 4.3974 13.5545 6.1362ZM9.52997 2.8692C10.0649 2.205 10.4432 1.2834 10.4432 0.3618C10.4432 0.234 10.4329 0.1044 10.4106 0C9.54029 0.0342 8.50491 0.6066 7.88059 1.3644C7.39042 1.9476 6.93292 2.8692 6.93292 3.8034C6.93292 3.9438 6.95528 4.0842 6.9656 4.1292C7.02064 4.14 7.11007 4.1526 7.19951 4.1526C7.98034 4.1526 8.96241 3.6054 9.52997 2.8692Z"
                  fill={isLogoHovered ? "#ffffff" : "#cccccc"}
                />
              </svg>
            </div>
            {/* 3 x SVG's icons RIGHT SIDE */}
            <div className="flex space-x-0 ml-4 px-4">
              <div className="flex justify-between space-x-8">
                {/* SEARCH - SVG Icon */}
                <svg
                  className="width-15 height-44"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="44"
                  viewBox="0 0 15 44"
                  fill={isSearchHovered ? "#ffffff" : "#cccccc"}
                  onMouseEnter={() => setIsSearchHovered(true)}
                  onMouseLeave={() => setIsSearchHovered(false)}
                  style={{ cursor: "pointer" }}
                >
                  <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
                </svg>

                {/* BAG - SVG Icon */}
                <svg
                  height="44"
                  viewBox="0 0 15 44"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={isBagHovered ? "#ffffff" : "#cccccc"}
                  onMouseEnter={() => setIsBagHovered(true)}
                  onMouseLeave={() => setIsBagHovered(false)}
                  style={{ cursor: "pointer" }}
                >
                  <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
                </svg>

                {/* MENU - SVG Icon */}
                <svg
                  width="24"
                  height="44"
                  viewBox="0 0 24 24"
                  /* fill={isBagHovered ? "#ffffff" : "#cccccc"} */
                  stroke={isBagHovered ? "#ffffff" : "#cccccc"}
                  onMouseEnter={() => setIsBagHovered(true)}
                  onMouseLeave={() => setIsBagHovered(false)}
                  style={{ cursor: "pointer" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Menu / Menu_Duo_MD">
                    <path
                      id="Vector"
                      d="M5 15H19M5 9H19"
                      /* stroke="#000000" */
                      /* stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" */
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="submenu-container">
        {isHovered && (
          <div className="navbar-submenu">
            <NavbarSubMenu items={hoveredItem ? hoveredItem.submenu : []} />
          </div>
        )}
      </div>
      <Navbar2 isSubmenuOpen={isSubmenuOpen} />{" "}
      {/* Conditionally render Navbar2 */}
    </div>
  );
};

export default Navbar;

