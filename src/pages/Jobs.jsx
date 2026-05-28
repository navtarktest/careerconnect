import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";

import { useJobs } from "../context/JobsContext";

function Jobs() {
  const { jobs } = useJobs();
  // SEARCH STATE
  const [search, setSearch] = useState("");

  // FILTER STATE
  const [jobType, setJobType] = useState("All");

  // FILTER LOGIC
  const filteredJobs = jobs.filter((job) => {

    const matchesSearch =

      job.title
        .toLowerCase()
        .includes(search.toLowerCase())

      ||

      job.company
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesType =

      jobType === "All"
        ? true
        : job.type === jobType;

    return matchesSearch && matchesType;
  });

  return (

    <div className="bg-[#f8fafc] min-h-screen">

      <Navbar />

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">

        <h1 className="text-5xl font-extrabold text-[#0f172a]">

          Find Your Dream Job

        </h1>

        <p className="text-gray-600 text-xl mt-5">

          Browse latest opportunities from top companies.

        </p>

      </div>

      {/* Search + Filter */}
      <div className="max-w-7xl mx-auto px-6 mb-14">

        <div className="bg-white rounded-3xl shadow-lg p-6 grid md:grid-cols-3 gap-5">

          {/* Search */}
          <input
            type="text"
            placeholder="Search jobs or companies..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
          />

          {/* Filter */}
          <select
            value={jobType}
            onChange={(e) =>
              setJobType(e.target.value)
            }
            className="border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
          >

            <option value="All">
              All Types
            </option>

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

          {/* Result Count */}
          <div className="flex items-center justify-center bg-blue-600 text-white rounded-2xl font-bold text-lg">

            {filteredJobs.length} Jobs Found

          </div>

        </div>

      </div>

      {/* Jobs Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredJobs.length > 0 ? (

          filteredJobs.map((job) => (

            <JobCard
              key={job.id}
              job={job}
            />

          ))

        ) : (

          <div className="col-span-full text-center text-3xl font-bold text-gray-500 py-20">

            No Jobs Found

          </div>

        )}

      </div>

      <Footer />

    </div>
  );
}

export default Jobs;