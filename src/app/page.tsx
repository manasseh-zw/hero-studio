import Showcase from "@/Sections/Showcase";
import Hero from "@/Sections/Hero";
import Features from "@/Sections/Features";
import SectionDivider from "@/Components/SectionDivider";
import Integrations from "@/Sections/Integrations";
import Pricing from "@/Sections/Pricing";
import Testimonial from "@/Sections/Testimonial";
import FAQs from "@/Sections/FAQs";
import Blog from "@/Sections/Blog";
import { FadeIn } from "@/Components/FadeInAnimation";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <div className="relative flex h-dvh w-full flex-col overflow-hidden">
        <Hero />
      </div>
      <FadeIn>
        <Showcase />
      </FadeIn>
      <SectionDivider className="z-10" />
      <FadeIn>
        <Features />
      </FadeIn>
      <SectionDivider className="z-10" />
      <FadeIn>
        <Integrations />
      </FadeIn>
      <SectionDivider className="z-10" />
      <FadeIn>
        <Pricing />
      </FadeIn>
      <SectionDivider className="z-10" />
      <FadeIn>
        <Testimonial />
      </FadeIn>
      <SectionDivider className="z-10 hidden sm:flex" />
      <FadeIn>
        <FAQs />
      </FadeIn>
      <FadeIn>
        <Blog />
      </FadeIn>
    </main>
  );
}
