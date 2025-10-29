import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "15px", margin: "20px" }}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Trang chủ
      </NavLink>

      <NavLink
        to="/san-pham"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Sản phẩm
      </NavLink>

      <NavLink
        to="/lien-he"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Liên hệ
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Dashboard
      </NavLink>
    </nav>
  );
};

export default Navbar;
