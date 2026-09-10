"use client";
import { useEffect, useState } from "react";
import { Contract, getContracts } from "@/src/lib/api";

export default function ContractsPage() {
  const [items, setItems] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContracts().then(d => { setItems(d.contracts || []); setLoading(false); }).catch(() => setLoading(false));
  }, []);

  return (
    <main className="shell"><h1>Active Contracts</h1>
      {loading ? <p>Loading...</p> : items.length === 0 ? <p>No active contracts.</p> : (
        <div style={{ display: "grid", gap: "1rem" }}>
          {items.map(c => (
            <div key={c.id} style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "0.5rem" }}>
              <h3>Project: {c.projectTitle}</h3>
              <p>Amount: ${c.amount} · Status: {c.status}</p>
              <p>Client: {c.clientName} · Freelancer: {c.freelancerName}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
