const Navbar2 = ({ isSubmenuOpen }) => {
  return (
    <header className={`bg-[#1d1d1f] w-full py-5 sm:px-10 px-5 ${isSubmenuOpen ? 'navbar2-hidden' : ''}`}>
      <nav className="w-full screen-max-width">
        <div className="row-auto justify-center bg-[#1d1d1f]">
          <div className="py-0 text-[11.666px] sm:text-[13.666px] lg:text-[17px] font-extralight text-[#f5f5f7]
          text-center mx-auto max-w-[62%] sm:max-w-[62%] md:max-w-[42%] lg:max-w-[42%]">
            <p className="leading-tight">
            Get £130–£630 in credit toward iPhone 15 Pro when you trade in iPhone 11 or higher.*{" "}
              <span className="cursor-pointer text-blue">Buy {">"}</span>
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar2;