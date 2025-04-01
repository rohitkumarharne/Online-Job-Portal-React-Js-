import React from "react";

const ContactPage = () => {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h2 className="mb-4" style={{ color: "#0056b3", fontWeight: "bold" }}>
          Contact Us
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Have questions or need assistance? Feel free to reach out to us!
        </p>
      </div>

      <div className="row mt-5">
        {/* Contact Details */}
        <div className="col-md-6">
          <h4 style={{ color: "#0056b3", fontWeight: "bold" }}>
            Contact Information
          </h4>
          <ul style={{ fontSize: "1rem", color: "#555" }}>
            <li>
              Email:{" "}
              <a href="mailto:aecstudent@jobportal.com">
                aecstudent@jobportal.com
              </a>
            </li>
            <li>Phone: +91 7741031884</li>
            <li>Office: Anuradha Engineering College Chikhali, Maharashtra</li>
          </ul>
        </div>

        {/* Acknowledgment Section */}
        <div className="col-md-6">
          <h4 style={{ color: "#0056b3", fontWeight: "bold" }}>
            Acknowledgment
          </h4>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            This project was created by students of
            <strong>
              {" "}
              Anuradha Engineering College, Chikhali, Dist. Buldhana
            </strong>
            .
          </p>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            We express our gratitude to our mentors, faculty, and the
            institution for their guidance and support.
          </p>
        </div>
      </div>

      <div className="text-center mt-5">
        <h4 style={{ color: "#0056b3", fontWeight: "bold" }}>
          We're Here to Help!
        </h4>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Reach out to us for any inquiries or suggestions. Your feedback helps
          us improve!
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
