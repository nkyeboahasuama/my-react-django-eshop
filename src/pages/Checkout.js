import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";
import NavBar from "../components/NavBar";
import OrderForm from "../components/OrderForm";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  let token = localStorage.getItem("token");

  return (
    <div className=" h-[100dvh] overflow-auto">
      <div className="flex flex-col">
        <NavBar />
        <h2 className=" text-[#342a28] text-2xl font-bold py-5">
          Checkout Form
        </h2>
      </div>

      <div className="px-5 pb-5 w-full">
        <OrderSummary cartItems={cartItems} totalPrice={totalPrice} />
        <OrderForm />
      </div>
      {/* </div> */}
    </div>
  );
};
export default Checkout;
