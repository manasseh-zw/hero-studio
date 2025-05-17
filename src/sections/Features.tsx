import SpotlightCard from "@/components/SpotlightCard";
import { AppFeatures } from "@/data/features";

export default function Features() {
  const purplePinkGlow = "rgba(140, 40, 180, 0.25)"; // Purple with a tad of pink

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

        {/* Mobile layout (1 column) */}
        <div className="mt-10 sm:mt-14 md:hidden space-y-6">
          {AppFeatures.map((feature) => (
            <div key={feature.name}>
              <SpotlightCard
                heading={feature.name}
                content={feature.description}
                imageSrc={feature.imageSrc}
                accentColor={purplePinkGlow}
              />
            </div>
          ))}
        </div>

        {/* Tablet layout (2 columns bento) */}
        <div className="hidden md:block lg:hidden mt-14">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <SpotlightCard
                heading={AppFeatures[0].name}
                content={AppFeatures[0].description}
                imageSrc={AppFeatures[0].imageSrc}
                size="large"
                accentColor={purplePinkGlow}
              />
            </div>

            <div>
              <SpotlightCard
                heading={AppFeatures[1].name}
                content={AppFeatures[1].description}
                imageSrc={AppFeatures[1].imageSrc}
                accentColor={purplePinkGlow}
              />
            </div>
            <div>
              <SpotlightCard
                heading={AppFeatures[2].name}
                content={AppFeatures[2].description}
                imageSrc={AppFeatures[2].imageSrc}
                accentColor={purplePinkGlow}
              />
            </div>

            <div className="col-span-2">
              <SpotlightCard
                heading={AppFeatures[3].name}
                content={AppFeatures[3].description}
                imageSrc={AppFeatures[3].imageSrc}
                size="large"
                accentColor={purplePinkGlow}
              />
            </div>
          </div>
        </div>

        {/* Desktop layout (complex bento grid) */}
        <div className="hidden lg:block mt-20">
          <div className="grid grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* First row */}
            <div className="col-span-8 row-span-1">
              <SpotlightCard
                heading={AppFeatures[0].name}
                content={AppFeatures[0].description}
                imageSrc={AppFeatures[0].imageSrc}
                size="large"
                accentColor={purplePinkGlow}
              />
            </div>
            <div className="col-span-4 row-span-1">
              <SpotlightCard
                heading={AppFeatures[1].name}
                content={AppFeatures[1].description}
                imageSrc={AppFeatures[1].imageSrc}
                size="medium"
                accentColor={purplePinkGlow}
              />
            </div>

            <div className="col-span-6 row-span-1">
              <SpotlightCard
                heading={AppFeatures[2].name}
                content={AppFeatures[2].description}
                imageSrc={AppFeatures[2].imageSrc}
                size="medium"
                accentColor={purplePinkGlow}
              />
            </div>
            <div className="col-span-6 row-span-1">
              <SpotlightCard
                heading={AppFeatures[3].name}
                content={AppFeatures[3].description}
                imageSrc={AppFeatures[3].imageSrc}
                size="medium"
                accentColor={purplePinkGlow}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
