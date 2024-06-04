import React from 'react';
import { dropdownLists } from "../constants";

const NavbarSubMenu = ({ style }) => {
  return (
    <div className="dropdown-menu-overlay" style={style}>
      {dropdownLists.map((item) => (
        <a href={item.link} key={item.name}>{item.name}</a>
      ))}
    </div>
  );
};

export default NavbarSubMenu;