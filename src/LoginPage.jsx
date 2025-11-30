import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login, register } = useAuth();
  const nav = useNavigate();

  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [newUser, setNewUser] = useState(false);

  // Admin login state
  const [adminPass, setAdminPass] = useState("");
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  // live wallpaper
  const wallpaperStyle = {
    height: "100vh",
    width: "100%",
    background:
      "linear-gradient(-45deg, #ff0040, #ff7f00, #ffee00, #00eaff, #4800ff, #ff00dd)",
    backgroundSize: "800% 800%",
    animation: "moveBG 10s ease infinite",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const keyframes = `
    @keyframes moveBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  // login box
  const cardStyle = {
    width: "100%",
    maxWidth: "360px",
    padding: "40px 32px",
    borderRadius: "18px",
    background: "white",
    boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
    textAlign: "center",
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (newUser) {
      const ok = register(uname, pass);
      if (!ok) return alert("Username already exists");
      alert("Account created! Please login.");
      setNewUser(false);
      return;
    }

    const ok = login(uname, pass);
    if (!ok) return alert("Invalid username or password");

    nav(uname === "admin" ? "/admin" : "/dashboard");
  }

  // ADMIN LOGIN HANDLER
  function handleAdminLogin() {
    if (adminPass === "1234") {
      nav("/admin");
    } else {
      alert("Wrong Admin Password");
    }
  }

  return (
    <>
      <style>{keyframes}</style>

      <div style={wallpaperStyle}>
        <form style={cardStyle} onSubmit={handleSubmit}>
          <h2 style={{ fontWeight: 800, marginBottom: 20 }}>
            {newUser ? "Create Account" : "Sign In"}
          </h2>

          {/* username */}
          <input
            style={inputStyle}
            placeholder="Username"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />

          {/* password */}
          <input
            style={inputStyle}
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          {/* login/register button */}
          <button style={btnStyle}>
            {newUser ? "Register" : "Login"}
          </button>

          {/* toggle account */}
          <p
            style={{ textDecoration: "underline", cursor: "pointer", marginTop: 8 }}
            onClick={() => setNewUser(!newUser)}
          >
            {newUser ? "Already have an account?" : "Create a new account"}
          </p>

          <hr style={{ margin: "18px 0" }} />

          {/* ADMIN PANEL SECTION */}
          <h3 style={{ marginBottom: 8 }}>Admin Login</h3>

          {!showAdminLogin && (
            <button
              type="button"
              style={{ ...btnStyle, background: "#222" }}
              onClick={() => setShowAdminLogin(true)}
            >
              Open Admin Login
            </button>
          )}

          {showAdminLogin && (
            <>
              <input
                type="password"
                placeholder="Admin Password"
                style={inputStyle}
                value={adminPass}
                onChange={(e) => setAdminPass(e.target.value)}
              />

              <button
                type="button"
                style={{ ...btnStyle, background: "#000" }}
                onClick={handleAdminLogin}
              >
                Enter Admin Panel
              </button>

              <p
                style={{
                  marginTop: 10,
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => setShowAdminLogin(false)}
              >
                Close Admin Login
              </p>
            </>
          )}
        </form>
      </div>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "16px",
  borderRadius: "10px",
  border: "1px solid #ccc",
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  background: "#4a7c59",
  color: "white",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  marginBottom: "10px",
  fontSize: "16px",
};
