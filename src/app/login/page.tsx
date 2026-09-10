"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "@/src/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function handle(e: React.FormEvent) {
    e.preventDefault();
    try {
      const u = await login({ email, password });
      setMsg("Logged in!");
      if (u.user?.role === "client") router.replace("/dashboard");
      else router.replace("/projects");
    } catch (err: unknown) {
      setMsg((err as { message?: string })?.message || "Login failed");
    }
  }

  return (
    <main className="shell"><h1>Login</h1>
    <form onSubmit={handle} style={{ display: "grid", gap: "0.75rem" }}>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
    <p>{msg}</p>
    </main>
  );
}
