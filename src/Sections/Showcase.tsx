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
        <div
          aria-hidden="true"
          className="px:5 absolute inset-x-0 top-3 z-0 h-full w-full transform-gpu overflow-hidden blur-3xl md:right-20 md:h-auto md:w-auto md:px-36"
        >
          <div
            className="mx-auto aspect-[1155/678] w-[72.1875rem] opacity-30"
            style={{
              background:
                "linear-gradient(to top right, rgba(60, 40, 80, 0.8), rgba(120, 80, 120, 0.8), rgba(200, 120, 150, 0.8))",
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          aria-hidden="true"
          className="px:5 absolute inset-x-0 top-3 z-0 h-full w-full transform-gpu overflow-hidden blur-3xl md:right-20 md:h-auto md:w-auto md:px-36"
        >
          <div
            className="mx-auto aspect-[1155/678] w-[72.1875rem] opacity-30"
            style={{
              background:
                "linear-gradient(to top right, rgba(60, 40, 80, 0.8), rgba(120, 80, 120, 0.8), rgba(200, 120, 150, 0.8))",
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="flex w-full justify-center aspect-video overflow-hidden rounded-xl">
          <img
            src="/STUDIO.png"
            alt="App screenshot"
            className="h-full z-10 object-cover shadow-2xl ring-1 ring-white/10"
          />
        </div>
        <div className="relative" aria-hidden="true">
          <div className="absolute -inset-x-1 bottom-0 bg-gradient-to-t from-black pt-[10%]" />
        </div>
      </div>
    </section>
  );
}
