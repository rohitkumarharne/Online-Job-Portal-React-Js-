import "../style/UserForm.css";
import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
    role: "JOBSEEKER", // Default role is jobseeker
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users",
        user
      );
      console.log("User registered:", response.data);
      alert("User registered successfully!");
      window.location.href = "/login"; // Redirect to login page
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Error registering user. Please try again.");
    }
  };

  // Handle back to login navigation
  const handleBackToLogin = () => {
    window.location.href = "/login"; // Navigate to the login page
  };

  return (
    <div className="form-container">
      <h2>Create your Job profile</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label>Role</label>
          <select
            name="role"
            value={user.role}
            onChange={handleChange}
            required
          >
            <option value="JOBSEEKER">Jobseeker</option>
            <option value="EMPLOYER">Employer</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Register User
        </button>

        {/* Back to Login Button */}
        <button type="button" className="back-btn" onClick={handleBackToLogin}>
          Back to Login
        </button>
      </form>
    </div>
  );
};

export default UserForm;
