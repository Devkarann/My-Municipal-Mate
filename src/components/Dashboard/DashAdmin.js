// 
import React, { useEffect } from "react";

const DashAdmin = () => {
  useEffect(() => {
    // Mock data (can be replaced with actual API calls)
    const reports = [
      {
        id: 1,
        image: "https://via.placeholder.com/150",
        description: "Issue with street light",
        date: "2024-08-10",
      },
      {
        id: 2,
        image: "https://via.placeholder.com/150",
        description: "Pothole on main road",
        date: "2024-08-09",
      },
    ];

    const complaints = [
      {
        id: 1,
        image: "https://via.placeholder.com/100",
        description: "Issue with street light",
        date: "2024-08-10",
        status: "Open",
        team: "Team A",
      },
      {
        id: 2,
        image: "https://via.placeholder.com/100",
        description: "Pothole on main road",
        date: "2024-08-09",
        status: "In Progress",
        team: "Team B",
      },
    ];

    const roles = [
      { id: 1, user: "John Doe", role: "Admin" },
      { id: 2, user: "Jane Smith", role: "Editor" },
    ];

    document.getElementById("totalReports").textContent = reports.length;
    document.getElementById("newReports").textContent = reports.filter(
      (report) =>
        new Date(report.date) >
        new Date(new Date().setDate(new Date().getDate() - 7))
    ).length;
    document.getElementById("pendingIssues").textContent = complaints.filter(
      (complaint) => complaint.status === "Pending"
    ).length;

    let reportsRows = "";
    reports.forEach((report) => {
      reportsRows += `
                <tr>
                    <td>${report.id}</td>
                    <td><img src="${report.image}" alt="Report Image" width="100" /></td>
                    <td>${report.description}</td>
                    <td>${report.date}</td>
                </tr>
            `;
    });
    document.getElementById("reportsTable").innerHTML = reportsRows;

    let complaintsRows = "";
    complaints.forEach((complaint) => {
      complaintsRows += `
                <tr>
                    <td>${complaint.id}</td>
                    <td><img src="${
                      complaint.image
                    }" alt="Complaint Image" width="100" /></td>
                    <td>${complaint.description}</td>
                    <td>${complaint.date}</td>
                    <td>
                        <select class="form-control">
                            <option ${
                              complaint.status === "Open" ? "selected" : ""
                            }>Open</option>
                            <option ${
                              complaint.status === "In Progress"
                                ? "selected"
                                : ""
                            }>In Progress</option>
                            <option ${
                              complaint.status === "Resolved" ? "selected" : ""
                            }>Resolved</option>
                        </select>
                    </td>
                    <td>
                        <select class="form-control">
                            <option ${
                              complaint.team === "Team A" ? "selected" : ""
                            }>Team A</option>
                            <option ${
                              complaint.team === "Team B" ? "selected" : ""
                            }>Team B</option>
                            <option ${
                              complaint.team === "Team C" ? "selected" : ""
                            }>Team C</option>
                        </select>
                    </td>
                </tr>
            `;
    });
    document.getElementById("complaintsTable").innerHTML = complaintsRows;

    let rolesRows = "";
    roles.forEach((role) => {
      rolesRows += `
                <tr>
                    <td>${role.id}</td>
                    <td>${role.user}</td>
                    <td>${role.role}</td>
                    <td>
                        <select class="form-control">
                            <option ${
                              role.role === "Admin" ? "selected" : ""
                            }>Admin</option>
                            <option ${
                              role.role === "Editor" ? "selected" : ""
                            }>Editor</option>
                            <option ${
                              role.role === "Viewer" ? "selected" : ""
                            }>Viewer</option>
                        </select>
                    </td>
                </tr>
            `;
    });
    document.getElementById("rolesTable").innerHTML = rolesRows;
  }, []);

  return (
    <div className="container" style={{ padding: "20px" }}>
      {/* Dashboard Section */}
      <div id="dashboard" className="my-4">
        <h1>Dashboard</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">
                <i className="fas fa-file-alt"></i> Total Reports
              </div>
              <div className="card-body">
                <h5 className="card-title" id="totalReports">
                  0
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-success mb-3">
              <div className="card-header">
                <i className="fas fa-calendar-day"></i> New Reports
              </div>
              <div className="card-body">
                <h5 className="card-title" id="newReports">
                  0
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-warning mb-3">
              <div className="card-header">
                <i className="fas fa-clock"></i> Pending Issues
              </div>
              <div className="card-body">
                <h5 className="card-title" id="pendingIssues">
                  0
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reports Section */}
      <div id="recentReports" className="my-4">
        <h2>Recent Reports</h2>
        <div className="card">
          <div className="card-header">
            <i className="fas fa-list"></i> Reports
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody id="reportsTable"></tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Complaints Management Section */}
      <div id="complaintManagement" className="my-4">
        <h2>Complaint Management</h2>
        <div className="card">
          <div className="card-header">
            <i className="fas fa-tasks"></i> Complaints
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Assign Team</th>
                </tr>
              </thead>
              <tbody id="complaintsTable"></tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Role Management Section */}
      <div id="roleManagement" className="my-4">
        <h2>Role Management</h2>
        <div className="card">
          <div className="card-header">
            <i className="fas fa-users-cog"></i> Roles
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Role</th>
                  <th>Change Role</th>
                </tr>
              </thead>
              <tbody id="rolesTable"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashAdmin;
