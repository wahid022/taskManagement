import React, { useState, useEffect } from "react";
import styles from "./AddTaskForm.module.css";

const AddTaskForm = ({ onAddTask, editingTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("personal");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || "");
      setDescription(editingTask.description || "");
      setPriority(editingTask.priority || "medium");
      setCategory(editingTask.category || "personal");
      setDate(editingTask.date || "");
      setTime(editingTask.time || "");
      setErrors({});
    }
  }, [editingTask]);

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!description.trim()) newErrors.description = "Description is required.";
    if (!priority) newErrors.priority = "Priority is required.";
    if (!category) newErrors.category = "Category is required.";
    if (!date) newErrors.date = "Date is required.";
    if (!time) newErrors.time = "Time is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onAddTask({ title, description, priority, category, date, time });

    setTitle("");
    setDescription("");
    setPriority("medium");
    setCategory("personal");
    setDate("");
    setTime("");
    setErrors({});
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>
        {editingTask ? "✏️ Edit Task" : "Create a New Task"}
      </h2>

      <div className={styles.row}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="📝 Task Title"
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className={styles.error}>{errors.title}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <select
            className={styles.select}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select Priority</option>
            <option value="high">🔥 High</option>
            <option value="medium">⚖️ Medium</option>
            <option value="low">🌿 Low</option>
          </select>
          {errors.priority && <p className={styles.error}>{errors.priority}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <select
            className={styles.select}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="personal">👤 Personal</option>
            <option value="work">💼 Work</option>
            <option value="health">💪 Health</option>
          </select>
          {errors.category && <p className={styles.error}>{errors.category}</p>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.inputWrapper}>
          <input
            type="date"
            className={styles.input}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {errors.date && <p className={styles.error}>{errors.date}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <input
            type="time"
            className={styles.input}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          {errors.time && <p className={styles.error}>{errors.time}</p>}
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <textarea
          placeholder="🗒️ Description"
          className={styles.textarea}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {errors.description && (
          <p className={styles.error}>{errors.description}</p>
        )}
      </div>

      <button type="submit" className={styles.button}>
        {editingTask ? "💾 Update Task" : "➕ Add Task"}
      </button>
    </form>
  );
};

export default AddTaskForm;
