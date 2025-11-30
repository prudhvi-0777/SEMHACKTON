import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerApi } from "./api";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await registerApi(username, password);
      if (res.message) {
        alert("Registered! You can now log in.");
        nav("/");
      } else {
        alert(res.error || "Registration failed");
      }
    } catch {
      alert("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: "90vh", display: "grid", placeItems: "center" }}>
      <form className="card" style={{ width: 420 }} onSubmit={handleRegister}>
        <h2 style={{ marginTop: 0 }}>Create account</h2>
        <label className="form-label">Username</label>
        <input className="form-input" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label className="form-label">Password</label>
        <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create account"}
          </button>
          <Link to="/" style={{ alignSelf: "center", color: "#555" }}>Back to login</Link>
        </div>
      </form>
    </div>
  );
}
