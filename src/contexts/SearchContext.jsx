import React from "react";
import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [items, setItems] = useState([]);
  return (
    <SearchContext.Provider value={{ items, setItems }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
