import { Link } from "react-router-dom";

import images from "~/assets/images";
import { HeaderContainer } from "../Header";
import config from "~/config";

function Featured() {
  return (
    <>
      <HeaderContainer title="New Arrial" />
      <div className="grid grid-cols-4 grid-rows-2 gap-3">
        <div className="bg-black m-3 col-span-2 row-span-2 relative">
          <img src={images.ps5} alt="" className="mt-[90px] mx-auto" />
          <div className="w-[47%] h-[25%] flex flex-col justify-between absolute bottom-6 left-6 text-white">
            <div>
              <h3 className="font-semibold lg:text-2xl text-xl mb-3">
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
        <div className="bg-[#0D0D0D] m-3 col-span-2 relative">
          <img
            src={images.woman_bg}
            alt=""
            className="h-full absolute right-0 top-0 object-cover"
          />
          <div className="w-[45%] h-[40%] flex flex-col justify-between absolute bottom-6 left-6 text-white">
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
        <div className="bg-[#313131] m-3 relative">
          <img
            src={images.clipart_transparent}
            alt=""
            className="mx-auto mt-6"
          />
          <div className="w-[80%] h-[40%] flex flex-col justify-between absolute bottom-6 left-6 text-white">
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
        <div className="bg-[#313131] m-3 relative">
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
