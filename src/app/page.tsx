import AppNavbar from "@/Components/Navbar";
import Showcase from "@/Sections/Showcase";
import Hero from "@/Sections/Hero";
import Features from "@/Sections/Features";
import SectionDivider from "@/Components/SectionDivider";
import Integrations from "@/Sections/Integrations";
import Pricing from "@/Sections/Pricing";
import Testimonial from "@/Sections/Testimonial";
import FAQs from "@/Sections/FAQs";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <div className="relative flex h-dvh w-full flex-col overflow-hidden">
        <AppNavbar />
        <Hero />
      </div>
      <Showcase />
      <SectionDivider className="z-10" />
      <Features />
      <SectionDivider className="z-10" />
      <Integrations />
      <SectionDivider className="z-10" />
      <Pricing />
      <SectionDivider className="z-10" />
      <Testimonial />
      <FAQs />
    </main>
  );
}
