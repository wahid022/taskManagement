import React from "react";
import styles from "./FilterButtons.module.css";

const FilterButtons = ({ currentFilter, onFilterChange }) => (
  <div className={styles.filters}>
    <button
      className={`${styles.btn} ${styles.all} ${
        currentFilter === "all" ? styles.active : ""
      }`}
      onClick={() => onFilterChange("all")}
    >
      📋 All
    </button>
    <button
      className={`${styles.btn} ${styles.active} ${
        currentFilter === "pending" ? styles.active : ""
      }`}
      onClick={() => onFilterChange("pending")}
    >
      🕒 Active
    </button>
    <button
      className={`${styles.btn} ${styles.completed} ${
        currentFilter === "completed" ? styles.active : ""
      }`}
      onClick={() => onFilterChange("completed")}
    >
      ✅ Completed
    </button>
  </div>
);

export default FilterButtons;
