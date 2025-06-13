import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header/Header";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import TaskList from "./components/TaskList/TaskList";
import styles from "./App.module.css";

const LOCAL_STORAGE_KEY = "taskManagerTasks";
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
  const isFirstLoad = useRef(true);

  //  Load from localStorage... getting tasks from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  // Save to localStorage... saving tasks to localStorage
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  //  Alarm Functionality... checking for tasks that need reminders
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5);
      const today = now.toISOString().split("T")[0];

      tasks.forEach(async (task) => {
        if (
          !task.completed &&
          task.date === today &&
          task.time === currentTime
        ) {
          try {
            const audio = new Audio("/assets/alarm-clock-90867.mp3");
            await audio.play(); // Play the alarm sound
          } catch (err) {
            console.warn("Audio failed to play:", err);
          }

          alert(`⏰ Reminder: ${task.title}`); // Alert the user
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
          <FilterButtons />
          <TaskList tasks={tasks} />
        </main>
      </div>
    </div>
  );
};

export default App;
