import React from "react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore, India",
    salary: "₹12 LPA",
    type: "Full Time",
  },

  {
    id: 2,
    title: "UI/UX Designer",
    company: "Microsoft",
    location: "Hyderabad, India",
    salary: "₹10 LPA",
    type: "Remote",
  },

  {
    id: 3,
    title: "Backend Developer",
    company: "Amazon",
    location: "Pune, India",
    salary: "₹15 LPA",
    type: "Full Time",
  },

  {
    id: 4,
    title: "React Developer",
    company: "Infosys",
    location: "Mumbai, India",
    salary: "₹8 LPA",
    type: "Hybrid",
  },

  {
    id: 5,
    title: "Digital Marketing",
    company: "Adobe",
    location: "Delhi, India",
    salary: "₹7 LPA",
    type: "Remote",
  },

  {
    id: 6,
    title: "Data Analyst",
    company: "TCS",
    location: "Chennai, India",
    salary: "₹9 LPA",
    type: "Full Time",
  },
];

function FeaturedJobs() {

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold text-lg mb-4">

            Featured Opportunities

          </p>

          <h2 className="text-5xl font-extrabold text-[#0f172a]">

            Latest Job Openings

          </h2>

          <p className="text-gray-600 mt-6 text-xl max-w-3xl mx-auto">

            Discover exciting career opportunities from top companies worldwide.

          </p>

        </div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {jobs.map((job) => (

            <div
              key={job.id}
              className="border border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition duration-300 bg-white"
            >

              {/* Top */}
              <div className="flex items-center justify-between mb-6">

                <div>

                  <h3 className="text-2xl font-bold text-[#0f172a]">

                    {job.title}

                  </h3>

                  <p className="text-gray-500 mt-2">

                    {job.company}

                  </p>

                </div>

                <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-xl text-sm font-semibold">

                  {job.type}

                </div>

              </div>

              {/* Info */}
              <div className="space-y-3 text-gray-600 mb-8">

                <p>
                  📍 {job.location}
                </p>

                <p>
                  💰 {job.salary}
                </p>

              </div>

              {/* Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition">

                Apply Now

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedJobs;