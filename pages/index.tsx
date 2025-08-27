import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [img, setImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function generate() {
    setLoading(true);
    setError(null);
    setImg(null);
    try {
      const res = await fetch("/api/generate3d", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      // Expecting Workers AI SDXL to return { result: "<base64>" } for demo
      const base64 = data?.result || data?.image || data?.output || null;
      if (!base64) throw new Error("No image returned");
      setImg(`data:image/png;base64,${base64}`);
    } catch (e:any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>AI3D SaaS</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <div className="container">
        <div className="header">
          <h1>AI3D SaaS</h1>
          <div className="badge">Next.js • Cloudflare AI • Stripe</div>
        </div>

        <div className="card">
          <h2>Generate (demo)</h2>
          <p>Describe your 3D model (this demo generates an image via Workers AI).</p>
          <input
            value={prompt}
            onChange={(e)=>setPrompt(e.target.value)}
            placeholder="e.g. a futuristic robot pointing at the stars"
          />
          <button onClick={generate} disabled={loading || !prompt.trim()}>
            {loading ? "Generating..." : "Generate"}
          </button>
          {error && <p style={{color:"#ff8899"}}>Error: {error}</p>}
          <div className="preview">
            {img && <img src={img} alt="Preview" />}
          </div>
        </div>

        <div className="footer">
          <p>
            Go to <Link href="/dashboard">Dashboard</Link> • Checkout <Link href="/api/checkout">Stripe</Link>
          </p>
        </div>
      </div>
    </>
  );
}
