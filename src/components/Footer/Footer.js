import { AiOutlineSend } from "react-icons/ai";
import { Link } from "react-router-dom";
import images from "~/assets/images";
import config from "~/config";
function Footer() {
  return (
    <div className="bg-black lg:h-[440px] h-full pb-[114px] text-white max-sm:text-center">
      <div className="lg:max-w-7xl max-sm:w-screen mx-auto pt-[80px] flex lg:items-start justify-between max-sm:flex-col max-sm:items-center">
        <div className="">
          <h3 className="text-4xl font-semibold lg:mb-6 max-sm:mb-10">Ex</h3>
          <a href={config.routes.home} className="text-xl mb-6 block">
            Subscribe
          </a>
          <a href={config.routes.home}>Get 10% off your first order</a>
          <div className="flex items-center bg-black border-white border-2 rounded mt-4">
            <input
              className="px-3 py-3 outline-none bg-black "
              placeholder="Enter your email"
            />
            <button>
              <AiOutlineSend className="text-xl mr-2" />
            </button>
          </div>
        </div>
        <div className="lg:w-[20%] max-sm:w-[90%] max-sm:my-8">
          <h3 className="text-2xl font-semibold lg:mb-6 mb-4">Support</h3>
          <p className="text-base mb-6">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-base mb-6">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="max-sm:my-8">
          <h3 className="text-2xl font-semibold lg:mb-6 mb-4">Account</h3>
          <div className="flex flex-col">
            <a href={config.routes.home} className="text-base mb-6">
              My Account
            </a>
            <a href={config.routes.home} className="mb-6">
              Login / Register
            </a>
            <a href={config.routes.home} className="mb-6">
              Cart
            </a>
            <a href={config.routes.home} className="mb-6">
              Wishlist
            </a>
            <a href={config.routes.home} className="mb-6">
              Shop
            </a>
          </div>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold mb-6">Quick Link</h3>
          <div className="flex flex-col">
            <Link to={config.routes.home} className="mb-6">
              Privacy Policy
            </Link>
            <Link to={config.routes.home} className="mb-6">
              Terms Of Use
            </Link>
            <Link to={config.routes.home} className="mb-6">
              FAQ
            </Link>
            <Link to={config.routes.home}>Contact</Link>
          </div>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold mb-6">Download App</h3>
          <p className="text-gray-500 mb-6 text-[12px]">
            Save $3 with App New User Only
          </p>
          <div className="grid grid-cols-2 gap-3 h-[100px] ">
            <div className="row-span-2 w-[150px]">
              <img
                className="object-cover W-full "
                src={images.qr_code}
                alt=""
              />
            </div>
            <div>
              <a href={config.routes.home}>
                <img
                  className="object-cover w-[150px]"
                  src={images.gg_play_download}
                  alt=""
                />
              </a>
            </div>
            <div className=" ">
              <a href={config.routes.home}>
                <img
                  className="object-cover w-[150px]"
                  src={images.appstore_download}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
