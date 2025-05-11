import SpotlightCard from "@/Components/SpotlightCard";
import { AppFeatures } from "@/data/features";

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
          <p className="mx-auto text-center font-small leading-7 text-default-600 text-pretty sm:w-[600px] sm:text-[18px]">
            Skip the boilerplate and jump straight into creating with AI-powered
            code generation and intuitive drag-and-drop components.
          </p>
        </div>

        {/* Image with gradient overlay */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-16">
          <div className="relative w-full aspect-video overflow-hidden rounded-xl">
            <img
              src="/showcase.webp"
              alt="App screenshot"
              className="w-full h-full object-cover shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-4xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {AppFeatures.map((feature) => (
              <div key={feature.name} className="flex justify-center">
                <SpotlightCard />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
