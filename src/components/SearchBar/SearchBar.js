import React, { useState } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = ({ onInputChange }) => {
  const [searchText, setSearchText] = useState("");

  const onSearchTextChangeHandler = (event) => {
    const val = event.target.value;
    onInputChange(val);
    setSearchText(val);
    // console.log(val);
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
