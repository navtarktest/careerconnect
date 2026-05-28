import React, {
  useEffect,
  useState,
} from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useAuth } from "../context/AuthContext";
import { useJobs } from "../context/JobsContext";

function Applications() {

  const { user } = useAuth();

  const { getUserApplications } = useJobs();

  const [applications, setApplications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // FETCH APPLICATIONS
  useEffect(() => {

    const fetchApplications = async () => {

      if (!user) return;

      const data =
        await getUserApplications(
          user.email
        );

      setApplications(data);

      setLoading(false);
    };

    fetchApplications();

  }, [user]);

  return (

    <div className="bg-[#f8fafc] min-h-screen">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="mb-12">

          <h1 className="text-5xl font-extrabold text-[#0f172a]">

            My Applications

          </h1>

          <p className="text-gray-500 text-xl mt-4">

            Track all jobs you applied for.

          </p>

        </div>

        {/* Loading */}
        {loading ? (

          <div className="text-2xl font-bold">

            Loading...

          </div>

        ) : applications.length === 0 ? (

          <div className="bg-white p-12 rounded-3xl shadow-lg text-center text-2xl font-bold text-gray-500">

            No Applications Found

          </div>

        ) : (

          <div className="grid gap-8">

            {applications.map((application) => (

              <div
                key={application.id}
                className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200"
              >

                <h2 className="text-3xl font-bold text-[#0f172a] mb-4">

                  {application.jobTitle}

                </h2>

                <div className="space-y-3 text-gray-600 text-lg">

                  <p>

                    <span className="font-bold">

                      Company:

                    </span>{" "}

                    {application.company}

                  </p>

                  <p>

                    <span className="font-bold">

                      Applied By:

                    </span>{" "}

                    {application.userEmail}

                  </p>

                  <p>

                    <span className="font-bold">

                      Applied At:

                    </span>{" "}

                    {new Date(
                      application.appliedAt
                    ).toLocaleString()}

                  </p>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

      <Footer />

    </div>
  );
}

export default Applications;