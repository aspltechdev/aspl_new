
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminApi } from "./adminApi";
import { LockKeyhole, Mail, Eye, EyeOff } from "lucide-react";
import "./AdminLogin.css";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const data = await adminApi("/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      if (!data.token) {
        throw new Error("Login successful, but no authentication token was received.");
      }

      // Store authentication details
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem(
        "adminUser",
        JSON.stringify(data.admin)
      );

      // Navigate to admin dashboard
      navigate("/admin/dashboard", { replace: true });

    } catch (err) {
      setError(err.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">

        <div className="admin-login-logo">
          <h2>ASPL</h2>
          <span>TECH SOLUTIONS</span>
        </div>

        <div className="admin-login-heading">
          <h1>Admin Login</h1>
          <p>Sign in to access your CRM dashboard.</p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="admin-form-group">
            <label htmlFor="admin-email">Email Address</label>

            <div className="admin-input-wrapper">
              <Mail size={18} />

              <input
                id="admin-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
              />
            </div>
          </div>

          <div className="admin-form-group">
            <label htmlFor="admin-password">Password</label>

            <div className="admin-input-wrapper">
              <LockKeyhole size={18} />

              <input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                className="admin-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="admin-login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

        </form>

        <p className="admin-login-footer">
          ASPL Tech Solutions © {new Date().getFullYear()}
        </p>

      </div>
    </div>
  );
}
