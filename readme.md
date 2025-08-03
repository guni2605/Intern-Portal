🧑‍💻 Intern Portal
A simple full-stack intern portal built for managing referrals, donations, rewards, and viewing a leaderboard. Designed for internship onboarding and engagement tracking.

🚀 Features
🔐 Dummy login & signup

🧾 Personalized Dashboard

View Name, Referral Code, Total Donations

See reward tiers (Bronze, Silver, Gold)

🏆 Leaderboard

Ranks users based on total donations

📬 Axios-based API integration

🎨 Clean responsive UI with Tailwind CSS

🛠 Tech Stack
Tech Description
React Frontend library
Tailwind CSS UI styling
Express.js Backend server
Node.js Runtime environment
Axios HTTP client

📁 Folder Structure
bash
Copy
Edit
intern-portal/
├── client/ # React frontend
│ ├── pages/ # Dashboard, Leaderboard
│ ├── components/ # Navbar, etc.
│ └── ...
├── server/ # Express backend
│ └── routes/ # API routes
│ └── controllers/ # getUser, getLeaderboard
└── README.md
📦 Installation

1. Clone the repository
   bash
   Copy
   Edit
   git clone https://github.com/yourusername/intern-portal.git
   cd intern-portal
2. Install backend dependencies
   bash
   Copy
   Edit
   cd server
   npm install
3. Install frontend dependencies
   bash
   Copy
   Edit
   cd ../client
   npm install
4. Create .env in client
   env
   Copy
   Edit
   VITE_API_URL=http://localhost:5000
5. Run the project
   bash
   Copy
   Edit

# Run backend

cd server
npm start

# Run frontend

cd ../client
npm run dev
🔮 API Endpoints
Endpoint Description
GET /api/user Fetch user details
GET /api/leaderboard Fetch leaderboard

🧠 Future Improvements
✅ Authentication (JWT / Google Login)

✅ Profile page

✅ Admin panel

✅ Contribution history & badge unlocking logic
