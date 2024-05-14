import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-[0.82rem] sm:px-[29rem] px-5 flex justify-between items-center">
      <nav className="flex justify-between">
        <div className="flex justify-between w-full sm:px-0">
          <img src={appleImg} alt="Apple" width={13} height={13} />
          <div className="flex justify-start max-sm:hidden mx-5">
            {navLists.map((nav, index) => (
              <div
                key={nav}
                className={`text-[11.666px] font-light cursor-pointer text-[#cccccc] hover:text-white transition-all-5000
                 ${
                  index < navLists.length - 1
                    ? "mx-[1.28rem]"
                    : "pr-[0rem] pl-0"
                }`}
              >
                {nav}
              </div>
            ))}
          </div>
          <div className="flex gap-10">
            <img src={searchImg} alt="search" width={13} height={13} />
            <img src={bagImg} alt="bag" width={13} height={13} />
          </div>
        </div>{" "}
        {/* End of container */}
      </nav>
    </header>
  );
};

export default Navbar;
