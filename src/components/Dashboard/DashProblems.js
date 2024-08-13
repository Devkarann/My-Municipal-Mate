// import React from 'react'

// const DashProblems = () => {
//     return (
//         <div className='h-screen' style={{marginTop: '1rem', marginLeft: '1rem'}}>DashProblems</div>
//     )
// }

// export default DashProblems
import React from "react";

const DashProblems = () => {
  return (
    <div className="h-screen" style={{ margin: "1rem" }}>
      <div>DashProblems</div>

      {/* Complaints Management Section */}
      <div id="complaintManagement" className="my-4">
        <h2>Complaint Management</h2>
        <div className="card">
          <div className="card-header">
            <i className="fas fa-tasks"></i> Complaints
          </div>
          <div className="card-body">
            <table className="table table-hover">
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
              <tbody id="complaintsTable">
                {/* Example Row */}
                <tr>
                  <td>1</td>
                  <td>
                    <img
                      src="image_url"
                      alt="Complaint"
                      style={{ width: "50px" }}
                    />
                  </td>
                  <td>Broken streetlight</td>
                  <td>Main St, Downtown</td>
                  <td>
                    <select className="form-select">
                      <option value="OPEN">OPEN</option>
                      <option value="RESOLVED">RESOLVED</option>
                    </select>
                  </td>
                  <td>
                    <select className="form-select">
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
                    <button className="btn btn-primary btn-sm me-2">
                      Update
                    </button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
                {/* Repeat for each complaint row */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashProblems;
