# 📋 Kanban Board — ReactJS Project

A fully functional Kanban task board built with **ReactJS + Vite**.  
Built by **Shubham Kilchatwar** as a portfolio project.

---

## 🚀 Features

- **5 Columns**: Backlog → To Do → In Progress → Review → Done
- **Drag & Drop**: Move cards between columns using HTML5 drag and drop
- **Add Cards**: Add new cards with title, tag, and priority
- **Delete Cards**: Remove cards with a single click
- **Tag Badges**: feature, bug, task, ui, api — color coded
- **Priority Indicators**: High 🔴 / Medium 🟡 / Low 🟢
- **Assignee Avatars**: Visual team member indicators

---

## 🧠 React Concepts Used

| Concept           | Where Used                                                     |
| ----------------- | -------------------------------------------------------------- |
| `useState`        | Managing cards list, form open/close, input values, drag state |
| `props`           | Passing data and handler functions between components          |
| `props drilling`  | App → Board → Column → Card / AddCardForm                      |
| `.map()`          | Rendering list of columns and cards                            |
| `.filter()`       | Getting cards per column                                       |
| Controlled inputs | Title input, tag & priority selects in AddCardForm             |
| Event handlers    | onClick, onDragStart, onDragOver, onDrop, onKeyDown            |
| CSS Modules       | Scoped styles per component                                    |

---

## 📁 Project Structure

```
kanban-board/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx          # App entry point
│   ├── App.jsx           # Root component — owns state
│   ├── App.module.css
│   ├── index.css
│   ├── data.js           # Initial data & constants
│   └── components/
│       ├── Board.jsx         # Renders all columns
│       ├── Board.module.css
│       ├── Column.jsx        # Single column + drag drop zone
│       ├── Column.module.css
│       ├── Card.jsx          # Single task card (draggable)
│       ├── Card.module.css
│       ├── AddCardForm.jsx   # Form to create new cards
│       └── AddCardForm.module.css
```

---

## ⚙️ How to Run Locally

### Step 1 — Install Node.js

Download from: https://nodejs.org (LTS version)

### Step 2 — Clone or Download the project

```bash
git clone https://github.com/YOUR_USERNAME/kanban-board.git
cd kanban-board
```

### Step 3 — Install dependencies

```bash
npm install
```

### Step 4 — Start the dev server

```bash
npm run dev
```

### Step 5 — Open in browser

Visit: **http://localhost:5173**

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to `/dist` folder — ready to deploy on Netlify, Vercel, or GitHub Pages.

---

## 🛠️ Tech Stack

- **ReactJS 18** — UI library
- **Vite** — Fast build tool and dev server
- **CSS Modules** — Scoped component styling
- **HTML5 Drag & Drop API** — Native browser drag and drop

---

## 📌 Future Improvements (for practice)

- [ ] Persist cards using `localStorage`
- [ ] Edit card title inline
- [ ] Filter cards by tag or priority
- [ ] Add due dates with a date picker
- [ ] Dark mode toggle
- [ ] Drag to reorder cards within a column

---

## 👨‍💻 Author

**Shubham Kilchatwar**  
Frontend Developer | Pune, India  
📧 skilchatwar8@gmail.com
