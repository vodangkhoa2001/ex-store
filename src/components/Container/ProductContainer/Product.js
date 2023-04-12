import StarRatings from "react-star-ratings";
import { AiOutlineHeart } from "react-icons/ai";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { Navigation } from "swiper";
import Countdown, { zeroPad } from "react-countdown";

import Products from "~/data/ProductData";
import { HeaderContainer } from "../Header";
import SwiperNavButtons from "~/components/SwiperNavButtons";
import { ContentContainer } from "~/components/SwiperContent";
import { FooterContainer } from "../Footer";

function ProductContainer() {
  const slideRef = useRef();
  const handlePrev = () => {
    slideRef.current.swiper.slidePrev();
  };
  const handleNext = () => {
    slideRef.current.swiper.slideNext();
  };
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex items-end justify-between ml-[70px]">
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Days</span>
          <span className="text-3xl font-semibold ">{zeroPad(days)}</span>
        </div>
        <span className="mx-3 font-bold font-poppins text-2xl text-[#DB4444]">
          :
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Hours</span>
          <span className="text-3xl font-semibold">{zeroPad(hours)}</span>
        </div>
        <span className="mx-3 font-bold font-poppins text-2xl text-[#DB4444]">
          :
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Minutes</span>
          <span className="text-3xl font-semibold">{zeroPad(minutes)}</span>
        </div>
        <span className="mx-3 font-bold font-poppins text-2xl text-[#DB4444]">
          :
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Seconds</span>
          <span className="text-3xl font-semibold">{zeroPad(seconds)}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <HeaderContainer
        title="Flash Sale"
        className="flex justify-start relative"
      >
        <Countdown date={Date.now() + 86400000 * 3} renderer={renderer} />
        <div className="absolute right-0">
          <SwiperNavButtons funcPrev={handlePrev} funcNext={handleNext} />
        </div>
      </HeaderContainer>
      <ContentContainer
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={4}
        className="mt-10 flex mb-[70px]"
        ref={slideRef}
      >
        {Products.map((pro) => {
          return (
            !pro.discount || (
              <SwiperSlide key={pro.id}>
                <div className="max-w-[270px] h-[350px] hover:bg-black/5 cursor-pointer rounded">
                  <div className="h-[250px] relative flex items-center justify-center rounded bg-gray-900/10">
                    <div className="absolute top-2 flex justify-between left-3 right-3">
                      <span className="bg-secondary py-1 px-3 rounded text-white my-auto">
                        -{pro.discountPercent}%
                      </span>
                      <button className=" bg-white w-10 h-10 rounded-full hover:bg-gray-900/20">
                        <AiOutlineHeart className="text-2xl mx-auto" />
                      </button>
                    </div>
                    <img
                      src={pro.image}
                      alt=""
                      className="object-cover w-[70%]"
                    />
                  </div>
                  <div className="p-2">
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
            )
          );
        })}
      </ContentContainer>
      <FooterContainer className="w-full flex justify-center my-10">
        <button className="bg-secondary px-4 py-2 rounded text-white hover:btn-second-hover">
          View All Products
        </button>
      </FooterContainer>
    </>
  );
}

export default ProductContainer;
