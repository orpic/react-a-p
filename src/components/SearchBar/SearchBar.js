import React, { useState } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const onSearchTextChangeHandler = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <div className={classes.searchBarDiv}>
        <input
          value={searchText}
          onChange={onSearchTextChangeHandler}
          className={classes.input}
          type="text"
          placeholder="Start typing to search"
        />
      </div>
    </>
  );
};

export default SearchBar;
