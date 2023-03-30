import StarRatings from "react-star-ratings";
import { AiOutlineHeart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import { useSwiper } from "swiper/react";

import Products from "~/data/ProductData";

function ProductContainer() {
  const swiper = useSwiper();
  return (
    <>
      <div className="flex  justify-between">
        <div className="flex items-center">
          <h1 className="text-4xl font-semibold">Flash Sale</h1>
          <div className="flex items-end justify-between ml-[70px]">
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Days</span>
              <span className="text-3xl font-semibold ">03</span>
            </div>
            <span className="mx-3 font-bold font-poppins text-2xl text-[#DB4444]">
              :
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Hours</span>
              <span className="text-3xl font-semibold">03</span>
            </div>
            <span className="mx-3 font-bold font-poppins text-2xl text-[#DB4444]">
              :
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Minutes</span>
              <span className="text-3xl font-semibold">03</span>
            </div>
            <span className="mx-3 font-bold font-poppins text-2xl text-[#DB4444]">
              :
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Seconds</span>
              <span className="text-3xl font-semibold">03</span>
            </div>
          </div>
        </div>
        <div className=" flex justify-between">
          <button
            onClick={() => swiper.slidePrev()}
            className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-900/10 hover:bg-white hover:border-2"
          >
            <FiArrowLeft className="text-2xl text-[#333]" />
          </button>
          <button
            onClick={() => swiper.slideNext()}
            className="ml-3 w-10 h-10 flex justify-center items-center rounded-full bg-gray-900/10 hover:bg-white hover:border-2"
          >
            <FiArrowRight className="text-2xl text-[#333]" />
          </button>
        </div>
      </div>
      <div className=" mt-10 flex ">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
        >
          {Products.map((pro) => {
            return (
              <SwiperSlide key={pro.id}>
                <div className="w-[270px] h-[350px] ml-9">
                  <div className="h-[250px] relative flex items-center justify-center rounded bg-gray-900/10">
                    <div className="absolute top-2 flex justify-between left-3 right-3">
                      <span className="bg-secondary py-1 px-3 rounded text-white my-auto">
                        -{pro.discount}%
                      </span>
                      <button className=" bg-white w-10 h-10 rounded-full hover:bg-gray-900/20">
                        <AiOutlineHeart className="text-2xl mx-auto" />
                      </button>
                    </div>
                    <img src={pro.image} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold">{pro.namePro}</h2>
                    <span className="text-secondary font-medium">
                      $ {pro.discountPrice}
                    </span>
                    <span className="text-black/50 font-medium line-through ml-2">
                      $ {pro.price}
                    </span>
                    <div className="flex items-center">
                      <StarRatings
                        rating={pro.rating}
                        numberOfStars={5}
                        starDimension="20px"
                        starRatedColor="#FFAD33"
                      />
                      <span className="ml-3">({pro.numRate})</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="w-full flex justify-center my-10">
        <button className="bg-secondary px-4 py-2 rounded text-white">
          View All Products
        </button>
      </div>
    </>
  );
}

export default ProductContainer;
