import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(url + "/api/user");
        if (response.data.success) {
          setUser(response.data.user);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, [url]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      {user ? (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-700 mb-2">
              Welcome, {user.name}
            </h1>
            <p className="text-gray-600 text-sm">Your Intern Dashboard</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-center">
            <div className="bg-blue-100 p-5 rounded-xl shadow-sm">
              <h2 className="text-sm text-gray-500 mb-1">Name</h2>
              <p className="text-lg font-semibold text-blue-800">{user.name}</p>
            </div>

            <div className="bg-green-100 p-5 rounded-xl shadow-sm">
              <h2 className="text-sm text-gray-500 mb-1">Referral Code</h2>
              <p className="text-lg font-semibold text-green-800">
                {user.referralCode}
              </p>
            </div>

            <div className="bg-yellow-100 p-5 rounded-xl shadow-sm">
              <h2 className="text-sm text-gray-500 mb-1">Total Donations</h2>
              <p className="text-lg font-semibold text-yellow-800">
                ₹{user.donations}
              </p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow-inner">
            <h2 className="text-xl font-bold text-purple-700 mb-3">
              Rewards & Unlockables
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <span className="font-medium">🎁 Bronze Badge</span> – ₹1000
              </li>
              <li>
                <span className="font-medium">🏅 Silver Badge</span> – ₹3000
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600 text-lg mt-20">
          Loading...
        </div>
      )}
    </div>
  );
};

export default Dashboard;
