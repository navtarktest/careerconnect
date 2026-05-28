import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import { useAuth } from "../context/AuthContext";

import toast from "react-hot-toast";

function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  // FORM STATE
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // LOADING
  const [loading, setLoading] = useState(false);

  // ERROR
  const [error, setError] = useState("");

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    try {

      setLoading(true);

      await login(
        formData.email,
        formData.password
      );

      toast.success("Login Successful!");

      navigate("/");

    } catch (err) {

      setError("Invalid email or password");
    }

    setLoading(false);
  };

  return (

    <div className="min-h-screen bg-[#f8fafc]">

      <Navbar />

      <div className="flex items-center justify-center px-6 py-20">

        <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl p-10 border border-gray-200">

          {/* Heading */}
          <div className="text-center mb-10">

            <h1 className="text-5xl font-extrabold text-[#0f172a]">

              Welcome Back

            </h1>

            <p className="text-gray-500 mt-4 text-lg">

              Login to continue your career journey

            </p>

          </div>

          {/* Error */}
          {error && (

            <div className="bg-red-100 text-red-600 p-4 rounded-2xl mb-6">

              {error}

            </div>

          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Email */}
            <div>

              <label className="block mb-3 font-semibold text-gray-700">

                Email Address

              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
              />

            </div>

            {/* Password */}
            <div>

              <label className="block mb-3 font-semibold text-gray-700">

                Password

              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
              />

            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg transition"
            >

              {loading
                ? "Logging In..."
                : "Login"}

            </button>

          </form>

          {/* Register Link */}
          <p className="text-center text-gray-600 mt-8">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >

              Register

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;