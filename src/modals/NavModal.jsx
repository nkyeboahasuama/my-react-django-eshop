import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { AiOutlineClose } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

const NavModal = ({ setShowNavModal }) => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  let token = localStorage.getItem("token");

  let cartItemCount = cartItems.length;

  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive && "#0ceb00",
    };
  };

  const navigations = [
    { text: "Shop", to: "/shop/" },
    { text: "Categories", to: "/categories/" },
    { text: "Orders", to: "/orders/" },
  ];

  const handleLoginFromModal = () => {
    navigate("/login/");
    setShowNavModal(false);
  };

  return (
    <div className="w-full h-screen bg-amber-100 absolute top-0 left-0 flex flex-col justify-between px-5">
      <div className="w-full h-3/4">
        <div className=" w-full h-20 flex justify-between border-b-2 border-gray-300 py-5">
          <NavLink
            to="/"
            onClick={() => setShowNavModal(false)}
            className="logo text-3xl"
          >
            Eshop
          </NavLink>
          <div className=" bg-black rounded-full w-8 p-1 h-8 flex items-center justify-center font-extrabold">
            <AiOutlineClose
              onClick={() => setShowNavModal(false)}
              className="text-3xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 text-xl justify-start pt-5 items-start h-full pl-3 bg-emerald-500">
          {navigations.map((navigation, idx) => (
            <NavLink
              key={idx}
              className=""
              style={navStyle}
              onClick={() => setShowNavModal(false)}
              to={navigation.to}
            >
              {navigation.text}
            </NavLink>
          ))}

          <NavLink
            style={navStyle}
            onClick={() => setShowNavModal(false)}
            className="flex items-center gap-2"
            to="/cart/"
          >
            Cart <BsCart />
            {cartItemCount > 0 && (
              <div className="bg-white rounded-full text-mainBrown w-5 h-7 p-2 font-semibold flex justify-center items-center">
                {" "}
                {cartItemCount}{" "}
              </div>
            )}
          </NavLink>
        </div>
      </div>

      <div className=" bg-black text-whitecursor-pointer w-full h-14 p-1 my-5 flex">
        <button
          className="flex items-center justify-center w-full gap-3 font-semibold"
          onClick={handleLoginFromModal}
        >
          {token ? "Logout" : "Login"}
          <VscAccount />{" "}
        </button>
      </div>
    </div>
  );
};

export default NavModal;
