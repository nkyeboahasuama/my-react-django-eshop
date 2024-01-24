import React, { useEffect, useContext } from "react";
import ItemList from "../components/ItemList";
import { SearchContext } from "../contexts/SearchContext";
// import { useAuth } from "../contexts/AuthContext";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

const ItemsListPage = () => {
  const { items } = useContext(SearchContext);

  console.log(items);
  return (
    <div className=" w-full h-[100dvh] overflow-y-auto bg-amber-100">
      <NavBar />
      <div className=" w-full flex justify-center flex-wrap gap-5 py-5">
        {!items.length && <Loader />}
        {items.map((item, index) => (
          <ItemList key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
//  hoisting, currying, closure, event-loop, promises, IIFs, async programing with async await, trycatch, try catch finally.
export default ItemsListPage;
