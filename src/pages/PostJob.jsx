import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useJobs } from "../context/JobsContext";

import toast from "react-hot-toast";

function PostJob() {

  const navigate = useNavigate();

  const { addJob } = useJobs();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "Full Time",
    description: "",
  });

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

    try {

      setLoading(true);

      await addJob(formData);

      toast.success("Job Posted Successfully!");

      navigate("/jobs");

    } catch (error) {

      toast.error(error.message);
    }

    setLoading(false);
  };

  return (

    <div className="bg-[#f8fafc] min-h-screen">

      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-20">

        <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200">

          {/* Heading */}
          <div className="mb-10">

            <h1 className="text-5xl font-extrabold text-[#0f172a]">

              Post A New Job

            </h1>

            <p className="text-gray-500 text-lg mt-4">

              Reach thousands of professionals instantly.

            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Title */}
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
            />

            {/* Company */}
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
            />

            {/* Location */}
            <input
              type="text"
              name="location"
              placeholder="Job Location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
            />

            {/* Salary */}
            <input
              type="text"
              name="salary"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
            />

            {/* Type */}
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
            >

              <option value="Full Time">
                Full Time
              </option>

              <option value="Remote">
                Remote
              </option>

              <option value="Hybrid">
                Hybrid
              </option>

            </select>

            {/* Description */}
            <textarea
              name="description"
              rows="6"
              placeholder="Job Description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-xl font-bold transition"
            >

              {loading
                ? "Posting Job..."
                : "Post Job"}

            </button>

          </form>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default PostJob;