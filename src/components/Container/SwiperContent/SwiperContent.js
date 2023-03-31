import { Swiper } from "swiper/react";
import { Navigation, A11y } from "swiper";

function Content({
  children,
  slidePrivew,
  spaceBetween,
  navigation = true,
  className,
}) {
  return (
    <>
      <div className={className}>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={spaceBetween}
          slidesPerView={slidePrivew}
          navigation={navigation}
        >
          {children}
        </Swiper>
      </div>
    </>
  );
}

export default Content;
