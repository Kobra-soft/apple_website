import React from 'react';
import { dropdownLists, navSubLinks_Search } from "../constants";

const NavbarSubMenu = ({ style }) => {
  return (
    <div className="dropdown-menu-overlay" style={style}>
      {navSubLinks_Search.map((item) => (
        <a href={item.link} key={item.name}>{item.name}</a>
      ))}
    </div>
  );
};

export default NavbarSubMenu;