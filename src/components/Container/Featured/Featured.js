import { Link } from "react-router-dom";

import images from "~/assets/images";
import { HeaderContainer } from "../Header";
import config from "~/config";

function Featured() {
  return (
    <>
      <HeaderContainer title="New Arrial" />
      <div className="max-sm:mt-[44px] max-sm:flex max-sm:justify-center max-sm:items-center flex-col lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-3 ">
        <div className=" max-sm:w-[300px] bg-black lg:m-2 lg:col-span-2 lg:row-span-2 relative">
          <img src={images.ps5} alt="" className="mt-[90px] mx-auto" />
          <div className="lg:w-[47%] h-[25%] flex flex-col justify-between absolute lg:bottom-6 bottom-8 lg:left-6 mx-2 text-white">
            <div>
              <h3 className="font-semibold lg:text-2xl text-[16px] lg:mb-3 mb-2 ">
                Play Station 5
              </h3>
              <p className="lg:text-sm text-[12px]">
                Black and White version of the PS5 coming out on sale.
              </p>
            </div>
            <div>
              <Link
                to={config.routes.home}
                className="lg:text-base text-sm hover_bar_underline_white"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="max-sm:w-[300px] max-sm:h-[200px] lg:h-full max-sm:mt-5 bg-[#0D0D0D] lg:m-3 lg:col-span-2 relative">
          <img
            src={images.woman_bg}
            alt=""
            className=" h-full absolute lg:right-0 lg:top-0 object-cover"
          />
          <div className="lg:w-[45%] lg:h-[40%] flex flex-col justify-between absolute bottom-6 left-6 text-white">
            <div>
              <h3 className="font-semibold lg:text-2xl text-xl mb-3">
                Women’s Collections
              </h3>
              <p className="lg:text-sm text-[12px]">
                Featured woman collections that give you another vibe.
              </p>
            </div>
            <div>
              <Link
                to={config.routes.home}
                className="lg:text-base text-sm hover_bar_underline_white"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="max-sm:w-[300px] bg-[#313131] lg:m-3 max-sm:mt-5 relative">
          <img
            src={images.clipart_transparent}
            alt=""
            className="mx-auto mt-6"
          />
          <div className="lg:w-[80%] lg:h-[40%] flex flex-col justify-between absolute bottom-6 left-6 text-white">
            <div>
              <h3 className="font-semibold lg:text-2xl text-xl mb-2">
                Speakers
              </h3>
              <p className="lg:text-sm text-[12px]">Amazon wireless speakers</p>
            </div>
            <div>
              <Link
                to={config.routes.home}
                className="lg:text-base text-sm hover_bar_underline_white"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="max-sm:w-[300px] bg-[#313131] lg:m-3 max-sm:mt-5 relative">
          <img src={images.gucci_intense} alt="" className="mx-auto mt-6" />
          <div className="w-[80%] h-[40%] flex flex-col justify-between absolute bottom-6 left-6 text-white">
            <div>
              <h3 className="font-semibold lg:text-2xl text-xl mb-2">
                Perfume
              </h3>
              <p className="lg:text-sm text-[12px]">GUCCI INTENSE OUD EDP</p>
            </div>
            <div>
              <Link
                to={config.routes.home}
                className="lg:text-base text-sm hover_bar_underline_white"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
