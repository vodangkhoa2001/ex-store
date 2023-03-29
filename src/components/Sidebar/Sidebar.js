import { Link } from "react-router-dom";
import config from "~/config";
import { BsChevronRight, BsApple } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import images from "~/assets/images";
const categoris = [
  {
    title: "Woman’s Fashion",
    icon: <BsChevronRight />,
  },
  {
    title: "Men’s Fashion",
    icon: <BsChevronRight />,
  },
  {
    title: "Electronics",
    icon: null,
  },
  {
    title: "Home & Lifestyle",
    icon: null,
  },
  {
    title: "Medicine",
    icon: null,
  },
  {
    title: "Sports & Outdoor",
    icon: null,
  },
  {
    title: "Baby’s & Toys",
    icon: null,
  },
  {
    title: "Groceries & Pets",
    icon: null,
  },
  {
    title: "Health & Beauty",
    icon: null,
  },
];

function SideBar() {
  return (
    <div className="hidden lg:px-8 lg:flex mx-auto  max-w-7xl items-center justify-between divide-x divide-gray-700 ">
      <div className="w-[220px] ">
        <ul className="relative leading-9">
          {categoris.map((cate, index) => {
            return (
              <li key={index}>
                <Link
                  to={config.routes.home}
                  className="flex items-center w-full hover:bg-gray-50"
                >
                  <span>{cate.title}</span>
                  {cate.icon !== null ? (
                    <span className="absolute right-2">{cate.icon}</span>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="ml-7 flex-1 h-[372px] pt-7 ">
        <div className="  pl-10 h-[324px] overflow-hidden">
          <div className="bg-black h-full relative">
            <div className="flex items-center absolute top-[60px] left-[60px] text-white select-none">
              <BsApple className="w-[50px] h-[50px] " />
              <span className="ml-8 font-poppins">iPhone 14 Series</span>
            </div>
            <div className="absolute w-[310px] text-white left-[60px] top-[130px]">
              <h2 className="text-6xl font-semibold">Up to 10% off Voucher</h2>
            </div>
            <div className="flex items-center absolute w-[120px] text-gray-300 left-[60px] top-[270px] hover:text-white hover:translate-x-1 ease-in duration-200 cursor-pointer">
              <button className="text-base font-medium after:w-[70px] after:h-[1px] after:bg-white after:absolute after:-bottom-1 after:left-0">
                Shop Now
              </button>
              <AiOutlineArrowRight className="ml-3 text-2xl" />
            </div>
            <img
              src={images.iphone_14_banner}
              alt=""
              className=" absolute w-[496px] h-[352px] top-4 right-0 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
