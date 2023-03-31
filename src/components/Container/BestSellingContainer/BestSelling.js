import SwiperNavButtons from "~/components/SwiperNavButtons";
import { HeaderContainer } from "../Header";
import { ContentContainer } from "../SwiperContent";

function BestSelling() {
  return (
    <>
      <HeaderContainer
        title="Best Selling Products"
        className="flex justify-between"
      >
        <SwiperNavButtons button btnTitle="View All" />
      </HeaderContainer>
      <ContentContainer className="mt-10 flex mb-[70px]"></ContentContainer>
    </>
  );
}

export default BestSelling;
