import HeroAvatarGroup from "@/Components/HeroAvatarGroup";
import Ticker from "@/Components/Ticker";
import { brandLogos } from "@/data/logos";
import { Button } from "@heroui/button";
import { Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col space-y-28  overflow-hidden px-8 py-16">
      <div className="absolute inset-0 h-full w-full -z-10 overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1.5px,transparent_1.5px),linear-gradient(to_bottom,#27272a_1.5px,transparent_1.5px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_150%)]">
          {/* Central glow effect */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[400px] w-[800px] rounded-full bg-gradient-to-b from-black to-secondary/40 blur-[100px] opacity-60" />
          </div>
        </div>
      </div>

      <section className="z-20 flex flex-col items-center justify-center gap-[20px] sm:gap-6 mt-28 relative">
        <div className="absolute w-[90%] h-[80%] top-[10%] left-[5%] bg-black/15 rounded-full blur-2xl -z-10" />

        <div>
          <HeroAvatarGroup />
        </div>

        <div className="text-center font-roboto font-extrabold  leading-[1.1] text-[64px] relative">
          <div className="bg-hero-section-title bg-clip-text tracking- text-transparent ">
            Manage Projects Smarter <br />{" "}
            <span className="text-[60px]">And Deliver Faster.</span>
          </div>
        </div>

        <p className="text-center leading-7 text-white/60 font-roboto font-base  sm:w-[500px]  text-sm relative z-10 px-4">
          The AI-powered platform for seamless project management, intelligent
          automation, and real-time team collaboration.
        </p>

        <div className="flex flex-col items-center justify-center mt-4 gap-6 sm:flex-row">
          <Button
            size="lg"
            color="primary"
            className="bg-default-foreground font-semibold leading-5 text-background h-14"
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
      {/* <div className="pointer-events-none absolute inset-0 top-[-40%] z-10 scale-150 select-none sm:scale-125">
        <img
          className="pointer-events-none  object-cover absolute saturate-[85%] "
          src=""
          alt="background image"
        />
      </div> */}

      <div className="w-full z-10  flex justify-center">
        <div className="max-w-5xl">
          <Ticker
            shouldPauseOnHover
            gap="20px"
            className="z-10 opacity-40"
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
      </div>
    </main>
  );
}
