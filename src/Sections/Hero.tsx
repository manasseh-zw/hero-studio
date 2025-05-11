import HeroAvatarGroup from "@/Components/HeroAvatarGroup";
import Ticker from "@/Components/Ticker";
import { logos } from "@/data/logos";
import { Button } from "@heroui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col space-y-28  overflow-hidden px-8 py-16">
      <section className="z-20 flex flex-col items-center justify-center gap-[20px] sm:gap-6 mt-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 rounded-3xl blur-2xl -z-10" />
        <div>
          <HeroAvatarGroup />
        </div>
        <div className="text-center font-roboto font-black leading-[1.2] tracking-tight text-[64px]">
          <div className="bg-hero-section-title bg-clip-text text-transparent">
            Build Premium Apps <br />{" "}
            <span className="text-[60px]">And Ship Fast.</span>
          </div>
        </div>
        <p className="text-center font-medium leading-7 text-default-600 text-pretty sm:w-[600px] sm:text-[18px]">
          The AI-powered platform for building production-ready apps <br />
          faster, smarter, and without limits.
        </p>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Button
            size="lg"
            className="bg-default-foreground font-medium leading-5 text-background"
            radius="full"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            className="border-1 border-default-100 font-medium leading-5"
            endContent={<ArrowRight size={20} />}
            radius="full"
            variant="bordered"
          >
            See our plans
          </Button>
        </div>
      </section>

      <div className="pointer-events-none absolute inset-0 top-[-40%] z-10 scale-150 select-none sm:scale-125">
        <img
          className="pointer-events-none object-cover absolute"
          src="bg.jpeg"
          alt="background image"
        />
      </div>

      <div className="w-full z-10">
        <Ticker
          shouldPauseOnHover
          gap="40px"
          className="z-10 opacity-45"
          isReverse={false}
        >
          {logos.map(({ key, logo }) => (
            <div
              key={key}
              className="flex items-center justify-center text-foreground"
            >
              {logo}
            </div>
          ))}
        </Ticker>
      </div>
    </main>
  );
}
