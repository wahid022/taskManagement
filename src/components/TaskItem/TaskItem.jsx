import React from 'react';
import styles from './TaskItem.module.css';

const TaskItem = () => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <input type="checkbox" />
        <h3>Sample Task</h3>
      </div>
      <p>This is a sample description.</p>
      <button className={styles.deleteBtn}>Delete</button>
    </div>
  );
};

export default TaskItem;
