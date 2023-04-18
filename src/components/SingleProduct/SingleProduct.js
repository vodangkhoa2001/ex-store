import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import config from "~/config";

function SingleProduct({ pro }) {
  return (
    <Link to={config.routes.product_detail} state={pro}>
      <div className="max-w-[270px] h-[350px] hover:bg-black/5 cursor-pointer rounded">
        <div className="h-[250px] relative flex items-center justify-center rounded bg-gray-900/10">
          <div className="absolute top-2 flex justify-between left-3 right-3">
            <span className="bg-secondary py-1 px-3 rounded text-white my-auto">
              -{pro.discountPercent}%
            </span>
            <button className=" bg-white w-10 h-10 rounded-full hover:bg-gray-900/20">
              <AiOutlineHeart className="text-2xl mx-auto" />
            </button>
          </div>
          <img src={pro.images.at(0)} alt="" className="object-cover w-[70%]" />
        </div>
        <div className="p-2">
          <h2 className="font-semibold">{pro.namePro}</h2>
          <span className="text-secondary font-medium">
            $ {pro.discountPrice}
          </span>
          <span className="text-black/50 font-medium line-through ml-2">
            $ {pro.price}
          </span>
          <div className="flex items-center">
            <StarRatings
              rating={pro.rating}
              numberOfStars={5}
              starDimension="20px"
              starRatedColor="#FFAD33"
            />
            <span className="ml-3">({pro.numRate})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SingleProduct;
