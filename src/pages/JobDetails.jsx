import React from "react";

import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import jobs from "../data/jobs";

function JobDetails() {

  // GET URL PARAM
  const { id } = useParams();

  // FIND JOB
  const job = jobs.find(
    (item) => item.id === Number(id)
  );

  // IF JOB NOT FOUND
  if (!job) {

    return (

      <div>

        <Navbar />

        <div className="min-h-screen flex items-center justify-center text-4xl font-bold">

          Job Not Found

        </div>

        <Footer />

      </div>
    );
  }

  return (

    <div className="bg-[#f8fafc] min-h-screen">

      <Navbar />

      {/* Page */}
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-200">

          {/* Top */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">

            <div>

              <h1 className="text-5xl font-extrabold text-[#0f172a]">

                {job.title}

              </h1>

              <p className="text-2xl text-gray-500 mt-4">

                {job.company}

              </p>

            </div>

            <div className="bg-blue-100 text-blue-600 px-6 py-3 rounded-2xl font-bold text-lg">

              {job.type}

            </div>

          </div>

          {/* Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">

            <div className="bg-[#f8fafc] rounded-2xl p-6">

              <h3 className="font-bold text-xl mb-3 text-[#0f172a]">

                Location

              </h3>

              <p className="text-gray-600 text-lg">

                📍 {job.location}

              </p>

            </div>

            <div className="bg-[#f8fafc] rounded-2xl p-6">

              <h3 className="font-bold text-xl mb-3 text-[#0f172a]">

                Salary

              </h3>

              <p className="text-gray-600 text-lg">

                💰 {job.salary}

              </p>

            </div>

          </div>

          {/* Description */}
          <div className="mb-12">

            <h2 className="text-3xl font-bold text-[#0f172a] mb-6">

              Job Description

            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">

              {job.description}

            </p>

          </div>

          {/* Requirements */}
          <div className="mb-12">

            <h2 className="text-3xl font-bold text-[#0f172a] mb-6">

              Requirements

            </h2>

            <ul className="space-y-4 text-gray-600 text-lg">

              <li>
                ✅ Strong communication skills
              </li>

              <li>
                ✅ Minimum 2+ years experience
              </li>

              <li>
                ✅ Team collaboration mindset
              </li>

              <li>
                ✅ Problem-solving ability
              </li>

            </ul>

          </div>

          {/* Apply Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-xl font-bold transition">

            Apply Now

          </button>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default JobDetails;