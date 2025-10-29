import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <h2>📊 Dashboard Layout</h2>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <NavLink to="/dashboard" end>
          Home
        </NavLink>
        <NavLink to="/dashboard/settings">Settings</NavLink>
        <NavLink to="/dashboard/reports">Reports</NavLink>
      </nav>

      {/* Nơi hiển thị các route con */}
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
