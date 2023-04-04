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
    <div className="hidden lg:flex mx-auto max-w-7xl items-center justify-between divide-x divide-gray-700 ">
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

      <div className="ml-7 flex-1 h-[372px] pt-7 relative">
        <img
          src={images.iphone_14_banner}
          alt=""
          className=" absolute h-[352px] top-5 right-0 object-cover "
        />
        <div className="flex items-center z-10 absolute w-[120px] text-gray-300 left-[120px] top-[290px]  hover:translate-x-1 ease-in duration-200 cursor-pointer">
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
