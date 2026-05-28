import React from "react";

import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Navbar() {

  const { user, logout } = useAuth();

  // HANDLE LOGOUT
  const handleLogout = async () => {

    try {

      await logout();

      alert("Logged Out Successfully!");

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <nav className="bg-white shadow-sm border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-600"
        >

          CareerConnect

        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 font-medium text-gray-700">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >

            Home

          </Link>

          <Link
            to="/jobs"
            className="hover:text-blue-600 transition"
          >

            Jobs

          </Link>

          {user && (

  <Link
    to="/dashboard"
    className="hover:text-blue-600 transition"
  >

    Dashboard

  </Link>

)}

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {user ? (

            <>
              {/* User Email */}
              <div className="hidden md:block text-gray-600 font-medium">

                {user.email}

              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl font-medium transition"
              >

                Logout

              </button>
            </>

          ) : (

            <>
              {/* Login */}
              <Link
                to="/login"
                className="font-medium text-gray-700 hover:text-blue-600 transition"
              >

                Login

              </Link>

              {/* Register */}
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition"
              >

                Register

              </Link>
            </>

          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;