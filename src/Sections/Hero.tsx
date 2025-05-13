import HeroAvatarGroup from "@/Components/HeroAvatarGroup";
import Ticker from "@/Components/Ticker";
import { brandLogos } from "@/data/logos";
import { Button } from "@heroui/button";
import { Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col space-y-28  overflow-hidden px-8 py-16">
      <section className="z-20 flex flex-col items-center justify-center gap-[20px] sm:gap-6 mt-28 relative">
        <div className="absolute w-[90%] h-[80%] top-[10%] left-[5%] bg-black/15 rounded-full blur-2xl -z-10" />

        <div>
          <HeroAvatarGroup />
        </div>

        <div className="text-center font-roboto font-semibold leading-[1.1] text-[64px] relative">
          <div className="bg-hero-section-title bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            Manage Projects Smarter <br />{" "}
            <span className="text-[60px]">And Deliver Faster.</span>
          </div>
        </div>

        <p className="text-center leading-7 text-default-600 text-pretty sm:w-[600px] sm:text-[16px] drop-shadow-sm relative z-10 px-4">
          The AI-powered platform for seamless project management, intelligent
          automation, and real-time team collaboration.
        </p>

        <div className="flex flex-col items-center justify-center mt-2 gap-6 sm:flex-row">
          <Button
            size="lg"
            color="primary"
            className="bg-default-foreground font-bold leading-5 text-background h-14"
            radius="full"
          >
            Get Started
          </Button>
          <Link
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="border border-default-200 font-medium leading-5 rounded-full h-14"
              variant="bordered"
              endContent={<Play size={20} className="ml-2" />}
            >
              Watch Demo
            </Button>
          </Link>
        </div>
      </section>
      <div className="pointer-events-none absolute inset-0 top-[-40%] z-10 scale-150 select-none sm:scale-125">
        <img
          className="pointer-events-none  object-cover absolute saturate-[85%] "
          src="bg.jpeg"
          alt="background image"
        />
      </div>
      p
      <div className="w-full z-10">
        <Ticker
          shouldPauseOnHover
          gap="20px"
          className="z-10 opacity-45"
          isReverse={false}
        >
          {brandLogos.map(({ key, logo }) => (
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
