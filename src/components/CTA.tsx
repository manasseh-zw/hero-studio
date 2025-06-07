import { Button } from "@heroui/button";

export default function CTA() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-zinc-950 px-6 pt-16 shadow-2xl sm:rounded-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-28 lg:text-left">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Transform your workflow with AI-powered insights
            </h2>
            <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              Experience the future of project management. Our AI assistant helps you track progress, predict bottlenecks, and keep your team aligned.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Button
                size="md"
                radius="md"
                color="primary"
                className="bg-gradient-to-r from-pink-100 via-teal-100 to-purple-200 text-black font-medium border-none hover:scale-105 active:scale-95 transition-transform shadow-lg w-full sm:w-auto"
              >
                Start Free Trial
              </Button>
              <a href="#" className="text-sm/6 font-semibold text-white">
                See how it works <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="/showcase.png"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
