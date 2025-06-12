import React, { useState } from "react";
import Header from "./components/Header/Header";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import TaskList from "./components/TaskList/TaskList";
import styles from "./App.module.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Assignment",
      description: "Build the Task Management App UI and logic.",
      priority: "high",
      category: "work",
      date: "2025-06-13",
      time: "11:00",
      completed: false,
    },
    {
      id: 2,
      title: "GYM",
      description: "Report Gym At 5 AM",
      priority: "medium",
      category: "health",
      date: "2025-06-13",
      time: "05:00",
      completed: false,
    },
  ]);

  return (
    <div className={styles.appContainer}>
      <div className={styles.contentWrapperFull}>
        <Header />
        <main className={styles.mainContent}>
          <AddTaskForm />
          <FilterButtons />
          <TaskList tasks={tasks} />
        </main>
      </div>
    </div>
  );
};

export default App;
