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

/* const NavbarSubMenu = () => {
  return (
    <div className="navbar-submenu">
      {dropdownLists.map((item, index) => (
        <div key={index} className="navbar-submenu-item">
          {item}
        </div>
      ))}
    </div>
  );
}; */

export default NavbarSubMenu;