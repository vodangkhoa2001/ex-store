import images from "~/assets/images";
import { MdStorefront, MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TbMoneybag } from "react-icons/tb";
import { ServicesContainer } from "~/components/Container/ServicesContaner";
import SwiperContent from "~/components/SwiperContent/SwiperContent";
import { Autoplay, Navigation, Pagination } from "swiper";
import { RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { StaffData } from "~/data/StaffData";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="w-[40%]">
          <h2 className="text-6xl font-semibold mb-10">Our Story</h2>
          <p className="text-justify font-medium">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
            <br />
            <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="w-[45%]">
          <img className="rounded" src={images.about_image} alt="" />
        </div>
      </div>
      <div className="h-[230px] mt-[100px] flex items-center justify-between">
        <div className="w-[270px] flex flex-col items-center justify-center">
          <span>
            <MdStorefront className="text-7xl p-2 bg-black text-white rounded-full border-gray-400 border-[5px]" />
          </span>
          <span className="text-3xl font-extrabold">10.5 K</span>
          <span className="font-medium">Sallers active our site</span>
        </div>
        <div className="w-[270px] flex flex-col items-center justify-center">
          <span>
            <AiOutlineDollarCircle className="text-7xl p-2 bg-black text-white rounded-full border-gray-400 border-[5px]" />
          </span>
          <span className="text-3xl font-extrabold">33 K</span>
          <span className="font-medium">Monthly Produduct Sale</span>
        </div>
        <div className="w-[270px] flex flex-col items-center justify-center">
          <span>
            <MdOutlineShoppingBag className="text-7xl p-2 bg-black text-white rounded-full border-gray-400 border-[5px]" />
          </span>
          <span className="text-3xl font-extrabold">45.5 K</span>
          <span className="font-medium">Customer active in our site</span>
        </div>
        <div className="w-[270px] flex flex-col items-center justify-center">
          <span>
            <TbMoneybag className="text-7xl p-2 bg-black text-white rounded-full border-gray-400 border-[5px]" />
          </span>
          <span className="text-3xl font-extrabold">25 K</span>
          <span className="font-medium">Anual gross sale in our site</span>
        </div>
      </div>
      <div>
        <SwiperContent
          spaceBetween={70}
          centeredSlides={true}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {StaffData.map((staff) => {
            return (
              <SwiperSlide key={staff.id}>
                <div className="my-[100px]">
                  <div className="w-full h-[370px] flex justify-center bg-[#F5F5F5] overflow-hidden">
                    <img
                      src={staff.image}
                      alt=""
                      className="mt-4  object-cover h-full"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold mt-4">{staff.name}</h2>
                  <p className="text-sm font-medium">{staff.position}</p>

                  <div className="w-[80px] flex mt-4 text-xl">
                    <Link
                      to={staff.link_twiter}
                      className="hover:text-gray-400"
                    >
                      <RiTwitterLine />
                    </Link>
                    <Link
                      to={staff.link_ins}
                      className="mx-3 hover:text-gray-400"
                    >
                      <FiInstagram />
                    </Link>
                    <Link
                      to={staff.link_linkedin}
                      className="hover:text-gray-400"
                    >
                      <RiLinkedinLine />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </SwiperContent>
      </div>
      <div>
        <ServicesContainer />
      </div>
    </>
  );
}

export default About;
