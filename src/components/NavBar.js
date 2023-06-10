import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { VscAccount } from "react-icons/vsc";
import { BsCart } from "react-icons/bs";
import Search from "./Search";

const NavBar = () => {
  let token = localStorage.getItem("token");
  const { cartItems } = useContext(CartContext);
  let cartItemCount = cartItems.length;

  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive && "#0ceb00",
    };
  };

  return (
    <div className="nav-flex">
      <div className="nav-container">
        <NavLink style={navStyle} className="logo" to="/">
          Eshop
        </NavLink>
        <div className="nav-links">
          <Search />

          <ul>
            <li>
              <NavLink style={navStyle} className="cat-link" to="/shop/">
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink style={navStyle} className="cat-link" to="/categories/">
                Categories
              </NavLink>
            </li>

            <li>
              <NavLink style={navStyle} className="cat-link" to="/orders/">
                Orders
              </NavLink>
            </li>

            <li>
              <NavLink style={navStyle} className="cat-link flex" to="/cart/">
                <BsCart />
                {cartItemCount > 0 && (
                  <div className="badge"> {cartItemCount} </div>
                )}
              </NavLink>
            </li>
          </ul>

          <div>
            {token ? (
              <NavLink className="flex" to="/login/">
                <button className="login-btn ">
                  Logout <VscAccount />
                </button>
              </NavLink>
            ) : (
              <NavLink className="flex" to="/login/">
                <button className="login-btn ">
                  Login <VscAccount />
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
