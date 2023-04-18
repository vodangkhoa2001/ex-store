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
          <button className="px-6 py-3 text-white bg-secondary rounded font-medium hover:btn-second-hover">
            View All
          </button>
        </SwiperNavButtons>
      </HeaderContainer>
      <SwiperContent
        spaceBetween={50}
        slidesPerView={4}
        className="mt-10 flex mb-[70px] px-[60px]"
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
      <div className="absolute w-full top-[50%]">
        <SwiperNavButtons funcPrev={handlePrev} funcNext={handleNext} />
      </div>
    </div>
  );
}

export default BestSelling;
