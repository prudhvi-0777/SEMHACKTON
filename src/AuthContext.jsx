import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("currentUser"))
  );

  const [users, setUsers] = useState(() =>
    JSON.parse(localStorage.getItem("users")) || [
      { username: "admin", password: "admin", role: "admin", dashboard: "Admin dashboard control panel" }
    ]
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  function login(username, password) {
    const found = users.find(
      (u) => u.username === username && u.password === password
    );
    if (!found) return false;

    setUser(found);
    localStorage.setItem("currentUser", JSON.stringify(found));
    return true;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("currentUser");
  }

  function register(username, password) {
    if (users.find((u) => u.username === username)) return false;
    const newUser = {
      username,
      password,
      role: "user",
      dashboard: "Welcome to your dashboard!",
    };
    setUsers([...users, newUser]);
    return true;
  }

  function updateUserDashboard(username, newDash) {
    const updated = users.map((u) =>
      u.username === username ? { ...u, dashboard: newDash } : u
    );
    setUsers(updated);

    if (user && user.username === username) {
      const updatedUser = { ...user, dashboard: newDash };
      setUser(updatedUser);
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, users, login, logout, register, updateUserDashboard }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
