import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the home page.</p>
      <img src="us.jpg" alt="Us" className="w-100 h-auto"></img>
      
      {/* Navigation link */}
      <Link href="/about" style={{ color: "blue", textDecoration: "underline" }}>
        Go to About Page &rarr;
      </Link>
    </main>
  );
}