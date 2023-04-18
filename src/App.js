import { BrowserRouter, Routes, Route} from "react-router-dom";
import React, { useState, useEffect } from 'react';



import './App.css';
import Header from './components/Header'
import ItemsListPage from './pages/ItemsListPage'
import ItemDetailPage from "./pages/ItemDetailPage";
import NavBar from "./components/NavBar";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryDetailPage from "./pages/CategoryDetailPage";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartUpdated, setCartUpdated] = useState(false);

    useEffect(() => {
        // Retrieve the cart items from local storage and update state
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);

        let price = storedCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalPrice(price);
      }, []);
    

      const addToCart = (item, quantity) => {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const index = cartItems.findIndex(cartItem => cartItem.id === item.id);
        if (index !== -1) {
          cartItems[index] = { ...item, quantity: cartItems[index].quantity + quantity };
        } else {
          cartItems.push({ ...item, quantity });
        } 
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log(cartItems);
        // If props is defined, call setCartUpdated
        if (setCartUpdated) {
          setCartUpdated(true);
        }
        setCartItems(cartItems)

        let price = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalPrice(price);

        return cartItems;
        
      };

      const handleRemove = (item) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));

        let price = newCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalPrice(price);
      };

      const handleUpdateQuantity = (item, newQuantity) => {
        const newCartItems = cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: newQuantity };
          } else {
            return cartItem;
          }
        });
        setCartItems(newCartItems);
        console.log(cartItems)
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));

        let price = newCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalPrice(price);
      };
      

  
  return (
    <div className="App"> 
      
      
      <BrowserRouter>
        <NavBar />
        <Header cartItems={cartItems}/>
        <Routes>
          <Route path="/" exact element={<ItemsListPage />} />

          <Route path="/categories/" element={<CategoriesPage />} />
          
          <Route path="/item/:id" element={<ItemDetailPage setCartUpdated={setCartUpdated} addToCart={addToCart}/>} />

          <Route path="/category/:id" element={<CategoryDetailPage />} />
          
          <Route path="/cart/" element={<Cart onRemove={handleRemove} onUpdateQuantity={handleUpdateQuantity} totalPrice={totalPrice} cartItems={cartItems} cartUpdated={cartUpdated}/>} />

          <Route path="/checkout/" element={<Checkout cartItems={cartItems} totalPrice={totalPrice}/>} />

          <Route path="/login/" element={<Login/>} />

          <Route path="/signup/" element={<SignUp/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
  </div>
    
  );
}

export default App;
