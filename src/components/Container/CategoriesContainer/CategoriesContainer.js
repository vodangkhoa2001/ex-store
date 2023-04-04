import { SwiperSlide } from "swiper/react";

import { Categories } from "~/data/CategoriesData";
import { HeaderContainer } from "../Header";
import SwiperNavButtons from "~/components/SwiperNavButtons";
import { ContentContainer } from "~/components/SwiperContent";
import { useRef } from "react";
import { Navigation } from "swiper";

function CategoriesContainer() {
  const slideCateRef = useRef();

  const handlePrev = () => {
    slideCateRef.current.swiper.slidePrev();
  };
  const handleNext = () => {
    slideCateRef.current.swiper.slideNext();
  };
  return (
    <>
      <HeaderContainer
        title="Browse By Category"
        className="flex justify-between"
      >
        <SwiperNavButtons funcPrev={handlePrev} funcNext={handleNext} />
      </HeaderContainer>

      <ContentContainer
        modules={[Navigation]}
        slidesPerView={6}
        spaceBetween={50}
        className="mt-10 flex mb-[70px]"
        ref={slideCateRef}
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
      </ContentContainer>
    </>
  );
}

export default CategoriesContainer;
