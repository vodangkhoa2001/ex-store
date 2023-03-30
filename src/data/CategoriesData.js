import { SlScreenSmartphone } from "react-icons/sl";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { CiHeadphones } from "react-icons/ci";
import { RiGamepadLine } from "react-icons/ri";
import { IoShirtSharp } from "react-icons/io5";

export const Categories = [
  {
    id: 1,
    name: "Phones",
    icon: <SlScreenSmartphone />,
  },
  {
    id: 2,
    name: "Computer",
    icon: <HiOutlineComputerDesktop />,
  },
  {
    id: 3,
    name: "SmartWatch",
    icon: <BsSmartwatch />,
  },
  {
    id: 4,
    name: "Camera",
    icon: <AiOutlineCamera />,
  },
  {
    id: 5,
    name: "HeadPhones",
    icon: <CiHeadphones />,
  },
  {
    id: 6,
    name: "Gaming",
    icon: <RiGamepadLine />,
  },
  {
    id: 7,
    name: "Shirt",
    icon: <IoShirtSharp />,
  },
];
