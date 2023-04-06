import { Menu, Transition } from "@headlessui/react";
// icons
import { FaRegTimesCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { AiOutlineStar } from "react-icons/ai";
import { FiShoppingBag, FiUser } from "react-icons/fi";
// files
import config from "~/config";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const links = [
  {
    icon: <FiUser />,
    label: "Manager My Account",
    href: "/my-account",
  },
  {
    icon: <FiShoppingBag />,
    label: "My Order",
    href: "/my-order",
  },
  {
    icon: <FaRegTimesCircle />,
    label: "My Cancellations",
    href: "/cancellations",
  },
  {
    icon: <AiOutlineStar />,
    label: "My Review",
    href: "/my-review",
  },
  {
    icon: <CiLogout />,
    label: "Log out",
    href: config.routes.login,
  },
];

function MenuAccount({ children }) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button>{children}</Menu.Button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -right-3 z-10 mt-4 bg-white w-56 rounded outline-none shadow-lg">
          {links.map((link) => {
            return (
              <Menu.Item key={link.href}>
                {({ active }) => (
                  <a
                    href={link.href}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "flex items-center px-4 py-2 text-base rounded "
                    )}
                  >
                    <span className="mr-2 text-xl">{link.icon}</span>
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MenuAccount;
