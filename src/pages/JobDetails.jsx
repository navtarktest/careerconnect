import React from "react";

import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import toast from "react-hot-toast";

import { useAuth } from "../context/AuthContext";
import { useJobs } from "../context/JobsContext";

function JobDetails() {

  const { id } = useParams();

  const { jobs, applyJob } = useJobs();

  const { user } = useAuth();

  // FIND JOB
  const job = jobs.find(
    (item) => item.id === id
  );

  // JOB NOT FOUND
  if (!job) {

    return (

      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        Job Not Found

      </div>
    );
  }

  // HANDLE APPLY
  const handleApply = async () => {

    if (!user) {

      toast.error("Please login first");

      return;
    }

    try {

      await applyJob({

        userEmail: user.email,

        jobId: job.id,

        jobTitle: job.title,

        company: job.company,

        appliedAt: new Date().toISOString(),
      });

      toast.success("Application Submitted!");

    } catch (error) {

      toast.error(error.message);
    }
  };

  return (

    <div className="bg-[#f8fafc] min-h-screen">

      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-20">

        <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200">

          {/* Job Title */}
          <h1 className="text-5xl font-extrabold text-[#0f172a] mb-6">

            {job.title}

          </h1>

          {/* Company */}
          <div className="space-y-3 text-lg text-gray-600 mb-10">

            <p>
              <span className="font-bold">
                Company:
              </span>{" "}

              {job.company}
            </p>

            <p>
              <span className="font-bold">
                Location:
              </span>{" "}

              {job.location}
            </p>

            <p>
              <span className="font-bold">
                Salary:
              </span>{" "}

              {job.salary}
            </p>

            <p>
              <span className="font-bold">
                Type:
              </span>{" "}

              {job.type}
            </p>

          </div>

          {/* Description */}
          <div className="mb-12">

            <h2 className="text-3xl font-bold mb-5">

              Job Description

            </h2>

            <p className="text-gray-600 leading-8 text-lg">

              {job.description}

            </p>

          </div>

          {/* Apply Button */}
          <button
            onClick={handleApply}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-xl font-bold transition"
          >

            Apply Now

          </button>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default JobDetails;