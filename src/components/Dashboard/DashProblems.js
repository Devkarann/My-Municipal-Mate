import React, { useState } from "react";
import "./DashProblems.css"; // Import the CSS file

const DashProblems = () => {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      image: "./images/back.jpg", // Replace with an actual image URL
      description: "Broken streetlight",
      location: "Main St, Downtown",
      status: "OPEN",
      assignTeam: "ELECTRICITY_MANAGEMENT",
    },
    {
      id: 2,
      image: "image_url", // Replace with an actual image URL
      description: "Water leakage",
      location: "3rd Ave, Uptown",
      status: "RESOLVED",
      assignTeam: "WATER_SUPPLY",
    },
    // Add more sample complaints here
  ]);

  const handleUpdate = (id) => {
    console.log(`Updating complaint with ID: ${id}`);
    // Update logic here
  };

  const handleDelete = (id) => {
    console.log(`Deleting complaint with ID: ${id}`);
    setComplaints(complaints.filter((complaint) => complaint.id !== id));
  };

  return (
    <div className="dash-problems-container">
      <div id="complaintManagement">
        <h2 className="text-center">Complaint Management</h2>
        <div className="card">
          <div className="card-header text-center">
            <i className="fas fa-tasks"></i> Complaints
          </div>
          <div className="card-body">
            <table className="table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Assign Team</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint, index) => (
                  <tr key={complaint.id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="complaint-image-container">
                        <img
                          src={complaint.image}
                          alt="Complaint"
                          className="complaint-image"
                        />
                      </div>
                    </td>
                    <td>{complaint.description}</td>
                    <td>{complaint.location}</td>
                    <td>
                      <select
                        value={complaint.status}
                        className="form-select"
                        onChange={(e) =>
                          setComplaints(
                            complaints.map((c) =>
                              c.id === complaint.id
                                ? { ...c, status: e.target.value }
                                : c
                            )
                          )
                        }
                      >
                        <option value="OPEN">OPEN</option>
                        <option value="RESOLVED">RESOLVED</option>
                      </select>
                    </td>
                    <td>
                      <select
                        value={complaint.assignTeam}
                        className="form-select"
                        onChange={(e) =>
                          setComplaints(
                            complaints.map((c) =>
                              c.id === complaint.id
                                ? { ...c, assignTeam: e.target.value }
                                : c
                            )
                          )
                        }
                      >
                        <option value="GARBAGE_MANAGEMENT">
                          Garbage Management
                        </option>
                        <option value="WATER_SUPPLY">Water Supply</option>
                        <option value="ELECTRICITY_MANAGEMENT">
                          Electricity Management
                        </option>
                        <option value="ROAD_REPAIR">Road Repair</option>
                        <option value="SANITATION_ISSUES">
                          Sanitation Issues
                        </option>
                        <option value="TRAFFIC_MANAGEMENT">
                          Traffic Management
                        </option>
                        <option value="ENVIRONMENTAL_HAZARDS">
                          Environmental Hazards
                        </option>
                        <option value="FIRE_SAFETY">Fire Safety</option>
                      </select>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => handleUpdate(complaint.id)}
                      >
                        Update
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(complaint.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashProblems;
