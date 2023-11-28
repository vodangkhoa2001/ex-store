import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { Navigation } from "swiper";
import Countdown, { zeroPad } from "react-countdown";

import { ProductData } from "~/data/ProductData";
import { HeaderContainer } from "../Header";
import SwiperNavButtons from "~/components/SwiperNavButtons";
import { SwiperContent } from "~/components/SwiperContent";
import { FooterContainer } from "../Footer";
import SingleProduct from "~/components/SingleProduct";

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
      <div className="flex items-end justify-between lg:ml-[70px] mr-2">
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
        className="text-sm flex justify-start relative"
      >
        <Countdown date={Date.now() + 86400000 * 3} renderer={renderer} />
        <div className="absolute right-0 hidden lg:inline-block">
          <SwiperNavButtons funcPrev={handlePrev} funcNext={handleNext} />
        </div>
      </HeaderContainer>
      {/* Desktop view */}
      <SwiperContent
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={4}
        className="mt-10 hidden lg:flex mb-[70px]"
        ref={slideRef}
      >
        {ProductData.map((pro) => {
          return (
            !pro.discount || (
              <SwiperSlide key={pro.id}>
                <SingleProduct pro={pro} />
              </SwiperSlide>
            )
          );
        })}
      </SwiperContent>
      {/* Moblie view */}
      <SwiperContent
        modules={[Navigation]}
        spaceBetween={5}
        slidesPerView={2}
        className="mt-10 lg:hidden mb-[70px]"
        ref={slideRef}
      >
        {ProductData.map((pro) => {
          return (
            !pro.discount || (
              <SwiperSlide key={pro.id}>
                <SingleProduct pro={pro} />
              </SwiperSlide>
            )
          );
        })}
      </SwiperContent>
      <FooterContainer className="w-full flex justify-center my-10">
        <button className="bg-secondary px-4 py-2 rounded text-white hover:btn-second-hover">
          View All Products
        </button>
      </FooterContainer>
    </>
  );
}

export default ProductContainer;
