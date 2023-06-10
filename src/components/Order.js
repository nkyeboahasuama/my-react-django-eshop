import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Order = ({ order, index }) => {
  const [detail, setDetail] = useState([]);
  const [open, setOpen] = useState(false);
  const { setCartItems } = useContext(CartContext);

  let showOrder = () => {
    console.log("order details", order);
    let details = order.items;
    console.log(details);
    setDetail(details);
    setOpen(true);
  };

  let editOrder = () => {
    console.log("edit order", order);
    console.log(order.items);
    setCartItems(order.items);
    if (order.id === 14) {
      console.log("same order");
    } else {
      console.log("different order");
    }
  };

  return (
    <div>
      <li key={index}>
        Order {index} - {order.formatted_date}{" "}
      </li>

      <p>Completed : {order.completed ? "True" : "False"}</p>

      {!order.completed && (
        <button onClick={editOrder}>
          <Link to={"/cart/"}>Edit</Link>
        </button>
      )}

      {open ? (
        <button
          onClick={() => {
            setDetail([]);
            setOpen(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button onClick={showOrder}>Details</button>
      )}

      <div>
        {detail.map((a) => (
          <div key={a.product.id}>
            <li>
              {a.product.name} - {a.quantity}{" "}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
