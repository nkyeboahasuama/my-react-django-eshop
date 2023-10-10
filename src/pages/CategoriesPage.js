import React from "react";
import { useState, useEffect, useContext } from "react";
import Category from "../components/Category";
import NavBar from "../components/NavBar";
import { SearchContext } from "../contexts/SearchContext";

const CategoriesPage = () => {
  let [categories, setCategories] = useState([]);
  const { items } = useContext(SearchContext);

  useEffect(() => {
    if (items && items.length > 0) {
      const uniqueCategories = items.reduce((accumulator, item) => {
        const exists = accumulator.some(
          (uniqueItem) => uniqueItem.category === item.category
        );
        if (!exists) {
          accumulator.push(item);
        }

        return accumulator;
      }, []);
      setCategories(uniqueCategories);
    }
  }, []);

  return (
    <div className=" bg-wheat overflow-y-auto">
      <NavBar />
      <div className=" flex flex-col justify-center items-center w-full gap-5">
        {categories?.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
