export default function Showcase() {
  return (
    <section className="pt-16 pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
        <div className="text-center font-roboto font-bold leading-[1.2] tracking-tight text-[40px]">
          <div className="bg-hero-section-title bg-clip-text text-transparent">
            Smarter Workflows
          </div>
        </div>
        <p className="mx-auto text-center font-small leading-7 text-default-600 text-pretty sm:w-[600px] sm:text-[18px]">
          Automate, collaborate, and track your team&apos;s progress with
          AI-powered insights and real-time project updates.
        </p>
      </div>

      {/* Image with gradient overlay */}
      <div className="relative mx-auto max-w-7xl px-2 pt-16">
        <div className="flex w-full justify-center aspect-video overflow-hidden rounded-xl">
          <img
            src="/STUDIO.png"
            alt="App screenshot"
            className="h-full z-10 object-cover shadow-2xl ring-1 ring-white/10"
          />
        </div>
        <div className="relative" aria-hidden="true">
          <div className="absolute -inset-x-1 bottom-0 bg-gradient-to-t from-[#08090A] pt-[20%] z-10" />
        </div>
      </div>
    </section>
  );
}
