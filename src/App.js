// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
// import Navbar from "./components/Navbar";
// import LoginPage from "./pages/LoginPage";
// import Footer from "./components/Footer";
// import UserForm from "./pages/UserForm";
// import DashboardAdmin from "./pages/DashboardAdmin";
// import DashboardJobseeker from "./pages/DashboardJobseeker";
// import DashboardEmployer from "./pages/DashboardAdmin";

// // Make sure to remove the script tag from here
// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<UserForm />} />
//           <Route path="/dashboardadmin" element={<DashboardAdmin />} />
//           <Route path="/dashboardjobseeker" element={<DashboardJobseeker />} />
//           <Route path="/dashboardemployer" element={<DashboardEmployer />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import UserForm from "./pages/UserForm";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardJobseeker from "./pages/DashboardJobseeker";
import DashboardEmployer from "./pages/DashboardEmployer";
import ShowJobAll from "./pages/ShowJobAll";
import JobsList from "./pages/JobsList";

function App() {
  // Use location to determine the current route
  const location = useLocation();

  // List of routes where Navbar and Footer should NOT be shown
  const excludedRoutes = [
    "/dashboardadmin",
    "/dashboardjobseeker",
    "/dashboardemployer",
  ];

  // Check if the current path is in the excluded routes
  const hideLayout = excludedRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}{" "}
      {/* Render Navbar only if not on excluded routes */}
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<UserForm />} />
          <Route path="/dashboardadmin" element={<DashboardAdmin />} />
          <Route path="/dashboardjobseeker" element={<DashboardJobseeker />} />
          <Route path="/dashboardemployer" element={<DashboardEmployer />} />
          <Route path="/showjob" element={<JobsList />} />

        </Routes>
      </div>
      {!hideLayout && <Footer />}{" "}
      {/* Render Footer only if not on excluded routes */}
    </>
  );
}

// Wrapping App component with Router
function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;
