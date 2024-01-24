import React from "react";
import NavBar from "../components/NavBar";

const Success = () => {
  return (
    <div className="success-page h-[100dvh] ">
      <NavBar />
      <div className="success-content flex flex-col justify-center items-center gap-16 p-20">
        <h1 className=" text-2xl font-semibold">Congratulations🎉!</h1>
        <div>
          <p>We will send you a prompt to make the payemnt.</p>
          <p>We can only deliver your package after you have made payment</p>
        </div>
        <p>Thank You!</p>
      </div>
    </div>
  );
};

export default Success;
