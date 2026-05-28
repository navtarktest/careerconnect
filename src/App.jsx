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
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import PostJob from "./pages/PostJob";

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
  path="/dashboard"
  element={
    <ProtectedRoute>

      <Dashboard />

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

      </Routes>

    </BrowserRouter>
  );
}

export default App;