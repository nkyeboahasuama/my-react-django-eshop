import React from "react";
import { useState, useEffect, useContext } from "react";
import Category from "../components/Category";
import NavBar from "../components/NavBar";
import { SearchContext } from "../contexts/SearchContext";

const CategoriesPage = () => {
  let [categories, setCategories] = useState([]);
  const { items } = useContext(SearchContext);

  useEffect(() => {
    const uniqueCategoriesSet = new Set();

    items.forEach((item) => {
      uniqueCategoriesSet.add({
        categoryId: item.category,
        category_name: item.category_name,
      });
    });
    console.log(uniqueCategoriesSet);
    setCategories(Array.from(uniqueCategoriesSet));
  }, []);

  return (
    <div className=" h-[100vh] overflow-y-auto">
      <NavBar />
      <div className=" flex flex-col justify-center items-center bg-wheat w-full gap-5">
        {categories?.map((category, index) => (
          <Category key={index} category={category.category_name} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
