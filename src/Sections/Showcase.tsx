export default function Showcase() {
  return (
    <section id="showcase" className="pt-20 sm:pt-16 pb-10 sm:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="text-center font-roboto font-bold leading-[1.2] tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-[40px]">
          <div className="bg-hero-section-title bg-clip-text text-transparent">
            Hero Studio
          </div>
        </div>
        <p className="mx-auto text-center font-small leading-7 text-default-600 text-pretty text-sm sm:text-base md:text-[18px] max-w-[280px] sm:max-w-[500px] md:max-w-[600px]">
          Automate, collaborate, and track your team&apos;s progress with
          AI-powered insights and real-time project updates.
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-3 sm:px-4 pt-8 sm:pt-16">
        <div className="flex w-full justify-center">
          <div className="w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] aspect-[1463 /1000] overflow-hidden rounded-lg sm:rounded-xl">
            <img
              src="/showcase.png"
              alt="App screenshot"
              className="h-full w-full object-cover shadow-xl sm:shadow-2xl ring-1 ring-white/10"
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative" aria-hidden="true">
          <div className="absolute -inset-x-1 bottom-0 bg-gradient-to-t from-[#08090A] pt-[20%] z-10" />
        </div>
      </div>
    </section>
  );
}
