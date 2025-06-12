import React from "react";
import styles from "./FilterButtons.module.css";

const FilterButtons = () => (
  <div className={styles.filters}>
    <button className={`${styles.btn} ${styles.all}`}>All</button>
    <button className={`${styles.btn} ${styles.active}`}>Active</button>
    <button className={`${styles.btn} ${styles.completed}`}>Completed</button>
  </div>
);

export default FilterButtons;
