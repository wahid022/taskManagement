import React from 'react';
import styles from './FilterButtons.module.css';

const FilterButtons = () => (
  <div className={styles.filters}>
    <button>All</button>
    <button>Active</button>
    <button>Completed</button>
  </div>
);

export default FilterButtons;
