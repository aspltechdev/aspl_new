
import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation
} from "react-router-dom";

import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import Leads from "./admin/Leads";
import Applications from "./admin/Applications";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutSection from "./section/AboutSection";
import ServicesSection from "./section/ServicesSection";
import Careers from "./section/Careers";
import ContactSection from "./section/ContactSection";

import "./App.css";

// PUBLIC WEBSITE LAYOUT
function PublicLayout() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

// ADMIN ROUTE HANDLING
function AdminRouter() {
  const location = useLocation();
  const token = localStorage.getItem("adminToken");

  const isLoginPage = location.pathname === "/admin";

  // Not logged in
  if (!token) {
    return isLoginPage
      ? <AdminLogin />
      : <Navigate to="/admin" replace />;
  }

  // Already logged in
  if (isLoginPage) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <AdminLayout />;
}

export default function App() {
  return (
    <Routes>

      {/* PUBLIC WEBSITE */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactSection />} />

        {/* Redirect old clients route */}
        <Route
          path="/clients"
          element={<Navigate to="/partners" replace />}
        />
      </Route>

      {/* ADMIN PANEL */}
      <Route path="/admin" element={<AdminRouter />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="leads" element={<Leads />} />
        <Route path="applications" element={<Applications />} />
      </Route>

      {/* UNKNOWN ROUTES */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}
