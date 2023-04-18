import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import config from "~/config";

function CommingSoon() {
  return (
    <div className="w-[400px] mx-auto">
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl text-center mt-[200px] font-semibold">
          Comming Soon
        </h1>
        <Link
          to={config.routes.home}
          className="text-secondary bg-red-50 mt-5 hover:underline hover:font-medium text-2xl mx-[130px] flex justify-center items-center"
          tabIndex={-1}
        >
          <span className="mr-2">
            <AiOutlineArrowLeft />
          </span>
          <span>Go home</span>
        </Link>
      </div>
    </div>
  );
}

export default CommingSoon;
