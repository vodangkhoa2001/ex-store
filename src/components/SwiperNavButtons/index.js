import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
function SwiperNavButtons({ button = false, children, funcPrev, funcNext }) {
  return !button ? (
    <div className=" flex justify-between ">
      <button
        onClick={funcPrev}
        className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-900/10 hover:bg-white hover:border-2"
      >
        <FiArrowLeft className="text-2xl text-[#333]" />
      </button>
      <button
        onClick={funcNext}
        className="ml-3 w-10 h-10 flex justify-center items-center rounded-full bg-gray-900/10 hover:bg-white hover:border-2"
      >
        <FiArrowRight className="text-2xl text-[#333]" />
      </button>
    </div>
  ) : (
    <div>{children}</div>
  );
}

export default SwiperNavButtons;
