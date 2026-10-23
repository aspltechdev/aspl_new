
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutSection from "./section/AboutSection";
import ServicesSection from "./section/ServicesSection";
import Careers from "./section/Careers";
import ContactSection from "./section/ContactSection";
import "./App.css";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-main">
        <Routes>
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

          {/* Redirect unknown routes */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
