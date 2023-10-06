import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ item }) => {
  return (
    <div className=" max-md:h-2/5 max-md:w-2/5 max-2xl:h-[300px] max-2xl:w-[300px] ">
      {/* <div className=" "> */}
      <div className="flex items-center justify-center bg-slate-600 w-full h-full pt-2 rounded-t-lg">
        <img
          className=" w-3/4 "
          key={item.id}
          src={`${item.image}`}
          alt={item.name}
        />
      </div>
      <div className="w-full h-14 bg-[#9b7b43dc] rounded-b-lg">
        <div className="flex justify-around">
          <h3>{item.name}</h3>
          <h3>${item.price}</h3>
        </div>
        {/* <div className="w-full"> */}
        <Link
          className=" bg-[#342a28]  font-semibold px-5 my-1"
          to={`/item/${item.id}`}
        >
          View
        </Link>
        {/* </div> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default ItemList;
