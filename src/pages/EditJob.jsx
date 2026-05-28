import React, {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useJobs } from "../context/JobsContext";

import toast from "react-hot-toast";

function EditJob() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    jobs,
    updateJob,
  } = useJobs();

  const [formData, setFormData] =
    useState({
      title: "",
      company: "",
      location: "",
      salary: "",
      type: "",
      description: "",
    });

  // FIND JOB
  const job = jobs.find(
    (item) => item.id === id
  );

  // LOAD DATA
  useEffect(() => {

    if (job) {

      setFormData({
        title: job.title || "",
        company: job.company || "",
        location: job.location || "",
        salary: job.salary || "",
        type: job.type || "",
        description:
          job.description || "",
      });
    }

  }, [job]);

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await updateJob(
        id,
        formData
      );

      toast.success(
        "Job Updated Successfully!"
      );

      navigate(
        "/employer-dashboard"
      );

    } catch (error) {

      toast.error(error.message);
    }
  };

  // NOT FOUND
  if (!job) {

    return (

      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        Job Not Found

      </div>
    );
  }

  return (

    <div className="bg-[#f8fafc] min-h-screen">

      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-20">

        <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200">

          {/* Heading */}
          <div className="mb-10">

            <h1 className="text-5xl font-extrabold text-[#0f172a]">

              Edit Job

            </h1>

            <p className="text-gray-500 text-lg mt-4">

              Update your job details.

            </p>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="salary"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
            />

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

            <textarea
              rows="6"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
            />

            {/* BUTTON */}
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-xl font-bold transition"
            >

              Update Job

            </button>

          </form>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default EditJob;