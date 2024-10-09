import React from "react";

const NavbarSubMenu = ({ items, submenu2 }) => {
  return (
    <div className="relative z-20 w-full bg-[#161616] pt-16">
      <div className="absolute top-0 left-0 w-full h-full bg-[#161616]"></div>
      <div className="navbar-submenu-container align-text-top -ml-12 relative z-30">
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
    </div>
  );
};

export default NavbarSubMenu;
