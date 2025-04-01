import React from "react";

const AboutPage = () => {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h2 className="mb-4" style={{ color: "#0056b3", fontWeight: "bold" }}>
          About Us
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Welcome to the Online Job Portal! Our platform is designed to bridge
          the gap between job seekers and employers, creating a seamless
          recruitment experience.
        </p>
      </div>

      <div className="row mt-5">
        {/* Mission Section */}
        <div className="col-md-6">
          <h4 style={{ color: "#0056b3", fontWeight: "bold" }}>Our Mission</h4>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            Our mission is to empower job seekers by providing them with
            opportunities that match their skills and aspirations. At the same
            time, we aim to assist employers in finding the perfect candidates
            for their requirements efficiently.
          </p>
        </div>

        {/* Features Section */}
        <div className="col-md-6">
          <h4 style={{ color: "#0056b3", fontWeight: "bold" }}>Our Features</h4>
          <ul style={{ color: "#555", fontSize: "1rem" }}>
            <li>Job postings for employers.</li>
            <li>Resume submission for job seekers.</li>
            <li>Advanced search and filtering options.</li>
            <li>Application tracking and management.</li>
            <li>Role-based access for Admin, Employers, and Job Seekers.</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        {/* Vision Section */}
        <h4 style={{ color: "#0056b3", fontWeight: "bold" }}>Our Vision</h4>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          We envision a world where employment opportunities are accessible to
          everyone, and hiring processes are simple, transparent, and fair.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
