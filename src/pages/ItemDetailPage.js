import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { NotificationsContext } from "../contexts/NotificationsContext";

const ItemDetailPage = () => {
  const { addToCart } = useContext(CartContext);
  const { notification, setNotification } = useContext(NotificationsContext);
  let { id } = useParams();
  let [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    console.log(window);
    addToCart(item, quantity);
    setQuantity(1);
    setNotification("Item added to cart");
    setTimeout(() => {
      setNotification("");
    }, 1000);
  };

  useEffect(() => {
    let getItem = async () => {
      let response = await fetch(`/api/product-list/${id}`);
      let data = await response.json();
      setItem(data);
      console.log(data);
    };
    getItem();
  }, [id]);

  return (
    <div className="grid">
      <div className="single-item-container">
        <img src={item?.image} alt="product"></img>
        <div className="item-np-card">
          <div className="flex">
            <h3>{item?.name}</h3>
            <h2>${item?.price}</h2>
          </div>
          <p>Lorem is a meaningless text used by programmers to fill space.</p>
          <label>Quantity</label>
          <input
            id="quantity-input"
            type={"number"}
            min={"1"}
            value={quantity}
            onChange={handleQuantityChange}
          ></input>
        </div>
        <button onClick={handleAddToCart} className="add-cart-btn-bg">
          Add To Cart
        </button>
      </div>
      <div className="notification">{notification}</div>
    </div>
  );
};

export default ItemDetailPage;
