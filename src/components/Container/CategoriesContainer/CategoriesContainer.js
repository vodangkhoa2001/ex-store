import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";

import { Categories } from "~/data/CategoriesData";

function CategoriesContainer() {
  return (
    <>
      <div className="flex  justify-between">
        <div className="flex items-center">
          <h1 className="text-4xl font-semibold">Browse By Category</h1>
        </div>
        <div className=" flex justify-between">
          <button className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-900/10 hover:bg-white hover:border-2">
            <FiArrowLeft className="text-2xl text-[#333]" />
          </button>
          <button className="ml-3 w-10 h-10 flex justify-center items-center rounded-full bg-gray-900/10 hover:bg-white hover:border-2">
            <FiArrowRight className="text-2xl text-[#333]" />
          </button>
        </div>
      </div>
      <div className="mt-10 flex">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={6}
          navigation
        >
          {Categories.map((cate) => {
            return (
              <SwiperSlide key={cate.id}>
                <div className="border-solid border border-gray-900 rounded h-[100px] flex items-center justify-center flex-col hover:bg-secondary hover:text-white hover:border-white">
                  <span className="text-3xl">{cate.icon}</span>
                  <span>{cate.name}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default CategoriesContainer;
