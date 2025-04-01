import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave } from "react-icons/fa";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./JobsList.css"; // Ensure correct path

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/getallpost");
        setJobs(response.data);
      } catch (err) {
        setError("Failed to fetch jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="container-fluid mt-4">
      <h1 className="text-center job-title">Available Jobs</h1>

      {loading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && <p className="text-danger text-center">{error}</p>}

      {!loading && !error && jobs.length === 0 && (
        <div className="alert alert-warning text-center">No jobs available at the moment.</div>
      )}

      <div className="row justify-content-center">
        {jobs.map((job) => (
          <div key={job.id} className="col-12 mb-4">
            <div className="job-card shadow">
              <div className="job-header">
                <h5 className="job-title">{job.jobTitle}</h5>
                <p className="company-name">{job.employerInfo.companyName}</p>
              </div>
              <div className="job-body">
                <p className="job-detail">
                  <FaMapMarkerAlt className="icon" /> {job.jobLocation}
                </p>
                <p className="job-detail">
                  <FaMoneyBillWave className="icon" /> ₹{job.salary.toLocaleString()}
                </p>
                <p className="job-detail">
                  <FaBriefcase className="icon" /> {job.jobType}
                </p>
                <p className="job-detail skills">
                  <strong>Skills Required:</strong> {job.skillsRequired}
                </p>
                <p className="job-detail description">
                  <strong>Description:</strong> {job.description}
                </p>
                <p className="job-detail posted">
                  <strong>Posted on:</strong> {new Date(job.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
