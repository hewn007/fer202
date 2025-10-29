import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          {/* Bài 1 */}
          <Route path="/" element={<Home />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/lien-he" element={<Contact />} />

          {/* Bài 2 */}
          <Route path="/san-pham/:productId" element={<ProductDetail />} />

          {/* Bài 3: Nested Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="settings" element={<Settings />} />
            <Route path="reports" element={<Reports />} />
          </Route>

          {/* 404 fallback */}
          <Route path="*" element={<h2>404 - Trang không tồn tại</h2>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
