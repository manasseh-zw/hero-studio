"use client";
import Showcase from "@/sections/Showcase";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import SectionDivider from "@/components/SectionDivider";
import Integrations from "@/sections/Integrations";
import Pricing from "@/sections/Pricing";
import Testimonial from "@/sections/Testimonial";
import FAQs from "@/sections/FAQs";
import Blog from "@/sections/Blog";
import { FadeIn } from "@/components/FadeInAnimation";
import ReactLenis from "lenis/react";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <ReactLenis root>
      <main className="flex  w-full flex-col">
        <Hero />
        <Showcase />
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
        <Blog />
        <SectionDivider className="z-10 bg-black" />
        <CTA />
      </main>
    </ReactLenis>
  );
}
