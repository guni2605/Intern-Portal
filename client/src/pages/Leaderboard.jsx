import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [data, setData] = useState([]);
  const url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(`${url}/api/leaderboard`);
        if (response.data.success) {
          setData(response.data.leaderboard);
        } else {
          console.error("Failed to fetch leaderboard data");
        }
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };
    fetchLeaderboard();
  }, [url]);

  const getRankColor = (rank) => {
    switch (rank) {
      case 0:
        return "bg-yellow-100 border-yellow-500";
      case 1:
        return "bg-gray-100 border-gray-400";
      case 2:
        return "bg-orange-100 border-orange-400";
      default:
        return "bg-white";
    }
  };

  const getMedal = (rank) => {
    switch (rank) {
      case 0:
        return "🥇";
      case 1:
        return "🥈";
      case 2:
        return "🥉";
      default:
        return `${rank + 1}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          🏆 Leaderboard
        </h1>
        <div className="space-y-4">
          {data.map((user, index) => (
            <div
              key={index}
              className={`flex items-center justify-between border-l-4 p-4 rounded-xl shadow-sm ${getRankColor(
                index
              )}`}
            >
              <div className="flex items-center space-x-3">
                <div className="text-xl">{getMedal(index)}</div>
                <div className="text-gray-800 font-medium text-lg">
                  {user.name}
                </div>
              </div>
              <div className="text-indigo-600 font-semibold text-lg">
                ₹{user.donations}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
