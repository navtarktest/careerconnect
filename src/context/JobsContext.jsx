import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const JobsContext = createContext();

export const useJobs = () =>
  useContext(JobsContext);

function JobsProvider({ children }) {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH JOBS
  const fetchJobs = async () => {

    try {

      const querySnapshot =
        await getDocs(
          collection(db, "jobs")
        );

      const jobsData = querySnapshot.docs.map(
        (doc) => ({
          id: doc.id,
          ...doc.data(),
        })
      );

      setJobs(jobsData);

    } catch (error) {

      console.log(error);
    }
  };

  // ADD JOB
const addJob = async (jobData) => {

  try {

    await addDoc(
      collection(db, "jobs"),
      jobData
    );

    // REFRESH JOBS
    await fetchJobs();

  } catch (error) {

    console.log(error);
  }
};

// APPLY JOB
const applyJob = async (applicationData) => {

  try {

    await addDoc(
      collection(db, "applications"),
      applicationData
    );

  } catch (error) {

    console.log(error);
  }
};

  // LOAD JOBS
  useEffect(() => {

    fetchJobs();

  }, []);

  return (

    <JobsContext.Provider
      value={{
        jobs, addJob, applyJob,
      }}
    >

      {children}

    </JobsContext.Provider>
  );
}

export default JobsProvider;