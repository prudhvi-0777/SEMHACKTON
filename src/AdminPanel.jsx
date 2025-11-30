import React from "react";
import { useAuth } from "./AuthContext";
import "./AdminPanel.css";

export default function AdminPanel() {
  const { users, loginCount, deleteUser } = useAuth();
  const userList = users.filter((u) => !u.isAdmin);

  // 🔥 DELETE WITH FADE-OUT ANIMATION
  function handleDelete(username) {
    const row = document.getElementById(`row-${username}`);

    if (row) {
      row.classList.add("fade-out");  // apply CSS animation
      setTimeout(() => deleteUser(username), 400); // delete after animation
    }
  }

  return (
    <div className="admin-root">
      <h1 className="admin-title">⚡ Admin Dashboard ⚡</h1>

      <div className="admin-grid">

        {/* TOTAL USER BOX */}
        <div className="admin-card white-card">
          <h2>Total Users</h2>
          <p className="big-number">{userList.length}</p>
          <p className="sub-info">Active users registered in the system.</p>
        </div>

        {/* TOTAL LOGINS */}
        <div className="admin-card white-card">
          <h2>Total Logins</h2>
          <p className="big-number">{loginCount}</p>
          <p className="sub-info">Number of successful logins recorded.</p>
        </div>

        {/* USER LIST */}
        <div className="admin-card white-card">
          <h2>Registered Users</h2>
          <div className="sub-info">Manage all non-admin user accounts.</div>

          <ul className="user-list">
            {userList.map((u, i) => (
              <li
                key={i}
                id={`row-${u.username}`}   // <-- REQUIRED FOR FADE ANIMATION
                className="user-row"
              >
                <span>{u.username}</span>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(u.username)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}
