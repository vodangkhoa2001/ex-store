import Countdown, { zeroPad } from "react-countdown";

import { CategoriesContainer } from "./CategoriesContainer";
import { ProductContainer } from "./ProductContainer";
import Title from "~/components/Title";
import { BestSelling } from "./BestSellingContainer";
import { Banner } from "../Banner";
import images from "~/assets/images";
import { Featured } from "./Featured";
import { ServicesContainer } from "./ServicesContaner";
// import { OurProducts } from "./OurProducts";

function Container() {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className=" flex justify-between lg:mr-[40px] text-black">
        <div className="time-discount">
          <span className="font-semibold lg:text-3xl text-[12px] ">
            {zeroPad(days)}
          </span>
          <span className="lg:text-[12px] text-[6px]">Days</span>
        </div>
        <div className="time-discount">
          <span className="font-semibold lg:text-3xl text-[12px]">
            {zeroPad(hours)}
          </span>
          <span className="lg:text-[12px] text-[6px]">Hours</span>
        </div>
        <div className="time-discount">
          <span className="font-semibold lg:text-3xl text-[12px]">
            {zeroPad(minutes)}
          </span>
          <span className="lg:text-[12px] text-[6px]">Minutes</span>
        </div>
        <div className="time-discount">
          <span className="font-semibold lg:text-3xl text-[12px]">
            {zeroPad(seconds)}
          </span>
          <span className="lg:text-[12px] text-[6px]">Seconds</span>
        </div>
      </div>
    );
  };
  const milisecondOfDay = 86400000;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="lg:mt-[100px] divide-y ">
        <div>
          <Title title="Today's" />
          <ProductContainer />
        </div>
        <div>
          <Title title={"Categories"} />
          <CategoriesContainer />
        </div>
        <div>
          <Title title={"This Month"} />
          <BestSelling />
        </div>
      </div>
      <div className="relative">
        <Banner
          image={images.banner_jbc}
          className="w-full mt-[100px] object-cover"
        >
          <div className="w-[39%] absolute lg:top-[60px] lg:bottom-[60px] md:top-[35px] md:bottom-[35px] top-[10px]  bottom-[20px] flex flex-col justify-between lg:pl-[60px] sm:pl-[30px]">
            <h2 className="lg:top-[60px] text-[#00FF66] font-semibold">
              Categories
            </h2>
            <span className="lg:top-[120px] text-white lg:text-5xl md:text-[4xl] text-[16px]">
              Enhance Your Music Experience
            </span>
            <Countdown
              date={Date.now() + milisecondOfDay * 5}
              renderer={renderer}
            />
            <button className="lg:w-[170px] mt-1 w-[90px] lg:py-[20px] py-[4px] text-white rounded bg-[#00FF66] outline-none hover:bg-[#00FF66]/80 text-[12px] lg:text-2xl">
              Buy Now!
            </button>
          </div>
        </Banner>
      </div>
      {/* <div>
        <Title title="Our Products" />
        <OurProducts />
      </div> */}
      <div>
        <Title title="Featured" />
        <Featured />
      </div>
      <div>
        <ServicesContainer />
      </div>
    </div>
  );
}

export default Container;
