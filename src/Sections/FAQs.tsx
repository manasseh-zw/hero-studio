"use client";
import { faqs } from "@/data/faq";
import { Accordion, AccordionItem } from "@heroui/react";
import { Plus } from "lucide-react";

export default function FAQs() {
  return (
    <section id="faq" className="relative mx-auto w-full px-4 py-14 sm:py-14">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 sm:gap-14">
        <div className="text-center">
          <h2 className="bg-hero-section-title bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            <span className="inline-block sm:hidden">Our FAQs</span>
            <span className="hidden sm:inline-block">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-default-500 max-w-[280px] sm:max-w-[500px] mx-auto">
            Everything you need to know about Hero Studio and how it can help
            your team.
          </p>
        </div>

        <Accordion
          fullWidth
          keepContentMounted
          itemClasses={{
            base: "px-0 sm:px-2 md:px-6",
            title: "font-medium text-base sm:text-lg",
            trigger: "py-4 sm:py-6 flex-row-reverse",
            content: "pt-0 pb-4 sm:pb-6 text-sm sm:text-base text-default-500",
            indicator: "rotate-0 data-[open=true]:-rotate-45",
          }}
          items={faqs}
          selectionMode="multiple"
          className="w-full"
        >
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              indicator={<Plus className="text-secondary-300" size={20} />}
              title={item.title}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" />
    </section>
  );
}
