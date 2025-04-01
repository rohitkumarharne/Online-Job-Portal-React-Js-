import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        formData
      );
      const userData = response.data;

      console.log("Login successful:", userData);

      // Store user data in localStorage
      localStorage.setItem("userData", JSON.stringify(userData));

      // Redirect based on the role
      switch (userData.role) {
        case "ADMIN":
          navigate("/dashboardadmin", { state: { user: userData } });
          break;
        case "JOBSEEKER":
          navigate("/dashboardjobseeker", { state: { user: userData } });
          break;
        case "EMPLOYER":
          navigate("/dashboardemployer", { state: { user: userData } });
          break;
        default:
          setErrorMessage("Role not recognized. Please contact support.");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setErrorMessage(
        error.response?.data.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: "70vh",
        backgroundImage: "linear-gradient(to right, #1e3c72, #2a5298)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: "10px",
      }}
    >
      <div className="row w-100" style={{ maxWidth: "900px" }}>
        <div className="col-md-6">
          <div
            className="card shadow-lg"
            style={{
              borderRadius: "15px",
              background: "rgba(255, 255, 255, 0.9)",
            }}
          >
            <div className="card-body p-4">
              <h3 className="card-title text-center text-primary">Login</h3>
              {errorMessage && (
                <div className="alert alert-danger text-center">
                  {errorMessage}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>

              {/* Register Now Button */}
              <div className="text-center mt-3">
                <p className="mb-2">Don't have an account?</p>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => navigate("/register")}
                >
                  Register Now
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
