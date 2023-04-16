import SwiperNavButtons from "~/components/SwiperNavButtons";
import { HeaderContainer } from "../Header";
import { ContentContainer } from "~/components/SwiperContent";
import { ProductData } from "~/data/ProductData";
import { SwiperSlide } from "swiper/react";
import { AiOutlineHeart } from "react-icons/ai";
import StarRatings from "react-star-ratings";
import { useRef } from "react";
import { Navigation } from "swiper";

function BestSelling() {
  const slideSellingRef = useRef();
  const handlePrev = () => {
    slideSellingRef.current.swiper.slidePrev();
  };
  const handleNext = () => {
    slideSellingRef.current.swiper.slideNext();
  };
  return (
    <div className="relative">
      <HeaderContainer
        title="Best Selling Products"
        className="flex justify-between"
      >
        <SwiperNavButtons button>
          <button className="px-6 py-3 text-white bg-secondary rounded font-medium hover:btn-second-hover">
            View All
          </button>
        </SwiperNavButtons>
      </HeaderContainer>
      <ContentContainer
        spaceBetween={50}
        slidesPerView={4}
        className="mt-10 flex mb-[70px] px-[60px]"
        ref={slideSellingRef}
      >
        {ProductData.map((pro) => {
          return (
            pro.discount || (
              <SwiperSlide key={pro.id}>
                <div className="max-w-[270px] h-[350px] ">
                  <div className="h-[250px] relative flex items-center justify-center rounded bg-gray-900/10">
                    <div className="absolute top-2 flex justify-end left-3 right-3">
                      <button className=" bg-white w-10 h-10 rounded-full hover:bg-gray-900/20">
                        <AiOutlineHeart className="text-2xl mx-auto" />
                      </button>
                    </div>
                    <img src={pro.image} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold">{pro.namePro}</h2>
                    <span className="text-secondary font-medium">
                      $ {pro.discountPrice}
                    </span>
                    <span className="text-black/50 font-medium line-through ml-2">
                      $ {pro.price}
                    </span>
                    <div className="flex items-center">
                      <StarRatings
                        modules={[Navigation]}
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
            )
          );
        })}
      </ContentContainer>
      <div className="absolute w-full top-[50%]">
        <SwiperNavButtons funcPrev={handlePrev} funcNext={handleNext} />
      </div>
    </div>
  );
}

export default BestSelling;
