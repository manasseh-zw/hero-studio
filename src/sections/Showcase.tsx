export default function Showcase() {
  return (
    <section id="showcase" className="sm:mt-[-80px] sm:pt-16 pb-10 sm:pb-14">
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
