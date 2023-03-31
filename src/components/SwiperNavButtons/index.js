import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
function SwiperNavButtons({ button = false, btnTitle }) {
  return !button ? (
    <div className=" flex justify-between ">
      <button className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-900/10 hover:bg-white hover:border-2">
        <FiArrowLeft className="text-2xl text-[#333]" />
      </button>
      <button className="ml-3 w-10 h-10 flex justify-center items-center rounded-full bg-gray-900/10 hover:bg-white hover:border-2">
        <FiArrowRight className="text-2xl text-[#333]" />
      </button>
    </div>
  ) : (
    <div>
      <button className="px-6 py-3 text-white bg-secondary rounded font-medium hover:btn-second-hover">
        {btnTitle}
      </button>
    </div>
  );
}

export default SwiperNavButtons;
