import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
// Icon
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BsCart3, BsHeart } from "react-icons/bs";
import { TfiSearch } from "react-icons/tfi";

import config from "~/config";
import MenuAccount from "./Menu";
import { FaUserCircle } from "react-icons/fa";
import { auth } from "~/config/firebase";

function Header() {
  // Sign out user

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentAccount = auth.currentUser;
  console.log(currentAccount);
  return (
    <header className="bg-white border-b-[1px] border-solid border-gray-900/30  fixed z-50 left-0 right-0">
      <nav
        className="flex items-center justify-between mx-auto py-3 max-w-7xl"
        aria-label="Global"
      >
        <div className="flex lg:flex cursor-pointer ">
          <Link to={config.routes.home} className="p-1.5">
            <span className="text-4xl font-semibold">Ex</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiBars3 className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12 font-semibold">
          <NavLink
            to={config.routes.home}
            className=" leading-6 text-black relative hover:opacity-70"
          >
            Home
          </NavLink>
          <NavLink
            to={config.routes.contact}
            className={`${({ isActive }) =>
              isActive
                ? "active"
                : "inactive"} leading-6 text-black relative hover:opacity-70 focus-within:bar_underline_black`}
          >
            <span className="hover_bar_underline_black">Contact</span>
          </NavLink>
          <NavLink
            to={config.routes.about}
            className=" leading-6 text-black relative hover:opacity-70 focus-within:bar_underline_black"
          >
            <span className="hover_bar_underline_black">About</span>
          </NavLink>
          {currentAccount === null && (
            <NavLink
              to={config.routes.sign_up}
              className=" leading-6 text-black relative hover:opacity-70 "
            >
              <span className="hover_bar_underline_black">Sign Up</span>
            </NavLink>
          )}
        </Popover.Group>
        <Popover.Group className="hidden lg:flex lg:items-center lg:justify-between lg:gap-x-6 lg:w-4/12">
          <div className="flex flex-1 items-center bg-slate-400/10 rounded">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="text-base w-full bg-transparent pl-2 py-2.5 outline-none selection:bg-gray-700/10"
            />
            <TfiSearch className=" w-10 h-11 px-2 rounded-tr rounded-br caret-gray-900/10  cursor-pointer text-gray-900/30 hover:text-gray-700 " />
          </div>
          <BsHeart className="cursor-pointer w-10 h-11 p-2 hover:text-gray-900/30" />
          <Link to={config.routes.cart}>
            <BsCart3 className="cursor-pointer w-10 h-11 p-2 hover:text-gray-900/30" />
          </Link>
          {currentAccount !== null ? (
            <MenuAccount>
              <FaUserCircle className="relative cursor-pointer w-10 h-11 p-2 hover:text-gray-900/30" />
            </MenuAccount>
          ) : null}
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10">
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <h4 className="text-5xl font-semibold">Ex</h4>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <GrClose className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to={config.routes.home}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <span>Home</span>
                  </Link>
                  <Link
                    to={config.routes.home}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <span>Contact</span>
                  </Link>
                  <Link
                    to={config.routes.home}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <span>About</span>
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    to={config.routes.home}
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to={config.routes.home}
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
}

export default Header;
