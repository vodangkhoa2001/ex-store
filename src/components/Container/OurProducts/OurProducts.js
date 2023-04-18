import { Grid, Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import { AiOutlineHeart } from "react-icons/ai";
import StarRatings from "react-star-ratings";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { SwiperContent } from "~/components/SwiperContent";
import SwiperNavButtons from "~/components/SwiperNavButtons";
import { HeaderContainer } from "../Header";
import { ProductData } from "~/data/ProductData";

function OurProduct() {
  const slideOurProductRef = useRef();
  const handlePrev = () => {
    slideOurProductRef.current.swiper.slidePrev();
  };
  const handleNext = () => {
    slideOurProductRef.current.swiper.slideNext();
  };
  return (
    <>
      <HeaderContainer
        title="Explore Our Products"
        className="flex justify-between"
      >
        <SwiperNavButtons funcNext={handleNext} funcPrev={handlePrev} />
      </HeaderContainer>
      <SwiperContent
        modules={[Grid, Navigation]}
        grid={{
          rows: 2,
        }}
        spaceBetween={10}
        slidesPerview={4}
        ref={slideOurProductRef}
        className="flex"
      >
        {ProductData.map((pro) => {
          return (
            <SwiperSlide key={pro.id}>
              <div className="max-w-[270px] h-[350px] hover:bg-black/5 cursor-pointer rounded">
                <div className="h-[250px] relative flex items-center justify-center rounded bg-gray-900/10">
                  <div className="absolute top-2 right-3">
                    <button className=" bg-white w-10 h-10 rounded-full hover:bg-gray-900/20">
                      <AiOutlineHeart className="text-2xl mx-auto" />
                    </button>
                  </div>
                  <img
                    src={pro.images.at(0)}
                    alt=""
                    className="object-cover w-[70%]"
                  />
                </div>
                <div className="p-2">
                  <h2 className="font-semibold">{pro.namePro}</h2>
                  <span className="text-secondary font-medium">
                    $ {pro.discountPrice}
                  </span>
                  <span className="text-black/50 font-medium line-through ml-2">
                    $ {pro.price}
                  </span>
                  <div className="flex items-center">
                    <StarRatings
                      rating={pro.rating}
                      numberOfStars={5}
                      starDimension="20px"
                      starRatedColor="#FFAD33"
                    />
                    <span className="ml-3">({pro.numRate})</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </SwiperContent>
    </>
  );
}

export default OurProduct;
