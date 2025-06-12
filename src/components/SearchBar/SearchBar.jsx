import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className={styles.searchBarWrapper}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="🔍 Search tasks..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
