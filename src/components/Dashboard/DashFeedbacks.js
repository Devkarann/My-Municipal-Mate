
import React, { useState } from "react";
import axios from "axios";

// Function to get auth token from local storage
const getAuthToken = () => localStorage.getItem("authToken");

const AdminComplaintForm = () => {
  const [complaintID, setComplaintID] = useState("");

  const handleResolved = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:8081/api/admin/complaints/${complaintID}/resolved`,
        {},
        {
          headers: {
            Authorization: `Bearer ${getAuthToken()}`,
          },
        }
      );
      alert(response.data);
    } catch (error) {
      alert(`Error: ${error.response.data}`);
    }
  };

  const handleOpen = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:8081/api/admin/complaints/${complaintID}/open`,
        {},
        {
          headers: {
            Authorization: `Bearer ${getAuthToken()}`,
          },
        }
      );
      alert(response.data);
    } catch (error) {
      alert(`Error: ${error.response.data}`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Admin: Update Complaint Status</h2>
      <input
        type="text"
        placeholder="Enter Complaint ID"
        value={complaintID}
        onChange={(e) => setComplaintID(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      />
      <br />
      <button
        onClick={handleResolved}
        style={{ marginRight: "10px", padding: "10px 20px" }}
      >
        Mark as Resolved
      </button>
      <button onClick={handleOpen} style={{ padding: "10px 20px" }}>
        Mark as Open
      </button>
    </div>
  );
};

export default AdminComplaintForm;
