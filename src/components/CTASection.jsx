import React from "react";

function CTASection() {

  return (

    <section className="py-24 bg-blue-600">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">

          Ready To Take The Next
          <br />
          Step In Your Career?

        </h2>

        <p className="text-blue-100 text-xl mt-8 leading-relaxed">

          Join thousands of professionals and discover opportunities
          that match your skills and ambitions.

        </p>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-5">

          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-lg transition">

            Get Started

          </button>

          <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg transition">

            Browse Jobs

          </button>

        </div>

      </div>

    </section>
  );
}

export default CTASection;