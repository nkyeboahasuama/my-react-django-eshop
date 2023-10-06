import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { NotificationsContext } from "../contexts/NotificationsContext";
import NavBar from "../components/NavBar";
import { MdOutlineSaveAlt } from "react-icons/md";
import { CiNoWaitingSign } from "react-icons/ci";

const Cart = () => {
  const { totalPrice, cartItems } = useContext(CartContext);
  const { notification, setNotification } = useContext(NotificationsContext);
  const [updating, setUpdating] = useState(false);

  const handleCartUpdate = () => {
    const username = localStorage.getItem("username");
    if (username) {
      const cartItemsKey = `cartItems_${username}`;
      localStorage.setItem(cartItemsKey, JSON.stringify(cartItems));
    } else {
      console.log("User token not found");
    }
    // setNotification("Cart updated");
    setUpdating(true);

    setTimeout(() => {
      // setNotification("");
      setUpdating(false);
    }, 500);
  };

  return (
    <div className="  h-[100dvh] overflow-y-auto">
      <NavBar />
      <h2 className=" text-deepBrown text-2xl font-bold py-5">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className=" text-deepBrown">Cart is empty</p>
      ) : (
        <div>
          <div className=" px-5">
            {cartItems.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>

          <div className=" w-full px-5">
            <p className="bg-mainBrown text-xl p-3 my-5 absolute left-0 bottom-0 font-semibold">
              ${totalPrice}
            </p>

            {/*Update this section. Let the Checkout button handle the handleCartUpdate function*/}

            <Link to={"/checkout/"}>
              <button className=" bg-buttonBrown cursor-pointer w-full font-semibold h-14">
                Checkout
              </button>
            </Link>
          </div>

          <button
            onClick={handleCartUpdate}
            className="bg-buttonBrown rounded-full text-white p-3 m-10"
          >
            {updating ? <CiNoWaitingSign /> : <MdOutlineSaveAlt />}
          </button>
          {/* <p className="notification">{notification}</p> */}
        </div>
      )}
    </div>
  );
};

export default Cart;
