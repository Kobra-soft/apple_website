/* import React from 'react';
import { dropdownLists, navSubLinks_Search, footerLinks } from "../constants";

const NavbarSubMenu = ({ items }) => {
  return (
    <div className="navbar-submenu">
      {dropdownLists.map((item, index) => (
        <a href={item.link} key={item.name}>{item.name}</a>
      ))}
    </div>
  );
};


export default NavbarSubMenu; */

import React from "react";

const NavbarSubMenu = ({ items, submenu2 }) => {
  return (
    <div
      className="navbar-submenu-container 
    align-text-top -ml-12"
    >
      <div className="navbar-submenu mr-24">
        <h9 className="nabar-titles0-2 text-sm">Heading</h9>
        {items.map((item, index) => (
          <a className="" href="#" key={index}>
            {item}
          </a>
        ))}
      </div>
      <div className="navbar-submenu2-3 text-[11.666px] text-[#E8E8ED] mr-12">
        <h9 className="nabar-titles0-2 text-sm">Heading</h9>
        {items.map((item, index) => (
          <a className="" href="#" key={index}>
            {item}
          </a>
        ))}
      </div>
      <div className="navbar-submenu2-3 text-[11.666px] text-[#E8E8ED]">
        <h9 className="nabar-titles0-2 text-sm">Heading</h9>
        {items.map((item, index) => (
          <a className="" href="#" key={index}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavbarSubMenu;
