import React, { useState, useRef, useEffect } from "react";
import { bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import "./Navbar.css";
import NavbarSubMenu from "./NavbarSubMenu";
import Navbar2 from "./Navbar2"; // Import Navbar2

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // New state
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

  return (
    <div
      className="navbar-container"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsSubmenuOpen(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsSubmenuOpen(false);
      }}
    >
      <header className={`navbar ${isHovered ? "navbar-hovered" : ""}`}>
        <nav className="navbar-navigation">
          <div className="navbar-logo">
            {/* Insert SVG for Apple logo */}
          </div>
          

          <div className="navbar-items text-[11.666px]">
            {navLists.map((nav, index) => (
              /*  <div
                className="navbar-item text-[#a6a6a6] hover:text-[#E7E7E7] cursor-pointer"
                key={nav}
                ref={index === 0 ? firstNavItemRef : null}
              >
                {nav}
              </div> */
              <div
                className="navbar-item hidden md:flex lg:flex text-[#a6a6a6] hover:text-[#E7E7E7] cursor-pointer"
                key={nav.name}
                ref={index === 0 ? firstNavItemRef : null}
                onMouseEnter={() => setHoveredItem(nav)}
              >
                {nav.name}
              </div>
            ))}
          </div>

          <div className="navbar-icons">
            {/* Insert SVGs */}
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
