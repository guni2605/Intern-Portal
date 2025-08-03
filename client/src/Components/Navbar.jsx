import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Intern Portal
          </Link>

          <div className="flex space-x-6">
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-150"
            >
              Dashboard
            </Link>
            <Link
              to="/leaderboard"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-150"
            >
              Leaderboard
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-150"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
