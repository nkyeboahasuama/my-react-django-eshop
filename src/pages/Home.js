import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-home-img h-[100dvh]">
      <div className="bg-home-black h-full flex flex-col justify-center items-center gap-5">
        <div className="">
          <h4>Trade-in-offer</h4>
          <h2 className="text-3xl">Super value deals</h2>
        </div>
        <h2 className=" text-mainGreen text-4xl">On all products</h2>
        <p>Save more with coupons</p>

        <div className="flex bg-mainGreen px-2 py-2 gap-2 items-center hover:bg-activeGreen cursor-pointer w-fit text-2xl rounded-lg font-bold">
          {/* <div className="">Go Shopping</div> */}

          <BsArrowRightCircle onClick={() => navigate("/shop/")} />
        </div>
      </div>
    </div>
  );
};

export default Home;
