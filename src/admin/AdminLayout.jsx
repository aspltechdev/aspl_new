
import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BriefcaseBusiness,
  LogOut,
  Menu,
  X,
  Building2
} from "lucide-react";
import { adminLogout } from "./adminApi";
import "./AdminDashboard.css";

export default function AdminLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const admin = JSON.parse(
    localStorage.getItem("adminUser") || "{}"
  );

  const links = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard
    },
    {
      label: "Contact Enquiries",
      path: "/admin/leads",
      icon: Users
    },
    {
      label: "Career Applications",
      path: "/admin/applications",
      icon: BriefcaseBusiness
    }
  ];

  const currentPage = links.find(
    item => location.pathname === item.path
  )?.label || "Administration";

  return (
    <div className="admin-layout">

      {open && (
        <div
          className="admin-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      <aside className={`admin-sidebar ${open ? "sidebar-open" : ""}`}>

        <div className="admin-brand">
          <Building2 size={29} />

          <div>
            <strong>ASPL TECH</strong>
            <span>ADMIN PANEL</span>
          </div>

          <button
            className="sidebar-close"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
        </div>

        <p className="sidebar-caption">MAIN MENU</p>

        <nav className="admin-navigation">
          {links.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-item selected" : "nav-item"
              }
            >
              <Icon size={19} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-account">

          <div className="account-info">
            <div className="account-avatar">
              {(admin.name || "A").charAt(0).toUpperCase()}
            </div>

            <div>
              <strong>{admin.name || "Administrator"}</strong>
              <span>{admin.email || "ASPL Admin"}</span>
            </div>
          </div>

          <button
            onClick={adminLogout}
            className="logout-button"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>
      </aside>

      <main className="admin-main">

        <header className="admin-topbar">

          <button
            className="sidebar-toggle"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>

          <div>
            <span>ASPL MANAGEMENT SYSTEM</span>
            <h3>{currentPage}</h3>
          </div>

          <div className="topbar-admin">
            <span className="online-dot" />
            {admin.name || "Administrator"}
          </div>

        </header>

        <div className="admin-page-content">
          <Outlet />
        </div>

      </main>
    </div>
  );
}
