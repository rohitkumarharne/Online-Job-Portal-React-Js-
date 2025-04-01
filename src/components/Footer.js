import React from "react";
import "../style/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-primary">Online Job Portal</h5>
            <p className="text-white">
              Discover job opportunities and advance your career with ease. Join
              us to find the perfect job tailored for you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-primary">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-4 mb-4">
            <h5 className="text-primary">Contact Us</h5>
            <p className="text-white">
              <i className="bi bi-envelope"></i> acestudent@jobportal.com
            </p>
            <p className="text-white">
              <i className="bi bi-telephone"></i> +91 7741031884
            </p>
            <p className="text-white">
              <i className="bi bi-geo-alt"></i> Anuradha Engineering
              College,Chikhali
            </p>
          </div>
        </div>
        <div className="text-center py-3 border-top mt-4">
          <p className="text-white m-0">
            © {new Date().getFullYear()} Online Job Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
