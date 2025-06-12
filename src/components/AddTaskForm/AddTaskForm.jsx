import React, { useState } from "react";
import styles from "./AddTaskForm.module.css";

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("personal");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({ title, description, priority, category, date, time });

    setTitle("");
    setDescription("");
    setPriority("medium");
    setCategory("personal");
    setDate("");
    setTime("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Create a New Task</h2>
      <div className={styles.row}>
        <input
          type="text"
          placeholder="📝 Task Title"
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className={styles.select}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">🔥 High</option>
          <option value="medium">⚖️ Medium</option>
          <option value="low">🌿 Low</option>
        </select>
        <select
          className={styles.select}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="personal">👤 Personal</option>
          <option value="work">💼 Work</option>
          <option value="health">💪 Health</option>
        </select>
      </div>

      <div className={styles.row}>
        <input
          type="date"
          className={styles.input}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          className={styles.input}
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <textarea
        placeholder="🗒️ Description (optional)"
        className={styles.textarea}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button type="submit" className={styles.button}>
        ➕ Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
