import React, { useContext } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [newUser, setNewUser] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [user, setUser] = useState({});
  let token = localStorage.getItem("token");

  const handleLogin = async (event, data) => {
    console.log(data);
    event.preventDefault();
    setUser(data);
    console.log(user);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        // window.location.reload();
        throw new Error("Could not log out user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const userRegisteration = async (event) => {
    event.preventDefault();
    console.log("Register");
    try {
      const response = await fetch("/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newUser, newPass, newEmail }),
      });
      if (response.ok) {
        console.log("Success");
        setUser({});
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let loggedInUser = localStorage.getItem("username");

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        userRegisteration,
        setNewPass,
        setNewUser,
        setNewEmail,
        newPass,
        newUser,
        newEmail,
        handleLogin,
        handleLogout,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
