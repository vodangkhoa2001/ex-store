import SwiperNavButtons from "~/components/SwiperNavButtons";
import { HeaderContainer } from "../Header";
import { SwiperContent } from "~/components/SwiperContent";
import { ProductData } from "~/data/ProductData";
import { SwiperSlide } from "swiper/react";
import { useRef } from "react";
import SingleProduct from "~/components/SingleProduct";

function BestSelling() {
  const slideSellingRef = useRef();
  const handlePrev = () => {
    slideSellingRef.current.swiper.slidePrev();
  };
  const handleNext = () => {
    slideSellingRef.current.swiper.slideNext();
  };
  return (
    <div className="relative">
      <HeaderContainer
        title="Best Selling Products"
        className="flex justify-between"
      >
        <SwiperNavButtons button>
          <button className="hidden lg:inline-block px-6 py-3 text-white bg-secondary rounded font-medium hover:btn-second-hover">
            View All
          </button>
        </SwiperNavButtons>
      </HeaderContainer>
      {/* Desktop view */}
      <SwiperContent
        spaceBetween={50}
        slidesPerView={4}
        className="mt-10 hidden lg:flex mb-[70px] px-[60px]"
        ref={slideSellingRef}
      >
        {ProductData.map((pro) => {
          return (
            pro.discount || (
              <SwiperSlide key={pro.id}>
                <SingleProduct pro={pro} />
              </SwiperSlide>
            )
          );
        })}
      </SwiperContent>
      {/* Mobile view */}
      <SwiperContent
        spaceBetween={8}
        slidesPerView={2}
        className="mt-10 lg:hidden flex mb-[70px] px-1"
        ref={slideSellingRef}
      >
        {ProductData.map((pro) => {
          return (
            pro.discount || (
              <SwiperSlide key={pro.id}>
                <SingleProduct pro={pro} />
              </SwiperSlide>
            )
          );
        })}
      </SwiperContent>
      <div className="hidden lg:inline-block absolute w-full top-[50%]">
        <SwiperNavButtons funcPrev={handlePrev} funcNext={handleNext} />
      </div>
    </div>
  );
}

export default BestSelling;
