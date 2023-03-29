import StarRatings from "react-star-ratings";
import { AiOutlineHeart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import Products from "~/data/ProductData";
function Product() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
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
  );
}

export default Product;
