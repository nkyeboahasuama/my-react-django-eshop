import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ItemsListPage from "./pages/ItemsListPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import NavBar from "./components/NavBar";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryDetailPage from "./pages/CategoryDetailPage";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AuthContextProvider from "./contexts/AuthContext";
import CartContextProvider from "./contexts/CartContext";
import NotificationsContextProvider from "./contexts/NotificationsContext";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import SearchContextProvider from "./contexts/SearchContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NotificationsContextProvider>
          <SearchContextProvider>
            <AuthContextProvider>
              <CartContextProvider>
                <NavBar />
                <Routes>
                  <Route path="/" exact element={<Home />} />

                  <Route path="/shop/" element={<ItemsListPage />} />

                  <Route path="/categories/" element={<CategoriesPage />} />

                  <Route
                    path="/category/:id"
                    element={<CategoryDetailPage />}
                  />

                  <Route path="/item/:id" element={<ItemDetailPage />} />

                  <Route path="/cart/" element={<Cart />} />

                  <Route path="/checkout/" element={<Checkout />} />

                  <Route path="/login/" element={<Login />} />

                  <Route path="/signup/" element={<SignUp />} />

                  <Route path="/orders/" element={<Orders />} />
                </Routes>
              </CartContextProvider>
            </AuthContextProvider>
          </SearchContextProvider>
        </NotificationsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
