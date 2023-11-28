import { Link } from "react-router-dom";
import config from "~/config";
import { BsChevronRight } from "react-icons/bs";
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
    <div className="flex mx-auto lg:max-w-7xl w-screen items-center justify-between divide-x divide-gray-700 ">
      <div className=" hidden lg:block lg:w-[220px]">
        <ul className="relative lg:leading-9">
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

      <div className="lg:ml-7 flex-1 lg:h-[372px]  lg:pt-7 relative">
        <img
          src={images.iphone_14_banner}
          alt=""
          className="lg:absolute lg:h-[352px] sm:p-4 w-full lg:w-[95%] lg:top-5 right-0 lg:left-[50px] object-cover "
        />
        <div className="hidden lg:flex items-center z-10 absolute w-[120px] text-gray-300 left-[120px] top-[290px]  hover:translate-x-1 ease-in duration-200 cursor-pointer">
          <button className="text-base font-medium hover_bar_underline_white">
            Shop Now
          </button>
          <AiOutlineArrowRight className="ml-3 text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
