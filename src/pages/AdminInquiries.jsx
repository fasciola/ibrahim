import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import { base44 } from "@/api/base44Client";
import {
  Search, Phone, Mail, MessageCircle, Download, X, Loader2, ShieldAlert, Inbox,
} from "lucide-react";
import SEO from "@/components/seo/SEO";
import { SITE, whatsappLink } from "@/lib/siteConfig";

const STATUSES = ["New", "Contacted", "Consultation Scheduled", "Qualified", "Converted", "Not Proceeding", "Spam"];

const STATUS_COLORS = {
  New: "bg-blue/10 text-blue",
  Contacted: "bg-gold/15 text-gold",
  "Consultation Scheduled": "bg-purple-100 text-purple-700",
  Qualified: "bg-cyan-100 text-cyan-700",
  Converted: "bg-success/10 text-success",
  "Not Proceeding": "bg-muted text-muted-ink",
  Spam: "bg-destructive/10 text-destructive",
};

function StatCard({ label, value, accent }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className={`font-heading text-2xl font-bold ${accent}`}>{value}</div>
      <div className="mt-1 text-[13px] text-muted-ink">{label}</div>
    </div>
  );
}

export default function AdminInquiries() {
  const { user, isLoadingAuth, authChecked } = useAuth();
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [serviceFilter, setServiceFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const isAdmin = user?.role === "admin";

  useEffect(() => {
    if (!isAdmin) return;
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await base44.entities.ConsultationInquiry.list("-created_date", 500);
        if (!cancelled) setRecords(data);
      } catch (e) {
        if (!cancelled) setError("Unable to load inquiries. You may not have permission to view them.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, [isAdmin]);

  const services = useMemo(() => {
    return ["All", ...Array.from(new Set(records.map((r) => r.service_required).filter(Boolean)))];
  }, [records]);

  const filtered = useMemo(() => {
    return records.filter((r) => {
      const matchStatus = statusFilter === "All" || r.status === statusFilter;
      const matchService = serviceFilter === "All" || r.service_required === serviceFilter;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        [r.full_name, r.email, r.phone_number, r.country_of_residence, r.reference_number, r.service_required]
          .filter(Boolean)
          .some((v) => v.toLowerCase().includes(q));
      return matchStatus && matchService && matchSearch;
    });
  }, [records, search, statusFilter, serviceFilter]);

  const stats = useMemo(() => ({
    total: records.length,
    new: records.filter((r) => r.status === "New").length,
    contacted: records.filter((r) => r.status === "Contacted").length,
    converted: records.filter((r) => r.status === "Converted").length,
  }), [records]);

  const updateStatus = async (id, status) => {
    try {
      await base44.entities.ConsultationInquiry.update(id, { status });
      setRecords((rs) => rs.map((r) => (r.id === id ? { ...r, status } : r)));
      setSelected((s) => (s && s.id === id ? { ...s, status } : s));
    } catch (e) {
      setError("Could not update status. Please try again.");
    }
  };

  const saveNotes = async (id, notes) => {
    try {
      await base44.entities.ConsultationInquiry.update(id, { internal_notes: notes });
      setRecords((rs) => rs.map((r) => (r.id === id ? { ...r, internal_notes: notes } : r)));
    } catch (e) {
      setError("Could not save notes.");
    }
  };

  const exportCsv = () => {
    const headers = ["Reference", "Name", "Email", "Phone", "Country", "Contact Method", "Service", "Timeline", "Budget", "Status", "Date"];
    const rows = filtered.map((r) => [
      r.reference_number, r.full_name, r.email, `${r.phone_country_code || ""} ${r.phone_number || ""}`,
      r.country_of_residence, r.preferred_contact_method, r.service_required, r.estimated_timeline,
      r.estimated_budget, r.status, r.created_date ? new Date(r.created_date).toISOString() : "",
    ]);
    const csv = [headers, ...rows]
      .map((row) => row.map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `inquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (isLoadingAuth || !authChecked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream">
        <Loader2 className="h-8 w-8 animate-spin text-navy" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
        <ShieldAlert className="h-12 w-12 text-destructive" strokeWidth={1.5} />
        <h1 className="heading-md mt-4">Access Restricted</h1>
        <p className="mt-3 max-w-md text-[15px] text-muted-ink">
          This area is private and available only to authorized administrators. If you believe you
          should have access, please contact the site administrator.
        </p>
      </div>
    );
  }

  return (
    <>
      <SEO title="Admin · Inquiries | Ibrahim Setup" path="/admin/inquiries" noindex />
      <div className="min-h-screen bg-cream pt-24 lg:pt-28">
        <div className="container-wide pb-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="font-heading text-2xl font-bold text-navy">Inquiry Management</h1>
              <p className="mt-1 text-[14px] text-muted-ink">Signed in as {user?.email}</p>
            </div>
            <button
              onClick={exportCsv}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-card px-4 text-[14px] font-medium text-ink transition-colors hover:border-gold focus-ring"
            >
              <Download className="h-4 w-4" />
              Export CSV
            </button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard label="Total Inquiries" value={stats.total} accent="text-navy" />
            <StatCard label="New" value={stats.new} accent="text-blue" />
            <StatCard label="Contacted" value={stats.contacted} accent="text-gold" />
            <StatCard label="Converted" value={stats.converted} accent="text-success" />
          </div>

          {error && (
            <div className="mt-4 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-[14px] text-destructive">
              {error}
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-ink" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, email, phone, reference..."
                className="h-11 w-full rounded-lg border border-input bg-card pl-10 pr-4 text-[14px] text-ink focus-ring"
              />
            </div>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="h-11 rounded-lg border border-input bg-card px-3 text-[14px] text-ink focus-ring">
              <option value="All">All statuses</option>
              {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <select value={serviceFilter} onChange={(e) => setServiceFilter(e.target.value)} className="h-11 rounded-lg border border-input bg-card px-3 text-[14px] text-ink focus-ring">
              {services.map((s) => <option key={s} value={s}>{s === "All" ? "All services" : s}</option>)}
            </select>
          </div>

          <div className="mt-4 text-[13px] text-muted-ink">
            Showing {filtered.length} of {records.length} inquiries (newest first)
          </div>

          {loading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-navy" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-border bg-card py-16 text-center">
              <Inbox className="h-10 w-10 text-muted-ink" strokeWidth={1.5} />
              <p className="mt-3 text-[15px] text-muted-ink">No inquiries match your filters.</p>
            </div>
          ) : (
            <>
              {/* Desktop table */}
              <div className="mt-4 hidden overflow-hidden rounded-2xl border border-border bg-card lg:block">
                <table className="w-full text-left text-[14px]">
                  <thead className="border-b border-border bg-muted/50 text-[12px] uppercase tracking-wide text-muted-ink">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Reference</th>
                      <th className="px-4 py-3 font-semibold">Name</th>
                      <th className="px-4 py-3 font-semibold">Service</th>
                      <th className="px-4 py-3 font-semibold">Status</th>
                      <th className="px-4 py-3 font-semibold">Date</th>
                      <th className="px-4 py-3 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filtered.map((r) => (
                      <tr key={r.id} className="cursor-pointer transition-colors hover:bg-muted/40" onClick={() => setSelected(r)}>
                        <td className="px-4 py-3 font-mono text-[12px] text-muted-ink">{r.reference_number}</td>
                        <td className="px-4 py-3 font-medium text-ink">{r.full_name}</td>
                        <td className="px-4 py-3 text-muted-ink">{r.service_required}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block rounded-full px-2.5 py-0.5 text-[12px] font-medium ${STATUS_COLORS[r.status] || "bg-muted text-muted-ink"}`}>
                            {r.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-muted-ink">{r.created_date ? new Date(r.created_date).toLocaleDateString("en-GB") : "—"}</td>
                        <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                          <div className="flex gap-2">
                            <a href={`tel:${r.phone_country_code}${r.phone_number}`} className="text-blue hover:text-navy" aria-label="Call"><Phone className="h-4 w-4" /></a>
                            <a href={`mailto:${r.email}`} className="text-gold hover:text-navy" aria-label="Email"><Mail className="h-4 w-4" /></a>
                            <a href={whatsappLink(`Hello ${r.full_name}, regarding your UAE business setup inquiry (${r.reference_number}).`)} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:brightness-110" aria-label="WhatsApp"><MessageCircle className="h-4 w-4" /></a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="mt-4 space-y-3 lg:hidden">
                {filtered.map((r) => (
                  <button key={r.id} onClick={() => setSelected(r)} className="block w-full rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-gold">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-ink">{r.full_name}</span>
                      <span className={`inline-block rounded-full px-2.5 py-0.5 text-[12px] font-medium ${STATUS_COLORS[r.status] || "bg-muted text-muted-ink"}`}>{r.status}</span>
                    </div>
                    <div className="mt-1 text-[13px] text-muted-ink">{r.service_required}</div>
                    <div className="mt-1 font-mono text-[12px] text-muted-ink">{r.reference_number}</div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Detail drawer */}
      {selected && (
        <DetailDrawer
          inquiry={selected}
          onClose={() => setSelected(null)}
          onStatusChange={(status) => updateStatus(selected.id, status)}
          onSaveNotes={(notes) => saveNotes(selected.id, notes)}
        />
      )}
    </>
  );
}

function DetailDrawer({ inquiry, onClose, onStatusChange, onSaveNotes }) {
  const [notes, setNotes] = useState(inquiry.internal_notes || "");
  const phone = `${inquiry.phone_country_code || ""} ${inquiry.phone_number || ""}`;

  const Row = ({ label, value }) => (
    <div className="flex justify-between gap-4 border-b border-border py-2.5">
      <span className="text-[13px] text-muted-ink">{label}</span>
      <span className="text-right text-[14px] font-medium text-ink">{value || "—"}</span>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-heading text-lg font-semibold text-navy">Inquiry Detail</h2>
          <button onClick={onClose} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy hover:bg-navy/5 focus-ring" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          <div className="font-mono text-[13px] text-muted-ink">{inquiry.reference_number}</div>
          <h3 className="mt-1 font-heading text-xl font-bold text-ink">{inquiry.full_name}</h3>

          <div className="mt-4 flex flex-wrap gap-2">
            <a href={`tel:${inquiry.phone_country_code}${inquiry.phone_number}`} className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-[13px] font-medium text-ink hover:border-gold focus-ring">
              <Phone className="h-4 w-4 text-blue" /> Call
            </a>
            <a href={`mailto:${inquiry.email}`} className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-[13px] font-medium text-ink hover:border-gold focus-ring">
              <Mail className="h-4 w-4 text-gold" /> Email
            </a>
            <a href={whatsappLink(`Hello ${inquiry.full_name}, regarding your UAE business setup inquiry (${inquiry.reference_number}).`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-[13px] font-medium text-ink hover:border-gold focus-ring">
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
            </a>
          </div>

          <div className="mt-5">
            <Row label="Email" value={inquiry.email} />
            <Row label="Phone" value={phone} />
            <Row label="Country" value={inquiry.country_of_residence} />
            <Row label="Contact method" value={inquiry.preferred_contact_method} />
            <Row label="Service" value={inquiry.service_required} />
            <Row label="Business activity" value={inquiry.business_activity} />
            <Row label="Shareholders" value={inquiry.shareholder_count} />
            <Row label="Visas" value={inquiry.visa_count} />
            <Row label="Timeline" value={inquiry.estimated_timeline} />
            <Row label="Budget" value={inquiry.estimated_budget} />
            <Row label="Source" value={inquiry.source_page} />
            <Row label="Submitted" value={inquiry.created_date ? new Date(inquiry.created_date).toLocaleString("en-GB") : "—"} />
          </div>

          {inquiry.message && (
            <div className="mt-4 rounded-lg border border-border bg-card p-4">
              <div className="text-[13px] font-semibold text-ink">Message</div>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-ink">{inquiry.message}</p>
            </div>
          )}

          <div className="mt-5">
            <label className="text-[13px] font-semibold text-ink">Status</label>
            <select
              value={inquiry.status}
              onChange={(e) => onStatusChange(e.target.value)}
              className="mt-1.5 h-11 w-full rounded-lg border border-input bg-card px-3 text-[14px] text-ink focus-ring"
            >
              {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="mt-5">
            <label className="text-[13px] font-semibold text-ink">Internal Notes</label>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add private notes about this inquiry..."
              className="mt-1.5 w-full rounded-lg border border-input bg-card px-3 py-2.5 text-[14px] text-ink focus-ring"
            />
            <button
              onClick={() => onSaveNotes(notes)}
              className="mt-2 inline-flex h-10 items-center rounded-lg bg-navy px-4 text-[13px] font-medium text-white transition-colors hover:bg-navy-secondary focus-ring"
            >
              Save Notes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}