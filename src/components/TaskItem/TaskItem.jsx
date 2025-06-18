import React, { useState } from "react";
import styles from "./TaskItem.module.css";

const TaskItem = ({
  title,
  description,
  priority,
  category,
  date,
  time,
  completed,
  onEdit,
  onDelete,
  onCompleteToggle,
}) => {
  const [status, setStatus] = useState(completed ? "completed" : "active");

  const toggleStatus = () => {
    const newStatus = status === "active" ? "completed" : "active";
    setStatus(newStatus);
    if (onCompleteToggle) onCompleteToggle();
  };

  const isCompleted = status === "completed";

  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isCompleted}
          onChange={toggleStatus}
        />
        <h3 className={isCompleted ? styles.completedText : ""}>{title}</h3>
        <button className={styles.statusSwapBtn} onClick={toggleStatus}>
          {status === "active" ? "✅ Mark Complete" : "🔄 Reopen"}
        </button>
      </div>

      <p
        className={`${styles.description} ${
          isCompleted ? styles.completedText : ""
        }`}
      >
        {description}
      </p>

      {(date || time) && (
        <p className={styles.datetime}>
          📅 {date || "N/A"} 🕒 {time || "N/A"}
        </p>
      )}

      <div className={styles.priorityButtons}>
        <span className={`${styles.priorityTag} ${styles[priority]}`}>
          {priority}
        </span>
      </div>

      <div className={styles.meta}>
        <span className={`${styles.tag} ${styles[category]}`}>{category}</span>
      </div>

      <div className={styles.actions}>
        <button onClick={onEdit}>✏️ Edit</button>
        <button className={styles.delete} onClick={onDelete}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
