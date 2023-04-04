import { Swiper } from "swiper/react";
import { forwardRef } from "react";

function Content(props, ref) {
  return (
    <>
      <div className={props.className}>
        <Swiper
          modules={props.modules}
          spaceBetween={props.spaceBetween}
          slidesPerView={props.slidesPerView}
          navigation={props.navigation}
          grid={props.grid}
          ref={ref}
          className={props.className}
        >
          {props.children}
        </Swiper>
      </div>
    </>
  );
}

export default forwardRef(Content);
