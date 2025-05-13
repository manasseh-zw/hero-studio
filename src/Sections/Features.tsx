import SpotlightCard from "@/Components/SpotlightCard";
import { AppFeatures } from "@/data/features";

export default function Features() {
  return (
    <div className="py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
          <div className="text-center font-roboto font-bold leading-[1.2] tracking-tight text-[40px]">
            <div className="bg-hero-section-title bg-clip-text text-transparent">
              Features <br />{" "}
            </div>
          </div>
          <p className="mx-auto text-center font-small leading-7 text-default-600 text-pretty sm:w-[600px] sm:text-[18px]">
            Skip the boilerplate and jump straight into creating with AI-powered
            code generation and intuitive drag-and-drop components.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-7xl px-1  sm:mt-20 md:mt-24 md:px-2 lg:px-6">
          <dl className="mx-auto grid max-w-4xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {AppFeatures.map((feature) => (
              <div key={feature.name} className="flex justify-center">
                <SpotlightCard
                  heading={feature.name}
                  content={feature.description}
                  imageSrc={feature.imageSrc}
                />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
