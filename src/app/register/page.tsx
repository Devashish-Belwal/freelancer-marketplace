"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signup } from "@/src/lib/api";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"client" | "freelancer">("freelancer");
  const [msg, setMsg] = useState("");

  async function handle(e: React.FormEvent) {
    e.preventDefault();
    try {
      await signup({ name, email, password, role });
      setMsg("Registered! Redirecting to login...");
      router.replace("/login");
    } catch (err: unknown) {
      setMsg((err as { message?: string })?.message || "Failed");
    }
  }

  return (
    <main className="shell"><h1>Register</h1>
    <form onSubmit={handle} style={{ display: "grid", gap: "0.75rem" }}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <select value={role} onChange={e => setRole(e.target.value as "client" | "freelancer")}><option value="client">Client</option><option value="freelancer">Freelancer</option></select>
      <button>Register</button>
    </form>
    <p>{msg}</p>
    </main>
  );
}
