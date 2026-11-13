import Link from 'next/link';
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* We'll build the forest hero here next */}

        <section
          id="pathway"
          style={{
            minHeight: "80vh",
            padding: "100px 30px",
            textAlign: "center",
            background: "#F5F1E6",
          }}
        >
          <h1>Welcome to Stability Pathway</h1>
          <p>Your journey toward stability starts here.</p>
        </section>

        <section id="organizations">
          {/* Organization directory will go here */}
        </section>
      </main>
    </>
  );
}
