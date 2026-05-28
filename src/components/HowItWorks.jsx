import React from "react";

const steps = [
  {
    id: 1,
    title: "Create Account",
    description:
      "Sign up and build your professional profile in minutes.",
    icon: "👤",
  },

  {
    id: 2,
    title: "Search Jobs",
    description:
      "Browse thousands of opportunities from top companies.",
    icon: "🔍",
  },

  {
    id: 3,
    title: "Apply Easily",
    description:
      "Submit applications quickly and track your career growth.",
    icon: "🚀",
  },
];

function HowItWorks() {

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-blue-600 font-semibold text-lg mb-4">

            Easy Process

          </p>

          <h2 className="text-5xl font-extrabold text-[#0f172a]">

            How CareerConnect Works

          </h2>

          <p className="text-gray-600 mt-6 text-xl max-w-3xl mx-auto">

            Get started with your career journey in just a few simple steps.

          </p>

        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step) => (

            <div
              key={step.id}
              className="relative bg-[#f8fafc] rounded-3xl p-10 text-center border border-gray-200 hover:shadow-2xl transition duration-300"
            >

              {/* Step Number */}
              <div className="absolute top-5 right-5 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">

                {step.id}

              </div>

              {/* Icon */}
              <div className="text-6xl mb-8">

                {step.icon}

              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-[#0f172a] mb-5">

                {step.title}

              </h3>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed">

                {step.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;