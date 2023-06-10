import React, { useEffect, useContext } from "react";
import ItemList from "../components/ItemList";
import { SearchContext } from "../contexts/SearchContext";
import { useAuth } from "../contexts/AuthContext";

const ItemsListPage = () => {
  const { items, setItems } = useContext(SearchContext);
  const auth = useAuth();

  useEffect(() => {
    const getItems = async () => {
      let response = await fetch("/api/product-list/");
      let data = await response.json();
      setItems(data);
      console.log(data);
      console.log(auth.user);
      console.log(response);
    };
    getItems();
  }, []);

  if (!items) {
    return <p>Loading...</p>;
  }

  return (
    <div className="items-container">
      <div className="items-list">
        {items.length < 1 && "Item not available"}
        {items.map((item, index) => (
          <ItemList key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
//  hoisting, currying, closure, event-loop, promises, IIFs, async programing with async await, trycatch, try catch finally.
export default ItemsListPage;
