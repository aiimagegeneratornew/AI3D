import Head from "next/head";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard • AI3D SaaS</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <div className="container">
        <div className="header">
          <h1>Your Dashboard</h1>
          <Link href="/">← Back</Link>
        </div>
        <div className="card">
          <p>Welcome! Plug your auth system (Supabase) and list the user's generations, credits, and plan here.</p>
        </div>
      </div>
    </>
  );
}
