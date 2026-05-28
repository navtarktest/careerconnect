import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/ProtectedRoute";
import PostJob from "./pages/PostJob";
import Applications from "./pages/Applications";
import EmployerDashboard from "./pages/EmployerDashboard";
import EditJob from "./pages/EditJob";
import JobApplicants from "./pages/JobApplicants";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/jobs"
          element={<Jobs />}
        />

        <Route
          path="/job/:id"
          element={<JobDetails />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />


<Route
  path="/employer-dashboard"
  element={
    <ProtectedRoute>

      <EmployerDashboard />

    </ProtectedRoute>
  }
/>

<Route
  path="/post-job"
  element={
    <ProtectedRoute>

      <PostJob />

    </ProtectedRoute>
  }
/>

<Route
  path="/edit-job/:id"
  element={
    <ProtectedRoute>

      <EditJob />

    </ProtectedRoute>
  }
/>

<Route
  path="/job-applicants/:jobId"
  element={
    <ProtectedRoute>

      <JobApplicants />

    </ProtectedRoute>
  }
/>

<Route
  path="/applications"
  element={
    <ProtectedRoute>

      <Applications />

    </ProtectedRoute>
  }
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;