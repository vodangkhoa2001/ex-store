import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useSwiper } from "swiper/react";
import { useRef } from "react";

function SwiperNavButtons() {
  const swiper = useSwiper();
  // const prevRef = useRef(null);
  // const nextRef = useRef(null);
  return (
    <div className=" flex justify-between ">
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
  );
}

export default SwiperNavButtons;
