import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartUpdated, setCartUpdated] = useState(false);
  const [quantity, setQuantity] = useState();
  let token = localStorage.getItem("token");

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      const cartItemsKey = `cartItems_${username}`;
      const storedCartItems = JSON.parse(localStorage.getItem(cartItemsKey));
      if (storedCartItems) {
        setCartItems(storedCartItems);
      }
    }
  }, [token]);

  useEffect(() => {
    let price = cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
    let formatPrice = price.toFixed(2);
    setTotalPrice(formatPrice);
    const quantity = cartItems.map((data) => ({
      id: data.product.id,
      quantity: data.quantity,
    }));
    setQuantity(quantity);
  }, [cartItems, cartUpdated]);

  const handleIncrease = (item) => {
    const index = cartItems.findIndex((i) => i.product.id === item.product.id);
    if (index !== -1) {
      const newCartItem = [...cartItems];
      newCartItem[index].quantity += 1;
      setCartItems(newCartItem);
      setCartUpdated(!cartUpdated);
    }
  };

  const handleDecrease = (item) => {
    const index = cartItems.findIndex((i) => i.product.id === item.product.id);
    if (index !== -1) {
      const newCartItem = [...cartItems];
      newCartItem[index].quantity -= 1;
      setCartItems(newCartItem);
      setCartUpdated(!cartUpdated);
      if (newCartItem[index].quantity < 1) {
        handleRemove(item);
      }
    } else {
      const newCartItem = [
        ...cartItems,
        { product: item.product, quantity: 1 },
      ];
      setCartItems(newCartItem);
      setCartUpdated(!cartUpdated);
    }
  };

  const addToCart = (product, quantity) => {
    const index = cartItems.findIndex((c) => c.product.id === product.id);
    if (index !== -1) {
      const newCart = [...cartItems];
      newCart[index].quantity += quantity;
      setCartItems(newCart);
      setCartUpdated(true);
    } else {
      const newCartData = { product: product, quantity: quantity };
      const newCart = [...cartItems, newCartData];
      setCartItems(newCart);
      setCartUpdated(!cartUpdated);
    }
  };

  const handleRemove = (item) => {
    const newSavedItems = cartItems.filter(
      (cartItem) => cartItem.product.id !== item.product.id
    );
    setCartItems(newSavedItems);
    //Why am i saving it in the localstorage
    localStorage.setItem("cartItems", JSON.stringify(newSavedItems));
    setCartUpdated(!cartUpdated);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        addToCart,
        onRemove: handleRemove,
        handleIncrease,
        handleDecrease,
        quantity,
        setQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
