import { auth } from "~/config/firebase";

function MyProfile() {
  return (
    <div className="w-full col-span-3 rounded shadow-md px-8 relative py-4">
      <h2 className="text-2xl text-secondary font-medium mb-10">
        Edit Your Profile
      </h2>
      <div className="gap-10">
        <div>
          <label>Full name</label>
          <input
            value={auth.currentUser.displayName}
            type="text"
            placeholder="Full name"
            className="w-full py-3 bg-[#F5F5F5] px-3 outline-none"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            value={auth.currentUser.email}
            type="email"
            placeholder="Your Email"
            className="w-full py-3 bg-[#F5F5F5] px-3 outline-none"
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            placeholder="Address"
            className="w-full py-3 bg-[#F5F5F5] px-3 outline-none"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 mt-10">
        <label>Password Changes</label>
        <input
          type="password"
          placeholder="Current Password"
          className="w-full py-3 bg-[#F5F5F5] px-3 outline-none"
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full py-3 bg-[#F5F5F5] px-3 outline-none my-2"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full py-3 bg-[#F5F5F5] px-3 outline-none"
        />
      </div>
      <div className="w-full flex justify-end items-center">
        <button className="py-4 px-8 rounded text-black mt-10  hover:bg-gray-200 mr-5">
          Cancel
        </button>
        <button className=" bg-secondary py-4 px-8 rounded text-white mt-10  hover:btn-second-hover">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default MyProfile;
