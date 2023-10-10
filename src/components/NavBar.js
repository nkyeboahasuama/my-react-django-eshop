import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { VscAccount } from "react-icons/vsc";
import { BsCart } from "react-icons/bs";
import Search from "./Search";
import { GiHamburgerMenu } from "react-icons/gi";
import NavModal from "../modals/NavModal";

const NavBar = () => {
  const [showNavModal, setShowNavModal] = useState(false);
  const { cartItems } = useContext(CartContext);
  let cartItemCount = cartItems.length;

  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive && "#04f674",
    };
  };

  return (
    <div className="h-[100px] w-full bg-mainBrown">
      <div className="flex justify-between items-center w-full h-full px-5">
        <NavLink style={navStyle} className="logo max-sm:text-center" to="/">
          Eshop
        </NavLink>
        <div
          className=" cursor-pointer text-xl relative"
          onClick={() => setShowNavModal(true)}
        >
          <GiHamburgerMenu />
          {cartItemCount > 0 && (
            <div className="bg-activeGreen w-3 h-3 rounded-full text-black absolute -top-2 -right-2"></div>
          )}
        </div>

        {/* <div className="nav-links max-sm:hidden">
          <Search />

          <ul className="">
            <NavLink style={navStyle} className="cat-link" to="/shop/">
              Shop
            </NavLink>

            <NavLink style={navStyle} className="cat-link" to="/categories/">
              Categories
            </NavLink>

            <NavLink style={navStyle} className="cat-link" to="/orders/">
              Orders
            </NavLink>

            <NavLink style={navStyle} className="cat-link flex" to="/cart/">
              <BsCart />
              {cartItemCount > 0 && (
                <div className="badge"> {cartItemCount} </div>
              )}
            </NavLink>
          </ul>

          
        </div> */}
      </div>
      {showNavModal && <NavModal setShowNavModal={setShowNavModal} />}
    </div>
  );
};

export default NavBar;
