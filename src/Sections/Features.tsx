import SpotlightCard from "@/Components/SpotlightCard";
import { AppFeatures } from "@/data/features";

export default function Features() {
  return (
    <section id="features" className="py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-6 sm:space-y-8">
          <div className="text-center font-roboto font-bold leading-[1.2] tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-[40px]">
            <div className="bg-hero-section-title bg-clip-text text-transparent">
              Features
            </div>
          </div>
          <p className="mx-auto text-center font-small leading-7 text-default-600 text-pretty text-sm sm:text-base md:text-[18px] max-w-[280px] sm:max-w-[500px] md:max-w-[600px]">
            Supercharge your team&apos;s productivity with AI-driven project
            insights, automated task management, and seamless collaboration –
            all in one powerful platform.
          </p>
        </div>

        <div className="mx-auto mt-10 sm:mt-14 md:mt-20 max-w-5xl">
          <dl
            className="mx-auto grid grid-cols-1 gap-6 sm:gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 
          px-3 lg:px-0
          lg:mx-0 lg:max-w-none lg:grid-cols-3 "
          >
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
    </section>
  );
}
