import React, { useState, useRef, useEffect } from "react";
import { bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import "./Navbar.css";
import NavbarSubMenu from "./NavbarSubMenu";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const firstNavItemRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      const firstNavItem = firstNavItemRef.current;
      const firstNavItemRect = firstNavItem.getBoundingClientRect();
      const submenu = document.querySelector('.navbar-submenu');
      submenu.style.left = `${firstNavItemRect.left}px`;
    }
  }, [isHovered]);
  return (
    <div className="navbar-container">
      <header className={`navbar ${isHovered ? "navbar-hovered" : ""}`}>
        <nav className="navbar-navigation">
          <div className="navbar-logo">
            {/* Insert your SVG for the Apple logo here */}
          </div>
  
          <div className="navbar-items text-[11.666px]">
            {navLists.map((nav, index) => (
              <div
                className="navbar-item text-[#a6a6a6] hover:text-[#E7E7E7] cursor-pointer"
                key={nav}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                ref={index === 0 ? firstNavItemRef : null}
              >
                {nav}
              </div>
            ))}
          </div>
  
          <div className="navbar-icons">
            {/* Insert your SVGs for the Search and Bag icons here */}
          </div>
        </nav>
      </header>
      <div className="submenu-container">
        {isHovered && (
          <div className="navbar-submenu">
            {/* Insert your NavbarSubMenu component here */}
            <NavbarSubMenu
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;