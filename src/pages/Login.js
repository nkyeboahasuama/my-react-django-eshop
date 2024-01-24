import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const logout = auth.handleLogout();

  let token = localStorage.getItem("token");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        auth.handleLogin(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);

        // window.location.reload();
      } else if (response.status === 401) {
        const data = await response.json();
        alert(data.error);
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      {token ? (
        <div className="logout-container">
          <p className="logout">
            Welcome {localStorage.getItem("username")}, you are logged in!
          </p>
          <button onClick={() => auth.handleLogout()}>Logout</button>
        </div>
      ) : (
        // show login form if token is not present
        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(event) =>
                setUsername(
                  event.target.value.charAt(0).toUpperCase() +
                    event.target.value.slice(1)
                )
              }
            />

            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <button type="submit">Login</button>

            <Link to="/signup/">
              <p className="black-color">Don't have an account yet? Sign up</p>
            </Link>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
