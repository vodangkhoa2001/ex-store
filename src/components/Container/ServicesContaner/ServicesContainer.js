import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiAdguard } from "react-icons/si";

function ServicesContainer() {
  return (
    <div className="flex my-[100px] lg:justify-center max-sm:flex-col text-center">
      <div>
        <div className="bg-black flex items-center rounded-[50%] w-[50px] h-[50px] mx-auto mb-2">
          <TbTruckDelivery className="mx-auto w-6 text-3xl text-white" />
        </div>
        <h3 className="font-semibold">FREE AND FAST DELIVERY</h3>
        <span>Free delivery for all orders over $140</span>
      </div>
      <div className="mx-[88px] max-sm:my-11">
        <div className="bg-black flex items-center rounded-[50%] w-[50px] h-[50px] mx-auto mb-2">
          <TfiHeadphoneAlt className="mx-auto w-6 text-3xl text-white" />
        </div>
        <h3 className="font-semibold">24/7 CUSTOMER SERVICE</h3>
        <span>Friendly 24/7 customer support</span>
      </div>
      <div>
        <div className="bg-black flex items-center rounded-[50%] w-[50px] h-[50px] mx-auto mb-2">
          <SiAdguard className="mx-auto w-6 text-3xl text-white" />
        </div>
        <h3 className="font-semibold">MONEY BACK GUARANTEE</h3>
        <span>We reurn money within 30 days</span>
      </div>
    </div>
  );
}

export default ServicesContainer;
