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

import React from 'react';

const NavbarSubMenu = ({ items }) => {
  return (
    <div className="navbar-submenu">
      {items.map((item, index) => (
        <a href="#" key={index}>{item}</a>
      ))}
    </div>
  );
};

export default NavbarSubMenu;