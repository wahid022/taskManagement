import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

const TaskList = () => {
  return (
    <div className={styles.taskList}>

      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
};

export default TaskList;
