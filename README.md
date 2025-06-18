# 📝 Task Management Application

A web-based productivity tool built with **React** and **Vite** to help users organize, track, and manage daily tasks efficiently. Users can add, edit, delete, search, filter, and mark tasks as complete or incomplete. The app features reminders with sound, category and priority tagging, and data persistence via localStorage.

---

## 🚀 Features

- **Add new tasks** with title, description, priority, category, date, and time
- **Edit existing tasks** inline
- **Delete tasks** from the list
- **Mark tasks as complete/incomplete** (checkbox or button)
- **Filter tasks** by status: All, Active, Completed
- **Search tasks** by title or description
- **Category and priority tags** for each task
- **Reminders**: Plays a sound and shows an alert when a task is due
- **Responsive design** for desktop, tablet, and mobile
- **Data persistence**: Tasks are saved in localStorage

---

## 📁 Project Structure

```
├── public/
│   ├── vite.svg
│   └── assets/
│       └── alarmMusic.mp3
├── src/
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   └── react.svg
│   └── components/
│       ├── AddTaskForm/
│       │   ├── AddTaskForm.jsx
│       │   └── AddTaskForm.module.css
│       ├── FilterButtons/
│       │   ├── FilterButtons.jsx
│       │   └── FilterButtons.module.css
│       ├── Header/
│       │   ├── Header.jsx
│       │   └── Header.module.css
│       ├── SearchBar/
│       │   ├── SearchBar.jsx
│       │   └── SearchBar.module.css
│       ├── TaskItem/
│       │   ├── TaskItem.jsx
│       │   └── TaskItem.module.css
│       └── TaskList/
│           ├── TaskList.jsx
│           └── TaskList.module.css
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/user-name/taskManagement.git
   cd taskManagement
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview the production build**
   ```bash
   npm run preview
   ```

---

## 🧩 Main Components

- [`App`](src/App.jsx): Main application logic, state management, and alarm/reminder functionality.
- [`Header`](src/components/Header/Header.jsx): App title and subtitle.
- [`AddTaskForm`](src/components/AddTaskForm/AddTaskForm.jsx): Form for adding and editing tasks.
- [`FilterButtons`](src/components/FilterButtons/FilterButtons.jsx): Filter tasks by status.
- [`SearchBar`](src/components/SearchBar/SearchBar.jsx): Search tasks by title or description.
- [`TaskList`](src/components/TaskList/TaskList.jsx): Displays the filtered and searched list of tasks.
- [`TaskItem`](src/components/TaskItem/TaskItem.jsx): Individual task card with actions.

---

## 📌 Assumptions & Design Decisions

- **Title** is required; other fields are validated as needed.
- **Tasks are uniquely identified** by timestamp-based IDs.
- **No backend**: All data is stored in the browser (localStorage).
- **Minimal dependencies**: Only React, Vite, and ESLint-related packages.
- **Reminders**: Play a sound and show an alert when a task is due (if the browser tab is open).
- **Responsive UI**: Uses CSS modules and flexbox for layout.

---

## ⚠️ Challenges & Solutions

1. **State Synchronization with localStorage**
   - Used `useEffect` to keep tasks in sync with localStorage.

2. **Reminders/Alarms**
   - Used `setInterval` to check for due tasks every minute and play a sound/alert.

3. **Filtering and Searching**
   - Combined filter and search logic in [`TaskList`](src/components/TaskList/TaskList.jsx) for a seamless user experience.

4. **Responsive Design**
   - Used CSS modules and media queries for mobile/tablet support.

---

## 🛠️ Linting & Formatting

- ESLint is configured via [`eslint.config.js`](eslint.config.js) for code quality and React best practices.
