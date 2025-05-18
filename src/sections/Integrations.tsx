import Ticker from "@/components/Ticker";
import { brandLogos } from "@/data/logos";
import IntegrationGridItem from "@/components/IntegrationGridItem";

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-14 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col justify-center items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
        <div className="text-center lg:text-left">
          <span className="text-neutral-400 bg-clip-text text-2xl sm:text-3xl font-semibold leading-7">
            Integrations
          </span>
          <div className="bg-hero-section-title bg-clip-text pt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight lg:inline-block">
            <p className="sm:hidden">Powerful seamless integrations</p>
            <p className="hidden sm:block">
              Powerful
              <br />
              seamless
              <br />
              integrations
            </p>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm font-normal text-muted-foreground tracking-wide">
              Connect with your favorite tools and services
            </p>
          </div>
        </div>

        <div className="w-full space-y-4">
          <div className="flex w-full flex-wrap items-center justify-center gap-1.5">
            <Ticker
              isVertical
              duration={50}
              gap="6px"
              className="hidden sm:block"
              isReverse={false}
            >
              {brandLogos.map(({ key, logo }) => (
                <IntegrationGridItem key={key}>{logo}</IntegrationGridItem>
              ))}
            </Ticker>
            <Ticker
              isVertical
              duration={50}
              gap="6px"
              shouldPauseOnHover={false}
              className=""
              isReverse={false}
            >
              {brandLogos.map(({ key, logo }) => (
                <IntegrationGridItem key={key}>{logo}</IntegrationGridItem>
              ))}
            </Ticker>
          </div>
        </div>
      </div>
    </section>
  );
}
