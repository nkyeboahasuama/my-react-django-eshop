import React from "react";
import { createContext, useState, useEffect } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      let response = await fetch("/api/product-list/");
      let data = await response.json();
      setItems(data);
      console.log("sss");
    };
    getItems();
  }, []);

  return (
    <SearchContext.Provider value={{ items, setItems }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
