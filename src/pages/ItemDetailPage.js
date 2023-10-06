import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { NotificationsContext } from "../contexts/NotificationsContext";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

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
    addToCart(item, quantity);
    setQuantity(1);
    setNotification("Item added to cart");
    setTimeout(() => {
      setNotification("");
    }, 1000);
  };
  // console.log(item);

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
    <div className=" bg-wheat overflow-hidden w-full h-[100dvh] flex flex-col items-center justify-between">
      <NavBar />
      {!item ? (
        <Loader />
      ) : (
        <div className=" flex flex-col items-center justify-around max-lg:w-4/5 max-lg:h-4/5 bg-slate-800 px-5">
          <div className=" flex flex-col">
            <img src={item?.image} alt="product" className=" max-lg:w-full" />
            <div className=" ">
              <div className="flex justify-between text-xl font-bold">
                <h3>{item?.name}</h3>
                <h2>${item?.price}</h2>
              </div>
              <p className=" text-sm">
                Lorem is a meaningless text used by programmers to fill space.
              </p>
              <label>Quantity: </label>
              <input
                id="quantity-input"
                type={"number"}
                min={"1"}
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className=" w-full h-14 bg-mainGreen"
          >
            Add To Cart
          </button>
        </div>
      )}

      <div className="notification">{notification}</div>
    </div>
  );
};

export default ItemDetailPage;
