📝 Task Management Application
Task Management Application is a web-based productivity tool built with React that helps users organize, track, and manage their daily tasks efficiently. This application allows users to add new tasks, mark them as complete or incomplete, delete tasks, and filter them based on their status (All, Active, Completed)

---

🚀 Project Description

This Task Manager is designed to help users organize their daily workflow by keeping track of their to-dos. It demonstrates key React concepts like components, props, state, hooks (`useState`, `useEffect`), and conditional rendering. With a clean and intuitive UI, it supports task filtering, task completion toggling, and data persistence.

The project was completed as part of a 5-day assignment to evaluate practical skills in React development.

---

⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/user-name/taskManagement.git
   cd taskManagement
   npm i
   
---

⚙️ Core Features

Add new tasks with title and optional description
Mark tasks as complete or incomplete
Delete tasks from the list
Display list of all tasks
Filter tasks by status: All, Active, Completed
Persist tasks using localStorage
Load saved tasks on application start
Responsive design for desktop, tablet, and mobile devices

---

📌 Assumptions & Design Decisions

Title is required, description is optional for task creation
Tasks are uniquely identified by timestamps
No backend used; all data is stored locally in the browser
Minimal third-party dependencies to keep the project lightweight
Prioritized clean, readable UI over advanced UI frameworks

---

⚠️ Challenges Faced & Solutions

1. State Synchronization with localStorage
Challenge: Ensuring tasks update instantly while remaining in sync with localStorage
Solution: Used useEffect to watch task state changes and update localStorage accordingly

2. Responsive Design
Challenge: Making the UI work well across different screen sizes
Solution: Used media queries and flexible layouts with CSS Flexbox

3. Filtering Without Breaking Task State
Challenge: Applying filters while maintaining original task state
Solution: Used state to manage the current filter and derived the filtered list dynamically