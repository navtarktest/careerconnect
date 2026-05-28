import React, {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useJobs } from "../context/JobsContext";

function JobApplicants() {

  const { jobId } = useParams();

  const { getJobApplicants } =
    useJobs();

  const [applicants, setApplicants] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // FETCH APPLICANTS
  useEffect(() => {

    const fetchApplicants =
      async () => {

        const data =
          await getJobApplicants(
            jobId
          );

        setApplicants(data);

        setLoading(false);
      };

    fetchApplicants();

  }, [jobId]);

  return (

    <div className="bg-[#f8fafc] min-h-screen">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="mb-12">

          <h1 className="text-5xl font-extrabold text-[#0f172a]">

            Job Applicants

          </h1>

          <p className="text-gray-500 text-xl mt-4">

            View all candidates applied for this job.

          </p>

        </div>

        {/* Loading */}
        {loading ? (

          <div className="text-2xl font-bold">

            Loading...

          </div>

        ) : applicants.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-lg p-12 text-center text-2xl font-bold text-gray-500">

            No Applicants Yet

          </div>

        ) : (

          <div className="grid gap-8">

            {applicants.map(
              (applicant) => (

                <div
                  key={applicant.id}
                  className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200"
                >

                  <h2 className="text-3xl font-bold text-[#0f172a] mb-5">

                    {applicant.jobTitle}

                  </h2>

                  <div className="space-y-3 text-lg text-gray-600">

                    <p>

                      <span className="font-bold">

                        Applicant Email:

                      </span>{" "}

                      {applicant.userEmail}

                    </p>

                    <p>

                      <span className="font-bold">

                        Company:

                      </span>{" "}

                      {applicant.company}

                    </p>

                    <p>

                      <span className="font-bold">

                        Applied At:

                      </span>{" "}

                      {new Date(
                        applicant.appliedAt
                      ).toLocaleString()}

                    </p>

                  </div>

                </div>
              )
            )}

          </div>

        )}

      </div>

      <Footer />

    </div>
  );
}

export default JobApplicants;