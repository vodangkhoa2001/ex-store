import { Swiper } from "swiper/react";
import { forwardRef } from "react";

function Content(props, ref) {
  return (
    <>
      <div className={props.className}>
        <Swiper {...props} ref={ref}>
          {props.children}
        </Swiper>
      </div>
    </>
  );
}

export default forwardRef(Content);
