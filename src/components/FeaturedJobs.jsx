import React from "react";

import { Link } from "react-router-dom";

// const jobs = [
//   {
//     id: 1,
//     title: "Frontend Developer",
//     company: "Google",
//     location: "Bangalore, India",
//     salary: "₹12 LPA",
//     type: "Full Time",
//   },

//   {
//     id: 2,
//     title: "UI/UX Designer",
//     company: "Microsoft",
//     location: "Hyderabad, India",
//     salary: "₹10 LPA",
//     type: "Remote",
//   },

//   {
//     id: 3,
//     title: "Backend Developer",
//     company: "Amazon",
//     location: "Pune, India",
//     salary: "₹15 LPA",
//     type: "Full Time",
//   },

//   {
//     id: 4,
//     title: "React Developer",
//     company: "Infosys",
//     location: "Mumbai, India",
//     salary: "₹8 LPA",
//     type: "Hybrid",
//   },

//   {
//     id: 5,
//     title: "Digital Marketing",
//     company: "Adobe",
//     location: "Delhi, India",
//     salary: "₹7 LPA",
//     type: "Remote",
//   },

//   {
//     id: 6,
//     title: "Data Analyst",
//     company: "TCS",
//     location: "Chennai, India",
//     salary: "₹9 LPA",
//     type: "Full Time",
//   },
// ];

import { useJobs } from "../context/JobsContext";

function FeaturedJobs() {
const { jobs } = useJobs();
const featuredJobs = jobs.slice(0, 6);
return (

    <section className="py-20 bg-[#f8fafc]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-5xl font-extrabold text-[#0f172a]">

            Featured Jobs

          </h2>

          <p className="text-gray-500 text-xl mt-5">

            Discover latest opportunities from top companies.

          </p>

        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {featuredJobs.map((job) => (

            <div
              key={job.id}
              className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition"
            >

              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">

                {job.title}

              </h3>

              <div className="space-y-2 text-gray-600 mb-6">

                <p>{job.company}</p>

                <p>{job.location}</p>

                <p>{job.salary}</p>

              </div>

              <Link
                to={`/jobs/${job.id}`}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold transition"
              >

                View Details

              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedJobs;