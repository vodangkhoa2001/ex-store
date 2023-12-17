import { Tab } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useRef, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdLoop } from "react-icons/md";

import config from "~/config";
import ColorOption from "./ColorOption";
import SizeOption from "./SizeOption";
import Title from "../Title";
import { SwiperContent } from "~/components/SwiperContent";
import { Navigation } from "swiper";
import { ProductData } from "~/data/ProductData";
import { SwiperSlide } from "swiper/react";
import SingleProduct from "../SingleProduct/SingleProduct";
import { HeaderContainer } from "../Container/Header";
import SwiperNavButtons from "../SwiperNavButtons";

function ProductDetail() {
  const { state: pro } = useLocation();
  const {
    namePro,
    images,
    price,
    description,
    colors,
    size_value,
    size,
    numRate,
    rating,
  } = pro;

  const [quantity, setQuantity] = useState(1);
  const slideDetailRef = useRef();
  const handleDecrease = () => {
    return quantity === 1
      ? alert("Quantity not less than 1")
      : setQuantity(quantity - 1);
  };
  const handleIncrease = () => {
    return setQuantity(quantity + 1);
  };
  const handlePrev = () => {
    slideDetailRef.current.swiper.slidePrev();
  };
  const handleNext = () => {
    slideDetailRef.current.swiper.slideNext();
  };
  return (
    <>
      <Tab.Group
        as="div"
        className="max-sm:flex max-sm:flex-col lg:grid lg:grid-cols-6 lg:grid-rows-4 gap-4 h-[750px]"
      >
        {/* Desktop view */}
        <div className="hidden lg:flex lg:col-span-1 lg:row-span-4 lg:flex-col lg:justify-between max-sm:overflow-x-scroll lg:overflow-y-scroll">
          {images.map((image, index) => {
            return (
              <Tab.List key={index} as="div" className="lg:w-[190px]">
                <Tab
                  as="div"
                  className="max-sm:mx-1 max-sm:w-[140px] rounded mb-4 border border-gray-300 focus-visible:outline-none"
                >
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */

                    <div
                      className={
                        selected
                          ? "flex py-4 rounded justify-center border-2 border-gray-400"
                          : "flex py-4 rounded justify-center"
                      }
                    >
                      <img
                        src={image}
                        alt=""
                        className="lg:min-w-[70%]  lg:h-[140px] w-[80%] h-[100px] object-cover"
                      />
                    </div>
                  )}
                </Tab>
              </Tab.List>
            );
          })}
        </div>

        <Tab.Panels
          as="div"
          className="col-span-3 border border-gray-300 h-[750px] rounded max-sm:hidden"
        >
          {images.map((image, index) => {
            return (
              <Tab.Panel
                key={index}
                as="div"
                className="flex justify-center items-center w-full h-full"
              >
                <img src={image} alt="" className="w-[70%] object-cover" />
              </Tab.Panel>
            );
          })}
        </Tab.Panels>

        {/* Mobile view */}
        <div className="max-sm:flex max-sm:flex-col-reverse lg:hidden">
          <div className="flex overflow-x-scroll">
            {images.map((image, index) => {
              return (
                <Tab.List key={index} as="div" className="w-[190px]">
                  <Tab
                    as="div"
                    className="max-sm:mx-1 max-sm:w-[140px] rounded mb-4 border border-gray-300 focus-visible:outline-none"
                  >
                    {({ selected }) => (
                      /* Use the `selected` state to conditionally style the selected tab. */
                      <div
                        className={
                          selected
                            ? "flex py-4 rounded justify-center border-2 border-gray-400"
                            : "flex py-4 rounded justify-center"
                        }
                      >
                        <img
                          src={image}
                          alt="img pro"
                          className="w-[80%] h-[100px] object-cover"
                        />
                      </div>
                    )}
                  </Tab>
                </Tab.List>
              );
            })}
          </div>

          <Tab.Panels as="div" className="border border-gray-300 rounded">
            {images.map((image, index) => {
              return (
                <Tab.Panel
                  key={index}
                  as="div"
                  className="flex justify-center items-center w-full h-full"
                >
                  <img src={image} alt="" className="w-[250px] object-cover" />
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
        </div>
        <div className="mx-4 lg:col-span-2 lg:h-[750px] divide-y-2 overflow-y-scroll">
          {/* Info  Product */}
          <div className="mb-5">
            <h2 className="lg:text-3xl text-lg font-semibold">{namePro}</h2>
            <div className="flex divide-x-2 my-2">
              <div className="mr-4">
                <StarRatings
                  rating={rating}
                  numberOfStars={5}
                  starDimension="12px"
                  starRatedColor="#FFAD33"
                />
                <span className="lg:ml-3 ml-2 max-sm:text-sm">
                  ({numRate} Reviews){" "}
                </span>
              </div>
              <span className="text-green-500 pl-4">In Stock</span>
            </div>
            <span className="text-3xl">${price}</span>
            <p className="mt-5">{description}</p>
          </div>

          <div className="pt-5">
            {/* Color */}
            <div className="flex ">
              <span className="text-xl font-semibold mr-4">Color:</span>
              <ColorOption colors={colors} className="mb-5" />
            </div>
            {/* Size */}
            {size && (
              <div className="flex">
                <span className="text-xl font-semibold mr-4">Size:</span>
                <SizeOption sizes={size_value} />
              </div>
            )}
            {/* Quantity & Buy Now button & Like  */}
            <div className="h-11 flex items-center justify-between">
              {/* Quantity */}
              <div className="h-full flex items-center">
                <button
                  onClick={handleDecrease}
                  className="  border border-gray-300 h-full px-3 rounded-tl rounded-bl focus-within:bg-secondary focus-within:text-white"
                >
                  <AiOutlineMinus />
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="h-full m-0 bg-white border border-gray-400 w-[70px] text-center font-semibold"
                />
                <button
                  onClick={handleIncrease}
                  className="  border border-gray-300 h-full px-3 rounded-tr rounded-br focus-within:bg-secondary focus-within:text-white"
                >
                  <AiOutlinePlus />
                </button>
              </div>
              {/* Button Buy  Now */}
              <div className="h-full">
                <button className="h-full px-8 bg-secondary text-white rounded  hover:btn-second-hover">
                  Buy Now
                </button>
              </div>
              {/* Like */}
              <div className="h-full">
                <button className="h-full px-2 border border-gray-300 rounded hover:bg-gray-100">
                  <AiOutlineHeart className="text-3xl" />
                  {/* <AiFillHeart className="text-3xl text-secondary" /> */}
                </button>
              </div>
            </div>
            <div className="mt-10 border border-gray-300 rounded divide-y ">
              <div className="flex items-center justify-start p-5">
                <span className="text-3xl mr-3 w-[40px]">
                  <TbTruckDelivery />
                </span>
                <div>
                  <p className=" font-semibold">Free Delivery</p>
                  <Link
                    to={config.routes.comming_soon}
                    className="hover:underline font-medium  text-[13px]"
                  >
                    Enter your postal code for Delivery Availability
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-start p-5">
                <span className="text-3xl mr-3 w-[40px]">
                  <MdLoop />
                </span>
                <div>
                  <p className=" font-semibold">Return Delivery</p>
                  <Link
                    to={config.routes.comming_soon}
                    className="hover:underline font-medium text-[13px]"
                  >
                    Free 30 Days Delivery Returns. Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab.Group>
      <div>
        <Title title="Related Item" />
        <HeaderContainer className="flex justify-between max-sm:hidden">
          <SwiperNavButtons funcPrev={handlePrev} funcNext={handleNext} />
        </HeaderContainer>

        {/* Desktop view */}
        <SwiperContent
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={4}
          className="mt-4 flex mb-[70px] max-sm:hidden"
          ref={slideDetailRef}
        >
          {ProductData.map((product) => {
            return (
              !product.category || (
                <SwiperSlide key={product.id}>
                  <SingleProduct pro={product} />
                </SwiperSlide>
              )
            );
          })}
        </SwiperContent>

        {/* Mobile view */}
        <SwiperContent
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView={2}
          className="mt-4 flex lg:hidden"
          ref={slideDetailRef}
        >
          {ProductData.map((product) => {
            return (
              !product.category || (
                <SwiperSlide key={product.id}>
                  <SingleProduct pro={product} />
                </SwiperSlide>
              )
            );
          })}
        </SwiperContent>
      </div>
    </>
  );
}

export default ProductDetail;
