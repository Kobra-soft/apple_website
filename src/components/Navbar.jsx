import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-[0.82rem] flex justify-center items-center">
      <nav className="flex justify-center">
        <div className="flex justify-center w-full"> 

          <img className="bg-red-400 mx-0" src={appleImg} alt="Apple" width={13} height={13} />

          <div className="flex justify-start max-sm:hidden ml-16 mr-0 bg-red-900">
            {navLists.map((nav, index) => (
              <div
                key={nav}
                className={`sm:hidden md:flex text-[12px] font-light cursor-pointer text-[#cccccc]
                 hover:text-white bg-gray-900
                 ${
                  index < navLists.length - 1
                    ? "md:pr-[0.86rem] lg:pr-[2.52rem] "
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;