import React from 'react';
import styles from './AddTaskForm.module.css';

const AddTaskForm = () => (
  <form className={styles.form}>
    <input type="text" placeholder="Task title" />
    <textarea placeholder="Description (optional)"></textarea>
    <button type="submit">Add Task</button>
  </form>
);

export default AddTaskForm;
