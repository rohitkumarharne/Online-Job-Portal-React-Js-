// import React from "react";

// const HomePage = () => {
//   return (
//     <div>
//       {/* Carousel Slider */}
//       <div
//         id="jobPortalCarousel"
//         className="carousel slide"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#jobPortalCarousel"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#jobPortalCarousel"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#jobPortalCarousel"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               style={{ height: "400px" }}
//               src="https://rgitech.weebly.com/uploads/1/0/1/4/101493456/published/job-portal-software-script_1.png?1491821976"
//               className="d-block w-100"
//               alt="Slide 1"
//             />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>Find Your Dream Job</h5>
//               <p>Explore thousands of opportunities tailored to your skills.</p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img
//               style={{ height: "400px" }}
//               src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg"
//               className="d-block w-100"
//               alt="Slide 2"
//             />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>Hire the Best Candidates</h5>
//               <p>Post your job and get connected with top professionals.</p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img
//               style={{ height: "400px" }}
//               src="https://c0.wallpaperflare.com/preview/751/2/550/chart-graph-business-finance.jpg"
//               className="d-block w-100"
//               alt="Slide 3"
//             />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>Easy and Efficient</h5>
//               <p>Manage your recruitment process seamlessly.</p>
//             </div>
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#jobPortalCarousel"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#jobPortalCarousel"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

//       {/* Main Content */}
//       <main style={{ padding: "20px", textAlign: "center" }}>
//         <h2>Welcome to the Online Job Portal</h2>
//         <p>Find your dream job or hire the perfect candidate.</p>
//       </main>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div
        id="jobPortalCarousel"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#jobPortalCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#jobPortalCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#jobPortalCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://rgitech.weebly.com/uploads/1/0/1/4/101493456/published/job-portal-software-script_1.png?1491821976"
              className="d-block w-100"
              alt="Find Your Dream Job"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="carousel-caption">
              <h5 className="fw-bold text-uppercase">Find Your Dream Job</h5>
              <p>Explore thousands of opportunities tailored to your skills.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg"
              className="d-block w-100"
              alt="Hire the Best Candidates"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="carousel-caption">
              <h5 className="fw-bold text-uppercase">
                Hire the Best Candidates
              </h5>
              <p>Post your job and get connected with top professionals.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://c0.wallpaperflare.com/preview/751/2/550/chart-graph-business-finance.jpg"
              className="d-block w-100"
              alt="Easy and Efficient"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="carousel-caption">
              <h5 className="fw-bold text-uppercase">Easy and Efficient</h5>
              <p>Manage your recruitment process seamlessly.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#jobPortalCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#jobPortalCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Welcome Section */}
      <section className="text-center py-5">
        <div className="container">
          <h2 className="text-primary fw-bold">
            Welcome to the Online Job Portal
          </h2>
          <p className="lead text-muted">
            Your one-stop solution to finding the perfect job or hiring the best
            candidates.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-5">
            Why Choose Us?
          </h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow h-100">
                <div className="card-body text-center">
                  <h5 className="card-title text-primary">
                    Extensive Job Listings
                  </h5>
                  <p className="card-text">
                    Browse thousands of jobs across multiple industries tailored
                    to your skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow h-100">
                <div className="card-body text-center">
                  <h5 className="card-title text-primary">Top Employers</h5>
                  <p className="card-text">
                    Connect with leading employers and take your career to the
                    next level.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow h-100">
                <div className="card-body text-center">
                  <h5 className="card-title text-primary">
                    Career Growth Tools
                  </h5>
                  <p className="card-text">
                    Access career resources, resume tips, and interview guides
                    to grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="text-primary fw-bold mb-4">How We Help You</h2>
          <p className="lead text-muted">
            Whether you're an employer or a job seeker, we provide the tools and
            resources you need to succeed.
          </p>
          <div className="row mt-4">
            <div className="col-md-6">
              <h5 className="fw-bold">For Job Seekers</h5>
              <ul className="list-unstyled text-muted">
                <li>Explore top job opportunities</li>
                <li>Build a professional resume</li>
                <li>Get interview tips and career advice</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5 className="fw-bold">For Employers</h5>
              <ul className="list-unstyled text-muted">
                <li>Post jobs and reach top candidates</li>
                <li>Access advanced recruitment tools</li>
                <li>Streamline your hiring process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
