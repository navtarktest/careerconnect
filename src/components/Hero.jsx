import React from "react";

function Hero() {

  return (

    <section className="bg-[#f8fafc] min-h-[90vh] flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <p className="text-blue-600 font-semibold mb-5 text-lg">
            #1 Job Portal Platform
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#0f172a]">

            Find Your
            <span className="text-blue-600">
              {" "}Dream Job
            </span>
            <br />
            Today

          </h1>

          <p className="mt-8 text-gray-600 text-xl leading-relaxed">

            Connect with top companies and discover opportunities
            that match your skills, passion, and career goals.

          </p>

          {/* Search Box */}
          <div className="mt-10 bg-white shadow-xl rounded-2xl p-4 flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Location"
              className="flex-1 border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition">

              Search Jobs

            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="hidden md:flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Career"
            className="rounded-3xl shadow-2xl w-full max-w-xl h-[600px] object-cover"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;