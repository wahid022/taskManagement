import React, { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, onDelete, onEdit}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.taskListWrapper}>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {filteredTasks.length > 0 ? (
        <div className={styles.taskGrid}>
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              title={task.title}
              description={task.description}
              priority={task.priority}
              category={task.category}
              date={task.date}
              time={task.time}
              completed={task.completed}
              onEdit={() => onEdit(task)}
              onDelete={() => onDelete(task.id)}
              onCompleteToggle={() => {}}
            />
          ))}
        </div>
      ) : (
        <p className={styles.emptyMessage}>🚫 No tasks found.</p>
      )}
    </div>
  );
};

export default TaskList;
