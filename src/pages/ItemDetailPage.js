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
  const [isAdding, setIsAdding] = useState(false);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    addToCart(item, quantity);

    // setNotification("Item added to cart");
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
      // setNotification("");
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
    <div className=" bg-amber-100 overflow-hidden w-full h-[100dvh] flex flex-col items-center justify-between">
      <NavBar />
      {!item ? (
        <Loader />
      ) : (
        <div className=" flex flex-col items-center justify-between max-lg:w-4/5 max-lg:h-4/5 bg-cardBrown p-4 my-5">
          <div className=" flex flex-col">
            <img src={item?.image} alt="product" className=" max-lg:w-full" />
            <div className="flex flex-col justify-between gap-3 ">
              <div className="flex justify-between text-xl font-bold">
                <h3>{item?.name}</h3>
                <h2>${item?.price}</h2>
              </div>
              <div className="overflow-y-auto h-16 bg-deepBrown">
                {" "}
                <p className=" text-sm text-left px-2">
                  Lorem is a meaningless text used by programmers to fill space.
                  Lo Lorem is a meaningless text used by programmers to fill
                  space. Lo
                </p>
              </div>
              <div className="flex justify-center items-center gap-1">
                <label>Quantity: </label>
                <input
                  className="text-black font-semibold w-10 px-1 text-center"
                  type="number"
                  min={"1"}
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="font-semibold w-full h-14 mt-1 bg-buttonBrown"
          >
            {isAdding ? "Adding..." : "Add To Cart"}
          </button>
        </div>
      )}

      {/* <div className="notification">{notification}</div> */}
    </div>
  );
};

export default ItemDetailPage;
