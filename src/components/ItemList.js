import React from "react";
import { Link } from "react-router-dom";
import { CiNoWaitingSign } from "react-icons/ci";

const ItemList = ({ item }) => {
  return (
    <div className=" max-md:h-2/5 max-md:w-2/5 max-2xl:h-[300px] max-2xl:w-[300px] ">
      {/* <div className=" "> */}
      <Link className="" to={`/item/${item.id}`}>
        <div className="flex items-center justify-center bg-slate-600 w-full pt-2 rounded-t-lg">
          <img
            className=" w-3/4 "
            key={item.id}
            src={`${item.image}`}
            alt={item.name}
          />
          {/* <CiNoWaitingSign /> */}
        </div>
        <div className="flex justify-around items-center w-full h-14 bg-[#9b7b43dc] rounded-b-lg font-semibold">
          <h3 className=" break-words w-1/2">{item.name}</h3>
          <h3 className=" w-1/2">${item.price}</h3>
        </div>
        {/* <div className="w-full"> */}
        {/* </div> */}
        {/* </div> */}{" "}
      </Link>
    </div>
  );
};

export default ItemList;
