import React from 'react';
import Header from './components/Header/Header';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import FilterButtons from './components/FilterButtons/FilterButtons';
import TaskList from './components/TaskList/TaskList';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <AddTaskForm />
        <FilterButtons />
        <TaskList />
      </main>
    </div>
  );
};

export default App;
