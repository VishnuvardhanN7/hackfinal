import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import "../App.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div
      className="navbar"
      style={{
        background: "linear-gradient(90deg, #184d11, #1e5d15)",
        padding: "12px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
        borderRadius: "0 0 20px 20px",
        width: "100%",
        position: "relative",
        top: "0",
        left: "0",
      }}
    >
      {/* Left side logo */}
      <div
        className="nav-left"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontSize: "1.7rem",
            fontWeight: "900",
            color: "#ffffff",
            fontFamily: "Poppins, sans-serif",
            letterSpacing: "1px",
            position: "relative",
          }}
          className="brand-text"
        >
          AMMA
        </span>
        <span
          style={{
            fontSize: "1.7rem",
            fontWeight: "700",
            color: "#FED103",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          .in
        </span>
      </div>

      {/* Right side */}
      <div
        className="nav-right"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <span
          style={{
            color: "#f0f0f0",
            fontWeight: "600",
            fontSize: "1rem",
            fontFamily: "Poppins, sans-serif",
            textTransform: "capitalize",
            letterSpacing: "0.8px",
            textShadow: "0 1px 4px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FaUserCircle size={20} color="#FED103" />
          Welcome, {user?.name}!
        </span>

        <button
          onClick={handleLogout}
          style={{
            background: "linear-gradient(135deg, #FED103, #fbe47a)",
            color: "#154d21",
            border: "none",
            borderRadius: "30px",
            padding: "10px 22px",
            cursor: "pointer",
            fontWeight: "700",
            fontSize: "0.95rem",
            fontFamily: "Poppins, sans-serif",
            transition: "all 0.3s ease",
            boxShadow: "0 5px 15px rgba(0,0,0,0.25)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#ffffff";
            e.target.style.color = "#184d11";
            e.target.style.boxShadow = "0 8px 20px rgba(255,255,255,0.3)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #FED103, #fbe47a)";
            e.target.style.color = "#154d21";
            e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.25)";
            e.target.style.transform = "scale(1)";
          }}
        >
          <FiLogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
}
