import React, { useState } from "react";
import "./DashUser.css"; // Import the CSS file

const DashUsers = () => {
  // Sample data for users
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Citizen" },
    { id: 2, name: "Jane Smith", role: "Admin" },
    { id: 3, name: "Mike Johnson", role: "Citizen" },
    { id: 1, name: "John Doe", role: "Citizen" },
    { id: 2, name: "Jane Smith", role: "Admin" },
    { id: 3, name: "Mike Johnson", role: "Citizen" },
    { id: 1, name: "John Doe", role: "Citizen" },
    { id: 2, name: "Jane Smith", role: "Admin" },
    { id: 3, name: "Mike Johnson", role: "Citizen" },
  ]);

  // Handler for updating user role
  const handleRoleChange = (id, newRole) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="dash-users-container">
      <div id="roleManagement">
        <h2 className="text-center">Role Management</h2>
        <div className="card">
          <div className="card-header text-center">
            <i className="fas fa-users-cog"></i> Roles
          </div>
          <div className="card-body">
            <table className="table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Current Role</th>
                  <th>Assign Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="rolesTable">
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>
                      <select
                        value={user.role}
                        onChange={(e) =>
                          handleRoleChange(user.id, e.target.value)
                        }
                      >
                        <option value="Admin">Admin</option>
                        <option value="Citizen">Citizen</option>
                      </select>
                    </td>
                    <td>
                      <button className="btn-update">Update</button>
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

export default DashUsers;
