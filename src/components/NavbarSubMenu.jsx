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

/* import React from "react";

const NavbarSubMenu = ({ title, title2, title3, submenu, submenu2, submenu3 }) => {
  return (
    <div className="relative z-20 w-full bg-[#161616] pt-16">
      <div className="absolute top-0 left-0 w-full h-full bg-[#161616]"></div>
      <div className="navbar-submenu-container align-text-top -ml-12 relative z-30">
        <div className="navbar-submenu mr-24">
          <h2 className="navbar-title text-sm">{title}</h2>
          {submenu.map((item, index) => (
            <a className="" href="#" key={index}>
              {item}
            </a>
          ))}
        </div>
        <div className="navbar-submenu2-3 text-[11.666px] text-[#E8E8ED] mr-12">
          <h2 className="navbar-title text-sm">{title2}</h2>
          {submenu2.map((item, index) => (
            <a className="" href="#" key={index}>
              {item}
            </a>
          ))}
        </div>
        <div className="navbar-submenu2-3 text-[11.666px] text-[#E8E8ED]">
          <h2 className="navbar-title text-sm">{title3}</h2>
          {submenu3.map((item, index) => (
            <a className="" href="#" key={index}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarSubMenu; */