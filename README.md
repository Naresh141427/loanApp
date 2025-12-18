📘 Loan Management Mini App

A responsive Single Page Application (SPA) built with React.js that simulates an internal loan management dashboard.  
This project was developed as part of a Frontend Intern assignment and demonstrates authentication flows, data persistence using browser storage, and advanced client-side filtering.

---

🚀 Features

🔐 Authentication Flow
- User Signup with validation
- Login using Email & Password
- OTP verification (simulated with hardcoded OTP)
- Route protection using custom guards
- Logout with session cleanup

📊 Dashboard
- Displays logged-in user details
- Loan data presented in a structured table
- Fully client-side implementation using `localStorage`

🔎 Advanced Filtering
- Search loans by customer name
- Filter by loan status (Approved / Pending / Rejected)
- Filter by loan type (Home / Personal / Car)
- Multiple filters work simultaneously

🔔 User Experience
- Toast notifications for all key actions
- Defensive handling of localStorage data
- Clean, readable UI using pure CSS

---
 🛠 Tech Stack

- Frontend Framework:** React.js (Vite)
- Language:** JavaScript (ES6+)
- Routing:** react-router-dom
- State Management:** React Hooks
- Notifications:** react-hot-toast
- Styling:** Plain CSS
- Storage:** Browser localStorage (Mock Backend)

---

📂 Project Structure
src/
├── components/
│   ├── LoanTable.jsx
│   ├── LoanTable.css
│   ├── ProtectedRoute.jsx
│   └── PublicRoute.jsx
│
├── data/
│   └── mockData.js
│
├── pages/
│   ├── Login.jsx
│   ├── Login.css
│   ├── Signup.jsx
│   ├── Signup.css
│   ├── Dashboard.jsx
│   └── Dashboard.css
│
├── utils/
│   └── storage.js
│
├── App.jsx
├── main.jsx
└── index.css

⚙️ Setup & Installation

1️⃣ Clone the Repository
```bash
git clone <repository-url>
cd loan-app

2️⃣ Install Dependencies
npm install

3️⃣ Run the Application
npm run dev


The app will run at:

http://localhost:5173

🔐 Authentication Logic

User credentials are validated against data stored in localStorage

OTP verification is simulated using a predefined value

On successful login, the user session is stored as currentUser

Routes are protected using:

ProtectedRoute → blocks unauthenticated access

PublicRoute → blocks logged-in users from accessing auth pages


🧠 Filtering Logic
Filtering is performed entirely on the client side using array operations:

const filteredLoans = loans.filter((loan) => {
  const customerName = loan.customerName || "";

  const matchesSearch = customerName
    .toLowerCase()
    .includes(searchTerm.trim().toLowerCase());

  const matchesStatus =
    statusFilter === "All" || loan.status === statusFilter;

  const matchesType =
    typeFilter === "All" || loan.loanType === typeFilter;

  return matchesSearch && matchesStatus && matchesType;
});


📦 Data Persistence
Initial mock data is loaded once on app startup

All user and loan data is stored in localStorage

Utility helpers ensure safe read/write operations

✅ Key Learnings

Implementing authentication flows without a backend

Managing application state using React Hooks

Route protection and redirection strategies

Defensive coding for browser storage

Building scalable folder structures

📌 Notes

This project is frontend-only

OTP logic is simulated as per assignment requirements

No external UI frameworks were used

👤 Author

Naresh Anupu
Frontend / Backend / Full Stack Developer

GitHub: https://github.com/Naresh141427

LinkedIn: https://www.linkedin.com/in/anupu-naresh-73478b227