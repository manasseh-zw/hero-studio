export default function Features() {
  return (
    <>
      <div className="mt-4 sm:mt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
          <div className="text-center font-roboto font-bold leading-[1.2] tracking-tight text-[40px]">
            <div className="bg-hero-section-title bg-clip-text text-transparent">
              Effortless App Building <br />{" "}
            </div>
          </div>
          <p className=" mx-auto text-center font-small leading-7 text-default-600 text-pretty sm:w-[600px] sm:text-[18px]">
            Skip the boilerplate and jump straight into creating with AI-powered
            code generation and intuitive drag-and-drop components.
          </p>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              src="showcase.webp"
              alt="App screenshot"
              className=" rounded-xl shadow-2xl ring-1 ring-white/10"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
