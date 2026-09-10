"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [role, setRole] = useState("");
  useEffect(() => {
    fetch("/api/auth/me", { credentials: "include" })
      .then(r => r.json()).then(d => setRole(d.user?.role || ""));
  }, []);

  return (
    <main className="shell">
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Market Place</h1>
      <p>Connect clients with freelancers.</p>
      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/projects">Browse Projects</Link>
        {role === "client" && <Link href="/create-project">Create Project</Link>}
        {role && <Link href="/contracts">My Contracts</Link>}
        {role === "freelancer" && <Link href="/proposals/mine">My Proposals</Link>}
        {role && <button onClick={async () => { await fetch("/api/auth/logout", { method: "POST", credentials: "include" }); window.location.href = "/"; }}>Logout</button>}
      </div>
    </main>
  );
}
