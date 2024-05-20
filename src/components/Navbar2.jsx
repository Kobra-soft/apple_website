import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar2 = () => {
  return (
    <header className="bg-[#1d1d1f] w-full py-4 sm:px-10 px-5">
      <nav className="w-full screen-max-width">
        <div className="row-auto justify-center max-sm:hidden bg-[#1d1d1f]">
          <div className="py-0 text-[17px] font-extralight text-[#f5f5f7] 
          text-center mx-auto max-w-[40%]">
            <p>
              Get £130–£630 in credit toward iPhone 15 Pro when you trade in
              iPhone 11 or higher.{" "}
              <span className="cursor-pointer text-blue">Buy {">"}</span>
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar2;