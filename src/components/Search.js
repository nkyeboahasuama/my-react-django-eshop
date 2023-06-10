import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { SearchContext } from "../contexts/SearchContext";

const Search = () => {
  const { setItems } = useContext(SearchContext);

  const debounce = (cb, delay = 1000) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const ans = debounce((query) => {
    const fetchData = async () => {
      const response = await fetch(`/api/search/?query=${query}`);
      const data = await response.json();
      console.log(data);
      setItems(data);
    };
    fetchData();
  });

  const handleChange = (e) => {
    console.log("change");
    ans(e.target.value);
  };

  //   search design
  const searchBar = () => {
    console.log("search");
    let searchBar = document.querySelector("#search-bar");
    searchBar.style.display = "block";
    searchBar.focus();

    searchBar.addEventListener("blur", () => {
      searchBar.style.display = "none";
    });

    searchBar.addEventListener("focus", () => {
      searchBar.style.display = "block";
    });
  };
  return (
    <div className="input-wrapper">
      <BsSearch onClick={searchBar} className="search-icon" />

      <input
        id="search-bar"
        type="text"
        placeholder="Search Items..."
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Search;
