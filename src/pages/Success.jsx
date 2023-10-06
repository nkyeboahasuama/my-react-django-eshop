import React from "react";
import NavBar from "../components/NavBar";

const Success = () => {
  return (
    <div className="success-page">
      <NavBar />
      <div className="success-content">
        <h1>Congratulations! You will recieve your package soon.</h1>
        <div>
          <p>We will send you a prompt to make the payemnt</p>
          <p>We can only deliver your package after you have made payment</p>
        </div>
        <p>Thank You!</p>
      </div>
    </div>
  );
};

export default Success;
