"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { submitProposal } from "@/src/lib/api";



export default function SubmitProposalPage() {
  const params = useParams();
  const pid = params.projectId as string;
  const [coverLetter, setCoverLetter] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/me", { credentials: "include" })
      .then(r => r.json())
      .then(d => {
        if (d.user?.role !== "freelancer") {
          router.replace("/projects" + (pid ? `/${pid}` : ""));
        }
      });
  }, [pid, router]);

  async function handle(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !coverLetter.trim() ||
      Number(price) <= 0 ||
      Number(duration) <= 0
    ) {
      setMsg("Cover letter required. Price and duration must be positive.");
      return;
    }

    setLoading(true);

    try {
      await submitProposal(pid, {
        coverLetter,
        proposedPrice: Number(price),
        estimatedDuration: Number(duration),
      });

      setMsg("Proposal submitted successfully!");
      setCoverLetter("");
      setPrice("");
      setDuration("");
    } catch (err: unknown) {
      setMsg(
        err instanceof Error
          ? err.message
          : "Failed to submit proposal."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="shell"><h1>Submit Proposal</h1>
      <form onSubmit={handle} style={{ display: "grid", gap: "0.75rem" }}>
        <textarea placeholder="Cover letter" value={coverLetter} onChange={e => setCoverLetter(e.target.value)} required />
        <input type="number" placeholder="Proposed price" value={price} onChange={e => setPrice(e.target.value)} required />
        <input type="number" placeholder="Estimated duration (days)" value={duration} onChange={e => setDuration(e.target.value)} required />
        <button disabled={loading}>{loading ? "Submitting..." : "Submit Proposal"}</button>
      </form>
      {msg && <p>{msg}</p>}
    </main>
  );
}
