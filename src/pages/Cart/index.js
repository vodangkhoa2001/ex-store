import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { CartData } from "~/data/CartData";
function Cart() {
  // const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    setQuantity(quantity - 1);
  };
  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <>
      <table className="table-fixed w-full ">
        <thead className="shadow-lg shadow-gray-300 h-[60px]">
          <tr className="flex justify-between items-center h-[60px] w-[80rem] px-10">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>

        <tbody className="mt-[30px]">
          {CartData.map((pro) => {
            return (
              <tr key={pro.id} className="shadow-lg shadow-gray-300 h-[80px]">
                <td>
                  <div className="flex justify-start items-center ml-10">
                    <img
                      src={pro.images.at(0)}
                      alt={pro.name}
                      className="w-[60px] mr-4"
                    />
                    <span>{pro.namePro}</span>
                  </div>
                </td>
                <td>
                  <p className="ml-[100px]">${pro.price}</p>
                </td>
                <td>
                  <div className="inline-flex ml-[150px] border rounded-lg">
                    <input
                      type="number"
                      value={pro.quantity}
                      onChange={handleChangeQuantity}
                      className=" w-10 text-center rounded-lg"
                    />
                    <div className="flex flex-col">
                      <button
                        onClick={handleIncrease}
                        className="w-5 text-xl hover:bg-gray-100 hover:text-gray-500 rounded-tr-lg"
                      >
                        <FiChevronUp />
                      </button>
                      <button
                        onClick={handleDecrease}
                        className="w-5 text-xl hover:bg-gray-100 hover:text-gray-500 rounded-br-lg"
                      >
                        <FiChevronDown />
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="ml-[215px]">${pro.price * pro.quantity}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="flex justify-between w-[80rem] mt-[30px]">
              <button className="px-10 py-5 bg-white border rounded-lg">
                Return To Shop
              </button>
              <button className="px-10 py-5 bg-white border rounded-lg">
                Update Cart
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="mt-[60px] flex  justify-between">
        <div>
          <input
            type="text"
            placeholder="Coupon Code"
            className="border rounded px-6 py-3 mr-10"
          />
          <button className="px-10 py-3 bg-secondary text-white rounded hover:btn-second-hover">
            Apply Coupon
          </button>
        </div>
        <div className="border border-gray-500 rounded w-[340px] p-5">
          <h2 className="text-2xl font-semibold ">Cart Total</h2>
          <div className="leading-10 mt-4">
            <div className="flex justify-between ">
              <p>Subtotal:</p>
              <p>$5900</p>
            </div>
            <div className="flex justify-between ">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between ">
              <p>Total</p>
              <p>$5900</p>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <button className="px-10 py-2 text-white rounded bg-secondary hover:btn-second-hover">
              Process to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
