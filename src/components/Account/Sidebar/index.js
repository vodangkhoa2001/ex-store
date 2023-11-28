import { Tab } from "@headlessui/react";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <Tab.List className="leading-9">
        <h3 className="text-lg font-semibold">Manager My Account</h3>
        <Tab className="block focus-visible:outline-none ml-8">
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <p className={selected ? "text-secondary" : "text-gray-500"}>
              My Profile
            </p>
          )}
        </Tab>
        <Tab className="block focus-visible:outline-none ml-8">
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <p className={selected ? "text-secondary" : "text-gray-500"}>
              Address Book
            </p>
          )}
        </Tab>
        <Tab className="focus-visible:outline-none ml-8">
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <p className={selected ? "text-secondary" : "text-gray-500"}>
              My Payment Options
            </p>
          )}
        </Tab>
      </Tab.List>
      <Tab.List className="leading-9">
        <h3 className="text-lg font-semibold">My Order</h3>
        <Tab className="block focus-visible:outline-none ml-8">
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <p className={selected ? "text-secondary" : "text-gray-500"}>
              My Return
            </p>
          )}
        </Tab>
        <Tab className="block focus-visible:outline-none ml-8">
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <p className={selected ? "text-secondary" : "text-gray-500"}>
              My Cancellation
            </p>
          )}
        </Tab>
      </Tab.List>
    </>
  );
};

export default Sidebar;
