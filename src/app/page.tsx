import AppNavbar from "@/Components/Navbar";
import Features from "@/Sections/Features";
import Hero from "@/Sections/Hero";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <div className="relative flex h-dvh w-full flex-col overflow-hidden">
        <AppNavbar />
        <Hero />
      </div>
      <Features />
    </main>
  );
}
