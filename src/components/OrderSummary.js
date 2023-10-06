import React from "react";

const OrderSummary = ({ cartItems, totalPrice }) => {
  return (
    <div>
      <div className=" bg-[#9b7e4b] ">
        <div className="px-3 py-2">
          <h3 className=" text-xl pb-2 text-left">Order Summary</h3>
          {cartItems.map((item) => (
            <p className=" text-right" key={item.product.id}>
              {item.product.name} - {item.product.price} (*{item.quantity})
            </p>
          ))}
        </div>
        <h3 className=" bg-[#4b380f] p-3 w-full text-right font-semibold">
          Total(USD): ${totalPrice}
        </h3>
      </div>
    </div>
  );
};

export default OrderSummary;
