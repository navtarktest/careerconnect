import React from "react";
import { Link } from "react-router-dom";

function JobCard({ job }) {

  return (

    <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition duration-300">

      {/* Top */}
      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold text-[#0f172a]">

            {job.title}

          </h2>

          <p className="text-gray-500 mt-2">

            {job.company}

          </p>

        </div>

        <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-xl text-sm font-semibold">

          {job.type}

        </div>

      </div>

      {/* Info */}
      <div className="space-y-3 text-gray-600 mb-6">

        <p>
          📍 {job.location}
        </p>

        <p>
          💰 {job.salary}
        </p>

      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-8">

        {job.description}

      </p>

      {/* Button */}
      <Link
        to={`/job/${job.id}`}
        className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition"
      >

        View Details

      </Link>

    </div>
  );
}

export default JobCard;