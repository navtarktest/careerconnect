import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Frontend Developer",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "CareerConnect helped me land my dream frontend developer role within just two weeks. The platform is smooth and easy to use.",
  },

  {
    id: 2,
    name: "Priya Verma",
    role: "UI/UX Designer",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "I found amazing remote opportunities through CareerConnect. The application process was simple and professional.",
  },

  {
    id: 3,
    name: "Rahul Mehta",
    role: "Backend Engineer",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "The best job portal experience I’ve had. Clean interface, quality jobs, and fast application tracking.",
  },
];

function Testimonials() {

  return (

    <section className="py-24 bg-[#f8fafc]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-blue-600 font-semibold text-lg mb-4">

            Testimonials

          </p>

          <h2 className="text-5xl font-extrabold text-[#0f172a]">

            What Our Users Say

          </h2>

          <p className="text-gray-600 mt-6 text-xl max-w-3xl mx-auto">

            Thousands of professionals trust CareerConnect to grow their careers.

          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((user) => (

            <div
              key={user.id}
              className="bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition duration-300"
            >

              {/* User */}
              <div className="flex items-center gap-5 mb-8">

                <img
                  src={user.image}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="text-xl font-bold text-[#0f172a]">

                    {user.name}

                  </h3>

                  <p className="text-gray-500">

                    {user.role}

                  </p>

                </div>

              </div>

              {/* Review */}
              <p className="text-gray-600 text-lg leading-relaxed">

                “{user.review}”

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;