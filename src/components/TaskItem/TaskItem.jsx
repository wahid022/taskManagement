import React from 'react';
import styles from './TaskItem.module.css';

const TaskItem = ({ title = 'Sample Task', description = 'This is a sample description.', priority = 'medium', category = 'personal', onEdit, onDelete, onDuplicate }) => {
  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <input type="checkbox" className={styles.checkbox} />
        <span className={`${styles.priority} ${styles[priority]}`} title={`Priority: ${priority}`} />
        <h3>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.meta}>
        <span className={`${styles.tag} ${styles[category]}`}>{category}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDuplicate}>Duplicate</button>
        <button className={styles.delete} onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;