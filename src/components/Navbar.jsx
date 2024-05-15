import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-[0.82rem] flex justify-center items-center">
      <nav className="flex justify-center bg-green-400">
        <div className="flex justify-center w-full"> 
          <img src={appleImg} alt="Apple" width={13} height={13} />
          <div className="flex justify-start max-sm:hidden ml-0 mr-0 bg-red-900">
            {navLists.map((nav, index) => (
              <div
                key={nav}
                className={`sm:hidden md:flex text-[11.666px] font-light cursor-pointer text-[#cccccc]
                 hover:text-white bg-gray-900
                 ${
                  index < navLists.length - 1
                    ? "sm:mx-[0.0rem] md:mx-[0.86rem] lg:mx-[1.28rem]"
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