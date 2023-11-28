import { Tab } from "@headlessui/react";
import MyProfile from "~/components/Account/MyProfile";
import SideBar from "~/components/Account/Sidebar";
import { auth } from "~/config/firebase";
function Account() {
  return (
    <div className="relative">
      <h2 className="absolute -top-[60px] right-0">
        Hello,{" "}
        <span className="text-secondary">{auth.currentUser.displayName}</span>
      </h2>
      <div>
        <div>
          <Tab.Group
            defaultIndex={0}
            as="div"
            className="flex justify-between my-4"
          >
            <div>
              <SideBar />
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
