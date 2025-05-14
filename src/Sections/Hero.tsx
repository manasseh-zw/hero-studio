import HeroAvatarGroup from "@/Components/HeroAvatarGroup";
import Ticker from "@/Components/Ticker";
import { brandLogos } from "@/data/logos";
import { Button } from "@heroui/button";
import { Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="relative  overflow-hidden">
      {/* Background overlay with specific color */}
      <div className="absolute inset-0 bg-[#08090A]/85 mix-blend-multiply" />

      {/* Gradient transition to bottom - MODIFIED for smoother transition */}
      <div className="absolute bottom-0 left-0 right-0 h-72 sm:h-96 bg-gradient-to-t from-[#08090A] via-[#08090A]/70 to-transparent z-10" />

      {/* Left gradient blob */}
      <div
        className="absolute -left-80 -top-0 transform-gpu blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Right gradient blob */}
      <div
        className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Grid overlay - now starting from the top */}
      <div className="absolute inset-0 h-full w-full -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1.5px,transparent_1.5px),linear-gradient(to_bottom,#27272a_1.5px,transparent_1.5px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_70%,transparent_150%)]">
          {/* Central glow effect - moved higher */}
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[600px] w-[1000px] rounded-full bg-gradient-to-b from-secondary/50 to-black/40 blur-[120px] opacity-70" />
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col space-y-16 sm:space-y-28 px-4 sm:px-8 py-12 sm:py-16">
        <section className="z-20 flex flex-col items-center justify-center gap-4 sm:gap-6 mt-20 sm:mt-24 relative">
          <div className="absolute w-[90%] h-[80%] top-[10%] left-[5%] bg-black/15 rounded-full blur-2xl -z-10" />

          <div>
            <HeroAvatarGroup />
          </div>

          <div className="text-center font-roboto font-extrabold leading-[1.1] mt-2">
            <div className="bg-gradient-to-r from-pink-100 via-teal-100 to-purple-200 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Manage Projects Smarter <br className="hidden sm:block" />
              <span>And Deliver Faster.</span>
            </div>
          </div>

          <p className="text-center leading-7 bg-gradient-to-r from-pink-200 via-white to-purple-300 bg-clip-text text-transparent  font-roboto text-sm sm:text-base max-w-[280px] sm:max-w-[500px] relative z-10 px-2 sm:px-4">
            The AI-powered platform for seamless project management, smart
            automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center mt-6 sm:mt-8 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
            <Button
              size="lg"
              radius="lg"
              color="primary"
              className="bg-gradient-to-r from-pink-100 via-teal-100 to-purple-200 text-black font-medium border-none hover:scale-105 active:scale-95 transition-transform shadow-lg w-full sm:w-auto"
            >
              Get Started
            </Button>

            <Link
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                radius="lg"
                className="w-full sm:w-auto border border-white/30 font-medium leading-5"
                variant="bordered"
                endContent={<Play size={20} className="ml-2" />}
              >
                Demo
              </Button>
            </Link>
          </div>
        </section>

        {/* Brand ticker section */}
        <div className="w-full z-10 flex justify-center">
          <div className="max-w-5xl">
            <Ticker
              shouldPauseOnHover
              gap="20px"
              className="z-10 opacity-50"
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
      </div>
    </main>
  );
}
