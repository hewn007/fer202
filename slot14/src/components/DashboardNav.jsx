import React from "react";
import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  const navStyle = {
    display: "flex",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#222",
  };

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#00bfff" : "white",
    textDecoration: "none",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <nav style={navStyle}>
      <NavLink to="/dashboard" style={linkStyle} end>
        Home
      </NavLink>
      <NavLink to="/dashboard/settings" style={linkStyle}>
        Settings
      </NavLink>
      <NavLink to="/dashboard/reports" style={linkStyle}>
        Reports
      </NavLink>
    </nav>
  );
};

export default DashboardNav;
