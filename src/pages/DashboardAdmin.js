import React from "react";

const DashboardAdmin = ({ location }) => {
  const { state } = location;
  const user = state?.user;

  return (
    <div className="container mt-5">
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user?.username}</p>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phoneNumber}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
};

export default DashboardAdmin;
