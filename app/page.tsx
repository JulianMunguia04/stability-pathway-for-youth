import Link from 'next/link';

import Navbar from "@/components/Navbar";
import IntroCard from "@/components/IntroCard";
import ForestPathway from "@/components/ForestPathway";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <ForestPathway />
      </main>
    </>
  );
}
