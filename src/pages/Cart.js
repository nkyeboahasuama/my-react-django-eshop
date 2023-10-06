import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { NotificationsContext } from "../contexts/NotificationsContext";
import NavBar from "../components/NavBar";
import { RxUpdate } from "react-icons/rx";

const Cart = () => {
  const { totalPrice, cartItems } = useContext(CartContext);
  const { notification, setNotification } = useContext(NotificationsContext);

  const handleCartUpdate = () => {
    const username = localStorage.getItem("username");
    if (username) {
      const cartItemsKey = `cartItems_${username}`;
      localStorage.setItem(cartItemsKey, JSON.stringify(cartItems));
    } else {
      console.log("User token not found");
    }
    setNotification("Cart updated");

    setTimeout(() => {
      setNotification("");
    }, 1000);
  };

  return (
    <div className=" bg-wheat h-[100dvh] overflow-y-auto">
      <NavBar />
      <h2 className=" text-[#342a28] text-2xl font-bold py-5">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="black-color">Cart is empty</p>
      ) : (
        <div>
          <div className=" px-3">
            {cartItems.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>

          <div className="">
            <p className="bg-[#342a28] p-5 my-5 absolute bottom-0">
              ${totalPrice}
            </p>

            {/*Update this section. Let the Checkout button handle the handleCartUpdate function*/}

            <Link to={"/checkout/"}>
              <button className=" bg-[#342a28] p-3 ">Checkout</button>
            </Link>
          </div>

          <button
            onClick={handleCartUpdate}
            className="bg-[#342a28] rounded-full text-white p-2 m-5"
          >
            <RxUpdate />
          </button>
          <p className="notification">{notification}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
