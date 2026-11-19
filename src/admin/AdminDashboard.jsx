
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  BriefcaseBusiness,
  MessageSquare,
  UserCheck,
  RefreshCw,
  ArrowUpRight
} from "lucide-react";

import { adminApi } from "./adminApi";

export default function AdminDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadDashboard = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const result = await adminApi("/dashboard/stats");
      setData(result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  const cards = [
    {
      title: "Total Enquiries",
      value: data?.leads?.total ?? 0,
      icon: MessageSquare,
      color: "blue",
      path: "/admin/leads"
    },
    {
      title: "New Enquiries",
      value: data?.leads?.new ?? 0,
      icon: Users,
      color: "orange",
      path: "/admin/leads"
    },
    {
      title: "Career Applications",
      value: data?.applications?.total ?? 0,
      icon: BriefcaseBusiness,
      color: "green",
      path: "/admin/applications"
    },
    {
      title: "Shortlisted Candidates",
      value: data?.applications?.shortlisted ?? 0,
      icon: UserCheck,
      color: "purple",
      path: "/admin/applications"
    }
  ];

  const leadStatuses = [
    ["New", "new"],
    ["Contacted", "contacted"],
    ["In Progress", "inProgress"],
    ["Converted", "converted"],
    ["Closed", "closed"]
  ];

  const applicationStatuses = [
    ["New", "new"],
    ["Reviewing", "reviewing"],
    ["Shortlisted", "shortlisted"],
    ["Rejected", "rejected"],
    ["Hired", "hired"]
  ];

  const formatDate = (date) => {
    if (!date) return "—";
    return new Date(date).toLocaleDateString("en-IN");
  };

  return (
    <div className="dashboard-page">

      <div className="page-heading">
        <div>
          <span className="page-eyebrow">OVERVIEW</span>
          <h1>Dashboard Overview</h1>
          <p>
            Monitor website enquiries and recruitment activity.
          </p>
        </div>

        <button
          className="refresh-button"
          onClick={loadDashboard}
          disabled={loading}
        >
          <RefreshCw size={16} />
          Refresh
        </button>
      </div>

      {error && (
        <div className="admin-error">{error}</div>
      )}

      <div className="stats-grid">
        {cards.map(({ title, value, icon: Icon, color, path }) => (
          <Link to={path} className="stat-card" key={title}>
            <div className="stat-top">
              <div className={`stat-icon ${color}`}>
                <Icon size={22} />
              </div>
              <ArrowUpRight size={18} />
            </div>

            <h2>{loading ? "—" : value}</h2>
            <p>{title}</p>
          </Link>
        ))}
      </div>

      <div className="dashboard-status-grid">

        <div className="dashboard-panel">
          <h3>Enquiry Status</h3>

          {leadStatuses.map(([label, key]) => (
            <div className="status-line" key={key}>
              <span>{label}</span>
              <strong>
                {loading ? "—" : data?.leads?.[key] ?? 0}
              </strong>
            </div>
          ))}
        </div>

        <div className="dashboard-panel">
          <h3>Application Status</h3>

          {applicationStatuses.map(([label, key]) => (
            <div className="status-line" key={key}>
              <span>{label}</span>
              <strong>
                {loading ? "—" : data?.applications?.[key] ?? 0}
              </strong>
            </div>
          ))}
        </div>

      </div>

      <div className="dashboard-tables">

        <div className="dashboard-panel">

          <div className="panel-heading">
            <div>
              <h3>Recent Enquiries</h3>
              <p>Latest contact submissions</p>
            </div>
            <Link to="/admin/leads">View All</Link>
          </div>

          {loading ? (
            <p>Loading enquiries...</p>
          ) : !data?.recentLeads?.length ? (
            <p className="empty-message">No enquiries yet.</p>
          ) : (
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>
                  {data.recentLeads.map(lead => (
                    <tr key={lead.id}>
                      <td>
                        <strong>{lead.name}</strong>
                        <small>{lead.email}</small>
                      </td>
                      <td>{lead.service || "—"}</td>
                      <td>
                        <span className="status-badge">
                          {lead.status || "NEW"}
                        </span>
                      </td>
                      <td>{formatDate(lead.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>

        <div className="dashboard-panel">

          <div className="panel-heading">
            <div>
              <h3>Recent Applications</h3>
              <p>Latest career submissions</p>
            </div>
            <Link to="/admin/applications">View All</Link>
          </div>

          {loading ? (
            <p>Loading applications...</p>
          ) : !data?.recentApplications?.length ? (
            <p className="empty-message">No applications yet.</p>
          ) : (
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Applicant</th>
                    <th>Position</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>
                  {data.recentApplications.map(application => (
                    <tr key={application.id}>
                      <td>
                        <strong>{application.name}</strong>
                        <small>{application.email}</small>
                      </td>
                      <td>{application.position}</td>
                      <td>
                        <span className="status-badge">
                          {application.status || "NEW"}
                        </span>
                      </td>
                      <td>{formatDate(application.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
