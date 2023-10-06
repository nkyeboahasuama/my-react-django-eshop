import React, { useEffect } from "react";
import { useState } from "react";
import Order from "../components/Order";
import NavBar from "../components/NavBar";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  let token = localStorage.getItem("token");

  useEffect(() => {
    const getOrders = async () => {
      const response = await fetch("/api/orders/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
      setOrders(data);
    };
    getOrders();
  }, [token]);

  return (
    <div className=" bg-wheat w-full h-[100dvh]">
      <NavBar />
      <div className=" text-black">
        <h2 className="text-[#342a28] text-2xl font-bold py-5">Orders</h2>

        <div>
          {token
            ? orders.map((order, index) => (
                <Order key={index} index={index} order={order} />
              ))
            : "Login to make some orders"}

          {orders.length < 1 && "No orders to show"}
        </div>
      </div>
    </div>
  );
};

export default Orders;
