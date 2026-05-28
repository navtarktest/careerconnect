import React, {
  useEffect,
  useState,
} from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useAuth } from "../context/AuthContext";
import { useJobs } from "../context/JobsContext";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";

function EmployerDashboard() {

  const { user } = useAuth();

  const {
    getEmployerJobs,
    deleteJob,
  } = useJobs();

  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] =
    useState(true);

  // FETCH JOBS
  useEffect(() => {

    const fetchJobs = async () => {

      if (!user) return;

      const data =
        await getEmployerJobs(
          user.uid
        );

      setJobs(data);

      setLoading(false);
    };

    fetchJobs();

  }, [user]);

  // HANDLE DELETE
  const handleDelete = async (id) => {

    try {

      await deleteJob(id);

      setJobs(
        jobs.filter(
          (job) => job.id !== id
        )
      );

      toast.success(
        "Job Deleted Successfully!"
      );

    } catch (error) {

      toast.error(error.message);
    }
  };

  return (

    <div className="bg-[#f8fafc] min-h-screen">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="mb-12">

          <h1 className="text-5xl font-extrabold text-[#0f172a]">

            Employer Dashboard

          </h1>

          <p className="text-gray-500 text-xl mt-4">

            Manage your posted jobs.

          </p>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-gray-500 text-lg">

              Total Jobs

            </h2>

            <p className="text-5xl font-extrabold text-blue-600 mt-4">

              {jobs.length}

            </p>

          </div>

        </div>

        {/* Loading */}
        {loading ? (

          <div className="text-2xl font-bold">

            Loading...

          </div>

        ) : jobs.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-lg p-12 text-center text-2xl font-bold text-gray-500">

            No Jobs Posted Yet

          </div>

        ) : (

          <div className="grid gap-8">

            {jobs.map((job) => (

              <div
                key={job.id}
                className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h2 className="text-3xl font-bold text-[#0f172a] mb-4">

                      {job.title}

                    </h2>

                    <div className="space-y-2 text-gray-600">

                      <p>

                        <span className="font-bold">

                          Company:

                        </span>{" "}

                        {job.company}

                      </p>

                      <p>

                        <span className="font-bold">

                          Location:

                        </span>{" "}

                        {job.location}

                      </p>

                    </div>

                  </div>

                  {/* Delete */}
                  <div className="flex gap-4">

  {/* EDIT */}
  <Link
    to={`/edit-job/${job.id}`}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold transition"
  >

    Edit

  </Link>

  <Link
  to={`/job-applicants/${job.id}`}
  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-bold transition"
>

  Applicants

</Link>

  {/* DELETE */}
  <button
    onClick={() =>
      handleDelete(job.id)
    }
    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl font-bold transition"
  >

    Delete

  </button>

</div>

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

export default EmployerDashboard;