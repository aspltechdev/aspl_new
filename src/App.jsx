import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Home targetSection="services" />} />
          <Route path="/about" element={<Home targetSection="about" />} />
          <Route path="/partners" element={<Home targetSection="partners" />} />
          <Route path="/contact" element={<Home targetSection="contact" />} />
          {/* Redirect old clients route to partners */}
          <Route path="/clients" element={<Navigate to="/partners" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
