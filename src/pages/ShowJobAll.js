import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making API requests
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

function ShowJobAll() {
  const [posts, setPosts] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    axios.get('/posts')  // API endpoint for fetching job posts
      .then((response) => {
        setPosts(response.data);  // Save the fetched posts in state
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Job Postings</h1>
      <div className="row">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{post.jobTitle}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{post.jobLocation}</h6>
                  <p className="card-text">{post.description}</p>
                  <p><strong>Salary:</strong> ₹{post.salary}</p>
                  <p><strong>Skills Required:</strong> {post.skillsRequired}</p>
                  <p><strong>Company:</strong> {post.employerInfo.companyName}</p>
                  <button className="btn btn-primary">Apply</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No job posts available.</p>
        )}
      </div>
    </div>
  );
}

export default ShowJobAll;
