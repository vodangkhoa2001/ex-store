import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import config from "~/config";
function SignUp() {
  return (
    <>
      <div className=" w-[400px] mx-auto translate-y-[45%] ">
        <h2 className="text-4xl font-semibold mb-4">Create an account</h2>
        <h3 className="font-medium mb-10">Enter your details below</h3>
        <div className="flex flex-col">
          <input
            placeholder="Name"
            className="outline-none mb-8  border-b-2 border-b-gray-400 hover:border-b-black"
          />
          <input
            placeholder="Email or Phone Number"
            className="outline-none mb-8  border-b-2 border-b-gray-400 hover:border-b-black"
          />
          <input
            placeholder="Password"
            className="outline-none mb-8  border-b-2 border-b-gray-400 hover:border-b-black"
          />
        </div>
        <div>
          <button className="bg-secondary hover:btn-second-hover text-white rounded w-full py-3 mb-3">
            Create Account
          </button>
          <button className="flex items-center justify-center w-full border rounded py-3">
            <span>
              <FcGoogle className="mr-2 text-xl" />
            </span>
            <span>Sign up with Google</span>
          </button>
          <div className="flex justify-center mt-5 re">
            <span>Already have account?</span>
            <Link
              to={config.routes.login}
              className="ml-4 relative hover_bar_underline_black hover:font-medium"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
