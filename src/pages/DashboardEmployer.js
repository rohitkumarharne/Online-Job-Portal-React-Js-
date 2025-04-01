// import React from "react";
// import { useLocation } from "react-router-dom";

// const DashboardEmployer = () => {
//   const location = useLocation();
//   const user = location.state?.user; // Safe access

//   if (!user) {
//     // If user data is not available, handle it accordingly (redirect, show a message, etc.)
//     return <div>No user data found!</div>;
//   }

//   return (
//     <div>
//       <h1>Welcome, {user.username}!</h1>
//       <p>Your role is: {user.role}</p>
//       <p>Email: {user.email}</p>
//       {/* Display other user data here */}
//     </div>
//   );
// };

// export default DashboardEmployer;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const DashboardEmployer = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const user = location.state?.user || {};
//   const [employerDetails, setEmployerDetails] = useState(null);
//   const [error, setError] = useState("");
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [selectedFile, setSelectedFile] = useState(null); // For company logo upload

//   // Fetch employer details on component load
//   useEffect(() => {
//     const fetchEmployerDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8080/api/employer/${user.userId}`
//         );
//         setEmployerDetails(response.data);
//         setFormData(response.data);
//       } catch (err) {
//         console.error("Error fetching employer details:", err);
//         setError("Unable to fetch employer details. Please try again later.");
//       }
//     };

//     if (user.userId) {
//       fetchEmployerDetails();
//     }
//   }, [user.userId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleUpdateDetails = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         `http://localhost:8080/api/employer/update/${employerDetails.employerId}`,
//         formData
//       );
//       setEmployerDetails(formData);
//       setShowEditModal(false);
//       alert("Employer details updated successfully!");
//     } catch (err) {
//       console.error("Error updating employer details:", err);
//       setError("Failed to update details. Please try again.");
//     }
//   };

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handlePhotoUpload = async (e) => {
//     e.preventDefault();
//     if (!selectedFile) {
//       setError("Please select a file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/api/employer/updatePhoto/${employerDetails.employerId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setEmployerDetails({
//         ...employerDetails,
//         companyLogo: response.data.companyLogo,
//       });
//       setSelectedFile(null);
//       alert("Company logo updated successfully!");
//     } catch (err) {
//       console.error("Error uploading logo:", err);
//       setError("Failed to upload logo. Please try again.");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-primary">Welcome, {user.username || "Employer"}!</h1>
//       <p className="text-muted">Your role is: {user.role}</p>
//       <p>Email: {user.email}</p>
//       <hr />
//       {error && <p className="text-danger">{error}</p>}

//       <div className="mb-4">
//         <button
//           className="btn btn-primary me-3"
//           onClick={() => navigate("/manage-jobs")}
//         >
//           Manage Jobs
//         </button>
//         <button
//           className="btn btn-secondary"
//           onClick={() => navigate("/login")}
//         >
//           Logout
//         </button>
//       </div>

//       {employerDetails ? (
//         <div className="card shadow-lg p-4 mb-4">
//           <div className="d-flex align-items-center mb-4">
//             <img
//               src={`http://localhost:8080/api/employer/imgs/${employerDetails.userId}`}
//               alt="Company Logo"
//               className="rounded-circle me-3"
//               style={{
//                 width: "80px",
//                 height: "80px",
//                 objectFit: "cover",
//                 border: "3px solid #007bff",
//               }}
//             />
//             <h3 className="text-primary mb-0">{employerDetails.companyName}</h3>
//           </div>
//           <div className="text-center mt-2">
//             <button
//               className="btn btn-outline-primary"
//               onClick={() => document.getElementById("fileUpload").click()}
//             >
//               Update Logo
//             </button>
//             <input
//               type="file"
//               id="fileUpload"
//               style={{ display: "none" }}
//               onChange={handleFileChange}
//             />
//             <button
//               className="btn btn-success ms-2"
//               onClick={handlePhotoUpload}
//             >
//               Upload
//             </button>
//           </div>
//           <table className="table table-borderless align-middle mt-4">
//             <tbody>
//               <tr>
//                 <th className="text-secondary">Company Name</th>
//                 <td>{employerDetails.companyName}</td>
//                 <th className="text-secondary">Contact</th>
//                 <td>{employerDetails.contact}</td>
//               </tr>
//               <tr>
//                 <th className="text-secondary">Address</th>
//                 <td>{employerDetails.address}</td>
//                 <th className="text-secondary">Website</th>
//                 <td>
//                   <a
//                     href={employerDetails.website}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {employerDetails.website}
//                   </a>
//                 </td>
//               </tr>
//               <tr>
//                 <th className="text-secondary">Job Postings</th>
//                 <td>{employerDetails.jobPostingsCount}</td>
//               </tr>
//             </tbody>
//           </table>
//           <div className="text-center mt-4">
//             <button
//               className="btn btn-outline-primary"
//               onClick={() => setShowEditModal(true)}
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Loading employer details...</p>
//       )}

//       {/* Edit Profile Modal */}
//       {showEditModal && (
//         <div
//           className="modal fade show d-block"
//           tabIndex="-1"
//           role="dialog"
//           style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
//         >
//           <div className="modal-dialog modal-lg" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Edit Employer Details</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={() => setShowEditModal(false)}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={handleUpdateDetails}>
//                   <div className="row">
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Company Name</label>
//                       <input
//                         type="text"
//                         name="companyName"
//                         className="form-control"
//                         value={formData.companyName || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Contact</label>
//                       <input
//                         type="text"
//                         name="contact"
//                         className="form-control"
//                         value={formData.contact || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="col-md-12 mb-3">
//                       <label className="form-label">Address</label>
//                       <input
//                         type="text"
//                         name="address"
//                         className="form-control"
//                         value={formData.address || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="col-md-12 mb-3">
//                       <label className="form-label">Website</label>
//                       <input
//                         type="url"
//                         name="website"
//                         className="form-control"
//                         value={formData.website || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                   <button type="submit" className="btn btn-success mt-3">
//                     Save Changes
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardEmployer;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const DashboardEmployer = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const user = location.state?.user || {};
//   const [employerDetails, setEmployerDetails] = useState(null);
//   const [error, setError] = useState("");
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [selectedFile, setSelectedFile] = useState(null); // For company logo upload

//   // Fetch employer details on component load
//   useEffect(() => {
//     const fetchEmployerDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8080/api/employer/${user.userId}`
//         );
//         setEmployerDetails(response.data);
//         setFormData(response.data);
//       } catch (err) {
//         console.error("Error fetching employer details:", err);
//         setError("Unable to fetch employer details. Please try again later.");
//       }
//     };

//     if (user.userId) {
//       fetchEmployerDetails();
//     }
//   }, [user.userId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleUpdateDetails = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         `http://localhost:8080/api/employer/${employerDetails.employer_id}`,
//         formData
//       );
//       setEmployerDetails(formData);
//       setShowEditModal(false);
//       alert("Employer details updated successfully!");
//     } catch (err) {
//       console.error("Error updating employer details:", err);
//       setError("Failed to update details. Please try again.");
//     }
//   };

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handlePhotoUpload = async (e) => {
//     e.preventDefault();
//     if (!selectedFile) {
//       setError("Please select a file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/api/employer/updatePhoto/${employerDetails.employer_id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setEmployerDetails({
//         ...employerDetails,
//         companyLogo: response.data.companyLogo,
//       });
//       setSelectedFile(null);
//       alert("Company logo updated successfully!");
//     } catch (err) {
//       console.error("Error uploading logo:", err);
//       setError("Failed to upload logo. Please try again.");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-primary">Welcome, {user.username || "Employer"}!</h1>
//       <p className="text-muted">Your role is: {user.role}</p>
//       <p>Email: {user.email}</p>
//       <hr />
//       {error && <p className="text-danger">{error}</p>}

//       <div className="mb-4">
//         <button
//           className="btn btn-primary me-3"
//           onClick={() => navigate("/manage-jobs")}
//         >
//           Manage Jobs
//         </button>
//         <button
//           className="btn btn-secondary"
//           onClick={() => navigate("/login")}
//         >
//           Logout
//         </button>
//       </div>

//       {employerDetails ? (
//         <div className="card shadow-lg p-4 mb-4">
//           <div className="d-flex align-items-center mb-4">
//             <img
//               src={`http://localhost:8080/api/employer/imgs/${employerDetails.userId}`}
//               alt="Company Logo"
//               className="rounded-circle me-3"
//               style={{
//                 width: "80px",
//                 height: "80px",
//                 objectFit: "cover",
//                 border: "3px solid #007bff",
//               }}
//             />
//             <h3 className="text-primary mb-0">{employerDetails.companyName}</h3>
//           </div>
//           <div className="text-center mt-2">
//             <button
//               className="btn btn-outline-primary"
//               onClick={() => document.getElementById("fileUpload").click()}
//             >
//               Update Logo
//             </button>
//             <input
//               type="file"
//               id="fileUpload"
//               style={{ display: "none" }}
//               onChange={handleFileChange}
//             />
//             <button
//               className="btn btn-success ms-2"
//               onClick={handlePhotoUpload}
//             >
//               Upload
//             </button>
//           </div>
//           <table className="table table-borderless align-middle mt-4">
//             <tbody>
//               <tr>
//                 <th className="text-secondary">Company Name</th>
//                 <td>{employerDetails.companyName}</td>
//                 <th className="text-secondary">Contact</th>
//                 <td>{employerDetails.contact || "N/A"}</td>
//               </tr>
//               <tr>
//                 <th className="text-secondary">Location</th>
//                 <td>{employerDetails.location || "N/A"}</td>
//                 <th className="text-secondary">Industry</th>
//                 <td>{employerDetails.industry || "N/A"}</td>
//               </tr>
//               <tr>
//                 <th className="text-secondary">Open Positions</th>
//                 <td>{employerDetails.openPositions}</td>
//                 <th className="text-secondary">Website</th>
//                 <td>
//                   <a
//                     href={employerDetails.website || "#"}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {employerDetails.website || "N/A"}
//                   </a>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <div className="text-center mt-4">
//             <button
//               className="btn btn-outline-primary"
//               onClick={() => setShowEditModal(true)}
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Loading employer details...</p>
//       )}

//       {/* Edit Profile Modal */}
//       {showEditModal && (
//         <div
//           className="modal fade show d-block"
//           tabIndex="-1"
//           role="dialog"
//           style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
//         >
//           <div className="modal-dialog modal-lg" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Edit Employer Details</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={() => setShowEditModal(false)}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={handleUpdateDetails}>
//                   <div className="row">
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Company Name</label>
//                       <input
//                         type="text"
//                         name="companyName"
//                         className="form-control"
//                         value={formData.companyName || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <label className="form-label">Contact</label>
//                       <input
//                         type="text"
//                         name="contact"
//                         className="form-control"
//                         value={formData.contact || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="col-md-12 mb-3">
//                       <label className="form-label">Location</label>
//                       <input
//                         type="text"
//                         name="location"
//                         className="form-control"
//                         value={formData.location || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="col-md-12 mb-3">
//                       <label className="form-label">Industry</label>
//                       <input
//                         type="text"
//                         name="industry"
//                         className="form-control"
//                         value={formData.industry || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="col-md-12 mb-3">
//                       <label className="form-label">Website</label>
//                       <input
//                         type="url"
//                         name="website"
//                         className="form-control"
//                         value={formData.website || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                   <button type="submit" className="btn btn-success mt-3">
//                     Save Changes
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardEmployer;




import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const DashboardEmployer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user || {};
  const [employerDetails, setEmployerDetails] = useState(null);
  const [error, setError] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false); // To control Post modal visibility
  const [formData, setFormData] = useState({});
  const [selectedFile, setSelectedFile] = useState(false); // For company logo upload
  const [appliedJobs, setAppliedJobs] = useState([]);
  // Fetch employer details on component load
  useEffect(() => {
    const fetchEmployerDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/employer/${user.userId}`
        );
        setEmployerDetails(response.data);
        setFormData(response.data);
      } catch (err) {
        console.error("Error fetching employer details:", err);
        setError("Unable to fetch employer details. Please try again later.");
      }
    };

    if (user.userId) {
      fetchEmployerDetails();
    }
  }, [user.userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateDetails = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/api/employer/${employerDetails.employer_id}`,
        formData
      );
      setEmployerDetails(formData);
      setShowEditModal(false);
      alert("Employer details updated successfully!");
    } catch (err) {
      console.error("Error updating employer details:", err);
      setError("Failed to update details. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handlePhotoUpload = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setError("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        `http://localhost:8080/api/employer/updatePhoto/${employerDetails.employer_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setEmployerDetails({
        ...employerDetails,
        companyLogo: response.data.companyLogo,
      });
      setSelectedFile(null);
      alert("Company logo updated successfully!");
    } catch (err) {
      console.error("Error uploading logo:", err);
      setError("Failed to upload logo. Please try again.");
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    // Create job data (without employerid in body)
    const jobData = { ...formData };

    try {
      const response = await axios.post(
        `http://localhost:8080/api/post?employerid=${employerDetails.employer_id}`, // Pass employerid in query params
        jobData, // Send only job data in the request body
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      alert("Job posted successfully!");
      setShowPostModal(false); // Close modal
      setFormData({}); // Clear form
    } catch (err) {
      console.error("Error posting data:", err);
      setError("Failed to create post. Please try again.");
    }
  };

  const fetchAppliedJobs = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/employer/by-employer/${employerDetails.employer_id}`);
      setAppliedJobs(response.data);
    } catch (error) {
      console.error("Error fetching applied jobs:", error);
    }
  };


  const openEmployerPage = async (endpoint, jobseekerId, postId) => {
    try {
      const url = `http://localhost:8080/api/employer/${endpoint}`;
  
      const formData = {
        jid: jobseekerId,
        pid: postId
      };
  
      const response = await axios.post(url, formData);
  
      if (response.status === 200) {
        alert("Action successful!"); // Optional success message
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to complete the action.");
    }
  };
  
  

  return (
    <div className="container mt-4">
      <h1 className="text-primary">Welcome, {user.username || "Employer"}!</h1>
      <p className="text-muted">Your role is: {user.role}</p>
      <p>Email: {user.email}</p>
      <hr />
      {error && <p className="text-danger">{error}</p>}

      <div className="mb-4">
        {/* <button
          className="btn btn-primary me-3"
          onClick={() => setEmployerDetails(true)}
        >
          Manage Jobs
        </button> */}
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/login")}
        >
          Logout
        </button>
        <button
          className="btn btn-success ms-3"
          onClick={() => setShowPostModal(true)} // Open Post Modal
        >
          Post New Job
        </button>
        <button className="btn btn-primary ms-3" onClick={fetchAppliedJobs}>
          Show Applied Jobs
        </button>
      </div>

      {employerDetails ? (
        <div className="card shadow-lg p-4 mb-4">
          <div className="d-flex align-items-center mb-4">
            <img
              src={`http://localhost:8080/api/employer/imgs/${employerDetails.userId}`}
              alt="Company Logo"
              className="rounded-circle me-3"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                border: "3px solid #007bff",
              }}
            />
            <h3 className="text-primary mb-0">{employerDetails.companyName}</h3>
          </div>
          <div className="text-center mt-2">
            <button
              className="btn btn-outline-primary"
              onClick={() => document.getElementById("fileUpload").click()}
            >
              Update Logo
            </button>
            <input
              type="file"
              id="fileUpload"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <button
              className="btn btn-success ms-2"
              onClick={handlePhotoUpload}
            >
              Upload
            </button>
          </div>
          <table className="table table-borderless align-middle mt-4">
            <tbody>
              <tr>
                <th className="text-secondary">Company Name</th>
                <td>{employerDetails.companyName}</td>
                <th className="text-secondary">Contact</th>
                <td>{user.phoneNumber || "N/A"}</td>
              </tr>
              <tr>
                <th className="text-secondary">Location</th>
                <td>{employerDetails.location || "N/A"}</td>
                <th className="text-secondary">Industry</th>
                <td>{employerDetails.industry || "N/A"}</td>
              </tr>
              <tr>
                <th className="text-secondary">Open Positions</th>
                <td>{employerDetails.openPositions}</td>
                <th className="text-secondary">Website</th>
                <td>
                  <a
                    href={employerDetails.portfolioUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {employerDetails.portfolioUrl || "N/A"}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-primary"
              onClick={() => setShowEditModal(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <p>Loading employer details...</p>
      )}

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Employer Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowEditModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleUpdateDetails}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        className="form-control"
                        value={formData.companyName || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Contact</label>
                      <input
                        type="text"
                        disabled
                        name="contact"
                        className="form-control"
                        value={user.phoneNumber || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Location</label>
                      <input
                        type="text"
                        name="location"
                        className="form-control"
                        value={formData.location || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Industry</label>
                      <input
                        type="text"
                        name="industry"
                        className="form-control"
                        value={formData.industry || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Open Positions</label>
                      <input
                        type="text"
                        name="openPositions"
                        className="form-control"
                        value={formData.openPositions || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Website</label>
                      <input
                        type="url"
                        name="portfolioUrl"
                        className="form-control"
                        value={formData.portfolioUrl || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success mt-3">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      )}










      {/* Post New Job Modal */}
      {/* Post New Job Modal */}
      {showPostModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Post New Job</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowPostModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handlePostSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Job Title</label>
                      <input
                        type="text"
                        name="jobTitle"
                        className="form-control"
                        value={formData.jobTitle || ""}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Location</label>
                      <input
                        type="text"
                        name="jobLocation"
                        className="form-control"
                        value={formData.jobLocation || ""}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        name="description"
                        className="form-control"
                        value={formData.description || ""}
                        onChange={handleInputChange}
                        required
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Salary</label>
                      <input
                        type="number"
                        name="salary"
                        className="form-control"
                        value={formData.salary || ""}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Job Type</label>
                      <select
                        name="jobType"
                        className="form-control"
                        value={formData.jobType || ""}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Job Type</option>
                        <option value="full-time">Full-Time</option>
                        <option value="part-time">Part-Time</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                      </select>
                    </div>
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Skills Required</label>
                      <input
                        type="text"
                        name="skillsRequired"
                        className="form-control"
                        value={formData.skillsRequired || ""}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">
                    Post Job
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------ */}
      <div className="container mt-4 mb-5">
        <h2>Employer Dashboard</h2>

        {/* Display Applied Jobs Table */}
        {appliedJobs.length > 0 && (
          <table className="table table-bordered mt-4">
            <thead>
              <tr>
                <th>Job Seeker</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Education</th>
                <th>Portfolio</th>
                <th>Skills</th>
                <th>Job Title</th>
                <th>View Profile</th>
                <th>Shortlist</th>
              </tr>
            </thead>
            <tbody>
              {appliedJobs.map((job) => (
                <tr key={job.id}>

                  <td>{job.fullName}</td>
                  <td>{job.email}</td>
                  <td>{job.phoneNumber}</td>
                  <td>{job.education || "N/A"}</td>
                  <td>{job.portfolioUrl ? <a href={job.portfolioUrl} target="_blank">Portfolio</a> : "N/A"}</td>
                  <td>{job.skills}</td>
                  <td>{job.jobTitle}</td>
                  {/* <th>
                    <a href={`http://localhost:8080/api/employer/view?jid=${job.jobseekerId}&pid=${job.postId}`} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  </th>
                  <th>
                    <a href={`http://localhost:8080/api/employer/shortlist?jid=${job.jobseekerId}&pid=${job.postId}`} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  </th> */}
                  
                  <th>
  <button 
    className="btn btn-primary" 
    onClick={() => openEmployerPage("view", job.jobseekerId, job.postId)}
  >
    View
  </button>
</th>
<th>
  <button 
    className="btn btn-success" 
    onClick={() => openEmployerPage("shortlist", job.jobseekerId, job.postId)}
  >
    Shortlist
  </button>
</th>


                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* ____________________________________ */}

    </div>

  );
};

export default DashboardEmployer;
