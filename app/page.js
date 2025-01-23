import Image from "next/image";
import { About, Discovery, Hero, Shop } from "./_components";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="boundry relative">
        <Hero />
        <About />
        <Shop />
        <Discovery />
      </div>
    </main>
  );
}
