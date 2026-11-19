
import React, { useCallback, useEffect, useState } from "react";
import {
  Search, RefreshCw, Eye, X, Plus, CalendarDays
} from "lucide-react";
import { adminApi } from "./adminApi";
import "./Leads.css";

const statuses = [
  "NEW",
  "CONTACTED",
  "IN_PROGRESS",
  "CONVERTED",
  "CLOSED"
];

const formatDate = (date) =>
  date ? new Date(date).toLocaleDateString("en-IN") : "—";

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [note, setNote] = useState("");
  const [followUpDate, setFollowUpDate] = useState("");
  const [savingNote, setSavingNote] = useState(false);

  const loadLeads = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const result = await adminApi("/leads");
      setLeads(Array.isArray(result) ? result : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadLeads();
  }, [loadLeads]);

  const updateStatus = async (id, status) => {
    try {
      const result = await adminApi(`/leads/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status })
      });

      setLeads(prev =>
        prev.map(lead =>
          lead.id === id ? { ...lead, ...result.lead } : lead
        )
      );

      setSelected(prev =>
        prev?.id === id ? { ...prev, ...result.lead } : prev
      );

      setMessage("Enquiry status updated.");
      setError("");
    } catch (err) {
      setError(err.message);
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
          lead_id: selected.id,
          note,
          follow_up_date: followUpDate || null
        })
      });

      const newNote = result.followUp;

      setLeads(prev =>
        prev.map(lead =>
          lead.id === selected.id
            ? {
                ...lead,
                follow_up_notes: [
                  ...(lead.follow_up_notes || []),
                  newNote
                ]
              }
            : lead
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

  const filteredLeads = leads.filter(lead =>
    [
      lead.name,
      lead.email,
      lead.phone,
      lead.service,
      lead.company,
      lead.status
    ].some(value =>
      String(value || "").toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="records-page">

      <div className="page-heading">
        <div>
          <span className="page-eyebrow">CRM MANAGEMENT</span>
          <h1>Contact Enquiries</h1>
          <p>Manage all enquiries received through your website.</p>
        </div>

        <button className="refresh-button" onClick={loadLeads}>
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
            placeholder="Search name, email, phone or service..."
          />
        </div>

        <span>{filteredLeads.length} enquiries found</span>
      </div>

      <div className="dashboard-panel">
        {loading ? (
          <p className="empty-message">Loading enquiries...</p>
        ) : filteredLeads.length === 0 ? (
          <p className="empty-message">No enquiries found.</p>
        ) : (
          <div className="table-scroll">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name / Email</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>

              <tbody>
                {filteredLeads.map(lead => (
                  <tr key={lead.id}>
                    <td>
                      <strong>{lead.name}</strong>
                      <small>{lead.email}</small>
                    </td>
                    <td>{lead.phone}</td>
                    <td>{lead.service || "—"}</td>
                    <td>{formatDate(lead.created_at)}</td>
                    <td>
                      <span className="status-badge">
                        {lead.status || "NEW"}
                      </span>
                    </td>
                    <td>
                      <button
                        className="icon-button"
                        onClick={() => {
                          setSelected(lead);
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
                <span className="page-eyebrow">ENQUIRY DETAILS</span>
                <h2>{selected.name}</h2>
              </div>

              <button onClick={() => setSelected(null)}>
                <X size={19} />
              </button>
            </div>

            {[
              ["Email", selected.email],
              ["Phone", selected.phone],
              ["Company", selected.company || "—"],
              ["Service", selected.service || "—"],
              ["Received", formatDate(selected.created_at)]
            ].map(([label, value]) => (
              <div className="detail-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}

            <div className="detail-message">
              <span>Message</span>
              <p>{selected.message}</p>
            </div>

            <div className="modal-section">
              <h3>Update Enquiry Status</h3>

              <select
                value={selected.status || "NEW"}
                onChange={e =>
                  updateStatus(selected.id, e.target.value)
                }
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status.replace("_", " ")}
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
                <p className="empty-message">No follow-ups yet.</p>
              )}
            </div>

            <form className="modal-section" onSubmit={addFollowUp}>
              <h3>Add Follow-up</h3>

              <textarea
                rows="3"
                placeholder="Enter your follow-up note..."
                value={note}
                onChange={e => setNote(e.target.value)}
                required
              />

              <label className="date-label">
                <CalendarDays size={15} /> Follow-up date
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
