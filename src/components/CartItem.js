import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { AiFillDelete } from "react-icons/ai";

const CartItem = ({ item }) => {
  const { onRemove, handleIncrease, handleDecrease } = useContext(CartContext);

  return (
    <div className=" bg-cardBrown w-full rounded-md my-5">
      <div className=" flex justify-between items-center  w-full p-2">
        <Link to={`/item/${item.product.id}`} className="cursor-pointer ">
          <div className="flex flex-col justify-between  items-center h-full w-20 p-2">
            <img src={item.product.image} className="w-12 bg-deepBrown p-2" />

            <h3 className=" break-words font-bold">{item.product.name}</h3>
          </div>
        </Link>

        <div className="flex flex-col justify-center items-center gap-3">
          <AiFillDelete
            onClick={() => onRemove(item)}
            className=" text-xl cursor-pointer"
          />
          <div className=" flex items-center justify-center">
            <button
              className="bg-[#342a28] w-6 cursor-pointer"
              onClick={() => handleDecrease(item)}
            >
              -
            </button>

            <span className="bg-white font-semibold text-black px-2">
              {item.quantity}
            </span>

            <button
              className="bg-[#342a28] w-6 cursor-pointer"
              onClick={() => handleIncrease(item)}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between items-end">
          <p className="">Price: ${item.product.price}</p>

          <p className="font-semibold">
            Total: ${(item.quantity * item.product.price).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
