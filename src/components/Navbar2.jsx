import "./Navbar2.css";

const Navbar2 = ({ isSubmenuOpen }) => {
  return (
    <header
      className="navbar2-container relative z-10 bg-customBlack w-full py-5 sm:px-10 px-5 pointer-events-none overflow-hidden"
    >
      <nav className="w-full screen-max-width">
        <div
          className="py-0 text-[11.666px] sm:text-[13.666px] lg:text-[17px] font-extralight text-[#f5f5f7]
          text-center mx-auto max-w-[62%] sm:max-w-[62%] md:max-w-[42%] lg:max-w-[42%]"
        >
          <p className="selection:leading-tight">
            Get £130–£630 in credit toward iPhone 15 Pro when you trade in
            iPhone 11 or higher.*{" "}
            <span className="cursor-pointer text-blue">Buy {">"}</span>
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar2;