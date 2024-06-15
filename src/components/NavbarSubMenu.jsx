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

/* const NavbarSubMenu = ({ items }) => {
  return (
    <div className="navbar-submenu bg-red-400">
      {items.map((item, index) => (
        <a className='' href="#" key={index}>{item}</a>
      ))}
    </div>
  );
}; */

/* const NavbarSubMenu = ({ items }) => {
  return (
    <div className="navbar-submenu bg-red-400">
      {items.map((item, index) => (
        <a className='' href="#" key={index}>{item}</a>
      ))}
    </div>
  );
}; */

/* const NavbarSubMenu = ({ items, submenu2 }) => {
  return (
    <div className="navbar-submenu">
      <div className="navbar-submenu bg-red-400">
        {items.map((item, index) => (
          <a className='' href="#" key={index}>{item}</a>
        ))}
      </div>
      <div className="navbar-submenu bg-red-400">
        {items.map((item, index) => (
          <a className='' href="#" key={index}>{item}</a>
        ))}
      </div>
    </div>
  );
}; */

const NavbarSubMenu = ({ items, submenu2 }) => {
  return (
    <div className="navbar-submenu-container">
      <div className="navbar-submenu bg-[#161616]">
        {items.map((item, index) => (
          <a className='' href="#" key={index}>{item}</a>
        ))}
      </div>
      <div className="navbar-submenu bg-[#161616]">
        {items.map((item, index) => (
          <a className='' href="#" key={index}>{item}</a>
        ))}
      </div>
      <div className="navbar-submenu bg-[#161616]">
        {items.map((item, index) => (
          <a className='' href="#" key={index}>{item}</a>
        ))}
      </div>
    </div>
  );
};

export default NavbarSubMenu;

