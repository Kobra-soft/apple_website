import React from 'react';
import { bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import './Navbar.css';
import NavbarSubMenu from './NavbarSubMenu';

const Navbar = () => {
  /* const navLists2 = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"]; */

  return (
    <header className="navbar">
      <nav className="navbar-navigation">
        <div className="navbar-logo">
          {/* Insert your SVG for the Apple logo here */}
        </div>

        <div className="navbar-items text-[11.666px]">
          {navLists.map((nav, index) => (
            <div className="navbar-item text-[#a6a6a6] hover:text-[#E7E7E7] cursor-pointer" 
            key={nav}>
              {nav}
              <div className="navbar-submenu">
                {/* Insert your NavbarSubMenu component here */}
                <NavbarSubMenu />
              </div>
            </div>
          ))}
        </div>

        <div className="navbar-icons">
          {/* Insert your SVGs for the Search and Bag icons here */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;