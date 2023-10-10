import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const OrderForm = () => {
  const { setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const createOrder = async () => {
    setCartItems([]);
    navigate("/success/");
    // try {
    //   const response = await fetch("/api/orders/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Token ${token}`,
    //     },
    //     body: JSON.stringify({ cartItems }),
    //   });
    //   console.log(cartItems);
    //   if (!response.ok) {
    //     const data = await response.json();
    //     throw new Error(data.error);
    //   }
    //   const data = await response.json();
    //   console.log("Order created:", data);
    // } catch (error) {
    //   console.error(error);
    // }
  };
  return (
    <div className=" w-full bg-[#9b7e4b] h-fit rounded-sm my-5 px-3">
      <h3 className=" text-2xl pt-2 font-semibold">Shipping Information</h3>

      <div className="py-5">
        <div
          className="flex flex-col w-full items-start
         justify-center"
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="w-full px-2" />
        </div>

        <div
          className="flex flex-col w-full items-start
         justify-center"
        >
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full px-2"
          />
        </div>

        <div className="flex justify-between">
          <div
            className="flex flex-col w-1/2 items-start
         justify-center"
          >
            <label htmlFor="city">Country:</label>
            <input
              className="w-4/5 px-2"
              type="text"
              id="country"
              name="city"
            />
          </div>

          <div
            className="flex flex-col w-1/2 items-start
         justify-center"
          >
            <label htmlFor="zip">Zip</label>
            <input
              className="w-4/5 px-2"
              maxLength={6}
              type="text"
              id="zip"
              name="zip"
              placeholder="Zip Code"
            />
          </div>
        </div>
      </div>
      <hr />

      <form className="">
        <h3 className="text-2xl pt-2 font-semibold">Payment Method</h3>
        <div className=" flex flex-col items-start py-5">
          <label className="py-1">
            <input type="radio" name="paymentMethod" value="debitCard" />
            Debit Card
          </label>

          <label className="py-1">
            <input type="radio" name="paymentMethod" value="cashOnDelivery" />
            Cash on Delivery
          </label>
        </div>
      </form>
      <hr />

      <button
        className="bg-buttonBrown font-semibold w-full h-14 my-3"
        onClick={createOrder}
      >
        Continue with payment
      </button>
    </div>
  );
};

export default OrderForm;
