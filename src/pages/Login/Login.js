import { Link } from "react-router-dom";
import config from "~/config";
function Login() {
  return (
    <>
      <div className=" w-[400px] mx-auto translate-y-[45%] ">
        <h2 className="text-4xl font-semibold mb-4">Log in to Ex</h2>
        <h3 className="font-medium mb-10">Enter your details below</h3>
        <div className="flex flex-col">
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
          <div className="flex justify-between items-center">
            <Link
              to={config.routes.home}
              className="bg-secondary text-center hover:btn-second-hover text-white w-[145px] rounded py-3 mb-3"
            >
              Log in
            </Link>
            <Link to={config.routes.home} className="text-secondary">
              <span>Forget Password?</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
