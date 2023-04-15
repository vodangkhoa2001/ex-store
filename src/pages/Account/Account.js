import { Tab } from "@headlessui/react";
import MyProfile from "~/components/Account/MyProfile";

function Account() {
  return (
    <div className="relative">
      <h2 className="absolute -top-[60px] right-0">
        Hello, <span className="text-secondary">Khoa</span>
      </h2>
      <div>
        <div>
          <Tab.Group
            defaultIndex={0}
            as="div"
            className="flex justify-between my-4"
          >
            <div>
              <Tab.List className="leading-9">
                <h3 className="text-lg font-semibold">Manager My Account</h3>
                <Tab className="block focus-visible:outline-none ml-8">
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <p
                      className={selected ? "text-secondary" : "text-gray-500"}
                    >
                      My Profile
                    </p>
                  )}
                </Tab>
                <Tab className="block focus-visible:outline-none ml-8">
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <p
                      className={selected ? "text-secondary" : "text-gray-500"}
                    >
                      Address Book
                    </p>
                  )}
                </Tab>
                <Tab className="focus-visible:outline-none ml-8">
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <p
                      className={selected ? "text-secondary" : "text-gray-500"}
                    >
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
                    <p
                      className={selected ? "text-secondary" : "text-gray-500"}
                    >
                      My Return
                    </p>
                  )}
                </Tab>
                <Tab className="block focus-visible:outline-none ml-8">
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <p
                      className={selected ? "text-secondary" : "text-gray-500"}
                    >
                      My Cancellation
                    </p>
                  )}
                </Tab>
              </Tab.List>
            </div>
            <Tab.Panels className="w-[75%]">
              <Tab.Panel>
                <MyProfile />
              </Tab.Panel>

              {/* Displays this panel by default */}
              <Tab.Panel>Content 2</Tab.Panel>

              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

export default Account;
