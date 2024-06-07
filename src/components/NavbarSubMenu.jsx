import React from 'react';
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


export default NavbarSubMenu;