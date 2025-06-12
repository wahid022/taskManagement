import React, { useEffect, useState } from "react";
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

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5);
      const today = now.toISOString().split("T")[0];

      tasks.forEach((task) => {
        if (
          !task.completed &&
          task.date === today &&
          task.time === currentTime
        ) {
          alert(`⏰ Reminder: ${task.title}`);
        }
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [tasks]);

  //  Adding Task Functionalities...
  const handleAddTask = (task) => {
    const newTask = { ...task, id: Date.now(), completed: false };
    setTasks((prev) => [...prev, newTask]);
  };


  return (
    <div className={styles.appContainer}>
      <div className={styles.contentWrapperFull}>
        <Header />
        <main className={styles.mainContent}>
          <AddTaskForm onAddTask={handleAddTask} />
          <FilterButtons filter={filter} setFilter={setFilter} />
          <TaskList tasks={tasks}/>
        </main>
      </div>
    </div>
  );
};

export default App;
