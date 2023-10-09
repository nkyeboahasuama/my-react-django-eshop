import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div className=" bg-amber-100 flex flex-col justify-center items-center h-3/4 w-full py-5">
      <div className=" text-black font-semibold h-full w-2/4 rounded-lg bg-cardBrown">
        <h3 className=" text-white font-semibold text-xl">
          {/* <Link to={`/category/${category.id}/`}>{category}</Link> */}
          {category}
        </h3>
        <p>Lorem is a meaningless text used by programmers to fill space.</p>
      </div>
    </div>
  );
};

export default Category;
