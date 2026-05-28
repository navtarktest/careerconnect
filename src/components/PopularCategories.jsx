import React from "react";

const categories = [
  {
    id: 1,
    title: "Frontend Development",
    jobs: "120+ Jobs",
    icon: "💻",
  },

  {
    id: 2,
    title: "Backend Development",
    jobs: "85+ Jobs",
    icon: "🛠️",
  },

  {
    id: 3,
    title: "UI/UX Design",
    jobs: "60+ Jobs",
    icon: "🎨",
  },

  {
    id: 4,
    title: "Digital Marketing",
    jobs: "90+ Jobs",
    icon: "📈",
  },

  {
    id: 5,
    title: "Data Science",
    jobs: "70+ Jobs",
    icon: "📊",
  },

  {
    id: 6,
    title: "Mobile Development",
    jobs: "50+ Jobs",
    icon: "📱",
  },
];

function PopularCategories() {

  return (

    <section className="py-24 bg-[#f8fafc]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold text-lg mb-4">

            Explore Categories

          </p>

          <h2 className="text-5xl font-extrabold text-[#0f172a]">

            Popular Job Categories

          </h2>

          <p className="text-gray-600 mt-6 text-xl max-w-3xl mx-auto">

            Find jobs based on your skills and interests across multiple industries.

          </p>

        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category) => (

            <div
              key={category.id}
              className="bg-white rounded-3xl p-10 border border-gray-200 hover:shadow-2xl transition duration-300 cursor-pointer"
            >

              {/* Icon */}
              <div className="text-5xl mb-6">

                {category.icon}

              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#0f172a] mb-3">

                {category.title}

              </h3>

              {/* Jobs */}
              <p className="text-gray-500 text-lg">

                {category.jobs}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default PopularCategories;