
import React, { useCallback, useEffect, useState } from "react";
import {
  Search,
  RefreshCw,
  Eye,
  X,
  Download,
  Plus,
  CalendarDays
} from "lucide-react";

import { adminApi, downloadResume } from "./adminApi";
import "./Applications.css";

const statuses = [
  "NEW",
  "REVIEWING",
  "SHORTLISTED",
  "REJECTED",
  "HIRED"
];

const formatDate = (date) =>
  date ? new Date(date).toLocaleDateString("en-IN") : "—";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [note, setNote] = useState("");
  const [followUpDate, setFollowUpDate] = useState("");
  const [savingNote, setSavingNote] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const loadApplications = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const result = await adminApi("/applications");
      setApplications(Array.isArray(result) ? result : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadApplications();
  }, [loadApplications]);

  const updateStatus = async (id, status) => {
    try {
      const result = await adminApi(
        `/applications/${id}/status`,
        {
          method: "PATCH",
          body: JSON.stringify({ status })
        }
      );

      setApplications(prev =>
        prev.map(item =>
          item.id === id
            ? { ...item, ...result.application }
            : item
        )
      );

      setSelected(prev =>
        prev?.id === id
          ? { ...prev, ...result.application }
          : prev
      );

      setMessage("Application status updated.");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDownload = async () => {
    if (!selected) return;

    setDownloading(true);
    setError("");

    try {
      await downloadResume(selected.id, selected.name);
    } catch (err) {
      setError(err.message);
    } finally {
      setDownloading(false);
    }
  };

  const addFollowUp = async (e) => {
    e.preventDefault();

    if (!selected || !note.trim()) return;

    setSavingNote(true);
    setError("");

    try {
      const result = await adminApi("/follow-ups", {
        method: "POST",
        body: JSON.stringify({
          application_id: selected.id,
          note,
          follow_up_date: followUpDate || null
        })
      });

      const newNote = result.followUp;

      setApplications(prev =>
        prev.map(item =>
          item.id === selected.id
            ? {
                ...item,
                follow_up_notes: [
                  ...(item.follow_up_notes || []),
                  newNote
                ]
              }
            : item
        )
      );

      setSelected(prev => ({
        ...prev,
        follow_up_notes: [
          ...(prev.follow_up_notes || []),
          newNote
        ]
      }));

      setNote("");
      setFollowUpDate("");
      setMessage("Follow-up note added.");
    } catch (err) {
      setError(err.message);
    } finally {
      setSavingNote(false);
    }
  };

  const filteredApplications = applications.filter(item =>
    [
      item.name,
      item.email,
      item.phone,
      item.position,
      item.location,
      item.status
    ].some(value =>
      String(value || "").toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="records-page">

      <div className="page-heading">
        <div>
          <span className="page-eyebrow">RECRUITMENT MANAGEMENT</span>
          <h1>Career Applications</h1>
          <p>
            Review applicants and manage recruitment progress.
          </p>
        </div>

        <button
          className="refresh-button"
          onClick={loadApplications}
        >
          <RefreshCw size={16} /> Refresh
        </button>
      </div>

      {error && <div className="admin-error">{error}</div>}
      {message && <div className="admin-success">{message}</div>}

      <div className="records-toolbar">
        <div className="search-box">
          <Search size={17} />

          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search applicant, email or position..."
          />
        </div>

        <span>
          {filteredApplications.length} applications found
        </span>
      </div>

      <div className="dashboard-panel">

        {loading ? (
          <p className="empty-message">Loading applications...</p>
        ) : filteredApplications.length === 0 ? (
          <p className="empty-message">No applications found.</p>
        ) : (
          <div className="table-scroll">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Applicant</th>
                  <th>Phone</th>
                  <th>Position</th>
                  <th>Experience</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>

              <tbody>
                {filteredApplications.map(item => (
                  <tr key={item.id}>
                    <td>
                      <strong>{item.name}</strong>
                      <small>{item.email}</small>
                    </td>

                    <td>{item.phone}</td>
                    <td>{item.position}</td>
                    <td>{item.experience_level || "—"}</td>
                    <td>{formatDate(item.created_at)}</td>

                    <td>
                      <span className="status-badge">
                        {item.status || "NEW"}
                      </span>
                    </td>

                    <td>
                      <button
                        className="icon-button"
                        onClick={() => {
                          setSelected(item);
                          setMessage("");
                          setError("");
                        }}
                      >
                        <Eye size={17} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>

      {selected && (
        <div
          className="admin-modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="admin-modal"
            onClick={e => e.stopPropagation()}
          >

            <div className="modal-heading">
              <div>
                <span className="page-eyebrow">
                  APPLICANT DETAILS
                </span>
                <h2>{selected.name}</h2>
              </div>

              <button onClick={() => setSelected(null)}>
                <X size={19} />
              </button>
            </div>

            {[
              ["Email", selected.email],
              ["Phone", selected.phone],
              ["Location", selected.location || "—"],
              ["Position", selected.position],
              ["Experience", selected.experience_level || "—"],
              ["Applied On", formatDate(selected.created_at)]
            ].map(([label, value]) => (
              <div className="detail-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}

            <button
              className="primary-action"
              onClick={handleDownload}
              disabled={downloading}
            >
              <Download size={16} />
              {downloading ? "Downloading..." : "Download Resume"}
            </button>

            <div className="modal-section">
              <h3>Update Application Status</h3>

              <select
                value={selected.status || "NEW"}
                onChange={e =>
                  updateStatus(selected.id, e.target.value)
                }
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div className="modal-section">
              <h3>Follow-up History</h3>

              {selected.follow_up_notes?.length ? (
                selected.follow_up_notes.map(item => (
                  <div className="follow-note" key={item.id}>
                    <p>{item.note}</p>
                    <small>
                      {formatDate(item.follow_up_date)}
                    </small>
                  </div>
                ))
              ) : (
                <p className="empty-message">
                  No follow-ups yet.
                </p>
              )}
            </div>

            <form className="modal-section" onSubmit={addFollowUp}>
              <h3>Add Follow-up</h3>

              <textarea
                rows="3"
                placeholder="Enter interview or applicant follow-up notes..."
                value={note}
                onChange={e => setNote(e.target.value)}
                required
              />

              <label className="date-label">
                <CalendarDays size={15} />
                Follow-up date
              </label>

              <input
                type="date"
                value={followUpDate}
                onChange={e => setFollowUpDate(e.target.value)}
              />

              <button
                className="primary-action"
                disabled={savingNote}
              >
                <Plus size={16} />
                {savingNote ? "Saving..." : "Add Note"}
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
