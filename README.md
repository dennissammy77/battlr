# 🤖 Bot Battlr

A React application for managing your army of bots! Choose, enlist, and discharge bots with unique stats, classes, and catchphrases. Built with React and powered by a mock JSON server backend.

---

## 🚀 Features

- View all bots in a card-based layout.
- Enlist a bot into your army (one instance only).
- Release a bot from the army (removes it from the army only).
- RESTful interactions using `json-server`.

---

## 🛠️ Tech Stack

- React (Frontend)
- JSON Server (Mock Backend)
- JavaScript (ES6)
- HTML/CSS (basic styling)

---

## 📁 Project Setup

### 1. Clone the Repo

```bash
git clone https://github.com/dennissammy77/battlr.git
cd battlr

npm install
```

### 2. Setup json-server
Test your server by visiting this route in the browser:
`http://localhost:8001/bots`

```bash
npx json-server --watch db.json
```

### 3. Start Frontend
In a separate terminal:
```bash
npm run dev
```