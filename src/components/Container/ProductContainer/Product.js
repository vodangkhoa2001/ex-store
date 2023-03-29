import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import Title from "~/components/Title";
import Product from "~/components/Product";

function ProductContainer() {
  return (
    <div className="mt-[100px]">
      <Title title="Today's" />
      <div className="flex  justify-between">
        <div className="flex items-center">
          <h1 className="text-4xl font-semibold">Flash Sale</h1>
          <div className="flex items-end justify-between ml-[70px]">
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Days</span>
              <span className="text-3xl font-semibold ">03</span>
            </div>
            <span className="mx-3 font-bold font-poppins text-2xl text-[#DB4444]">
              :
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Hours</span>
              <span className="text-3xl font-semibold">03</span>
            </div>
            <span className="mx-3 font-bold font-poppins text-2xl text-[#DB4444]">
              :
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Minutes</span>
              <span className="text-3xl font-semibold">03</span>
            </div>
            <span className="mx-3 font-bold font-poppins text-2xl text-[#DB4444]">
              :
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Seconds</span>
              <span className="text-3xl font-semibold">03</span>
            </div>
          </div>
        </div>
        <div className=" flex justify-between">
          <button className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-900/10 hover:bg-white hover:border-2">
            <FiArrowLeft className="text-2xl text-[#333]" />
          </button>
          <button className="ml-3 w-10 h-10 flex justify-center items-center rounded-full bg-gray-900/10 hover:bg-white hover:border-2">
            <FiArrowRight className="text-2xl text-[#333]" />
          </button>
        </div>
      </div>
      <div className=" mt-10 flex ">
        <Product />
      </div>
      <div className="w-full flex justify-center mt-10">
        <button className="bg-secondary px-4 py-2 rounded text-white">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default ProductContainer;
