import React, { useState } from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const [showFeatured, setShowFeatured] = useState(false);
  return (
    <div className=" bg-amber-100 flex flex-col justify-center items-center h-[300px]  w-full py-5">
      <div className=" text-black flex flex-col justify-between items-center text-sm h-4/5 w-2/4 rounded-lg bg-cardBrown">
        {showFeatured ? (
          <>
            <div className="flex flex-col justify-center items-center  p-5">
              <img
                src={category.image}
                className="w-2/4 border-8 border-mainBrown"
              />
              <div className=" ">
                <p>{category.name} </p>
                <p>{category.price} </p>
              </div>
            </div>
            <div className=" w-full text-right p-2">
              <small
                onClick={() => setShowFeatured(false)}
                className=" italic bg-deepBrown p-1 text-xs text-white rounded-lg cursor-pointer"
              >
                Hide
              </small>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center  p-5">
              <h3 className=" text-white font-semibold text-xl">
                <Link to={`/category/${category.categoryId}/`}>
                  {category.category_name}
                </Link>
              </h3>
              <p>
                Lorem is a meaningless text used by programmers to fill space.
              </p>
            </div>
            <div className=" w-full text-right p-2">
              <small
                onClick={() => setShowFeatured(true)}
                className=" italic bg-deepBrown p-1 text-xs text-white rounded-lg cursor-pointer"
              >
                Featured
              </small>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Category;
