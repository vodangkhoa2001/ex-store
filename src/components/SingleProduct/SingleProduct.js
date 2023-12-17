import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import config from "~/config";
function SingleProduct({ pro }) {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <div>
      <div className="lg:max-w-[270px] h-[350px] hover:bg-black/5 cursor-pointer rounded">
        <div className="h-[250px] relative flex items-center justify-center rounded bg-gray-900/10">
          <div className="absolute top-2 flex justify-between left-3 right-3">
            <span className="bg-secondary py-1 px-3 rounded text-white my-auto">
              -{pro.discountPercent}%
            </span>
            <button
              onClick={handleLike}
              className=" bg-white w-10 h-10 rounded-full hover:bg-gray-900/20 z-0"
            >
              {liked ? (
                <AiFillHeart className="text-2xl mx-auto fill-red-400" />
              ) : (
                <AiOutlineHeart className="text-2xl mx-auto" />
              )}
            </button>
          </div>
          <Link to={config.routes.product_detail} state={pro}>
            <img
              src={pro.images.at(0)}
              alt=""
              className="object-cover w-[70%]"
            />
          </Link>
        </div>
        <Link to={config.routes.product_detail} state={pro} className="p-2">
          <h2 className="font-semibold sm:text-lg truncate whitespace-nowrap">
            {pro.namePro}
          </h2>
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
              starDimension="10px"
              starRatedColor="#FFAD33"
            />
            <span className="max-sm:absolute max-sm:right-2 ml-3 ">
              ({pro.numRate})
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SingleProduct;
