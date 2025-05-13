"use client";

import { useMotionValue, LazyMotion, domAnimation, m, useMotionTemplate } from "framer-motion";
import React from "react";

const IntegrationGridItem = ({ children }: { children: React.ReactNode }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const logoRef = React.useRef<HTMLDivElement>(null);

  function onMouseMove({
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!logoRef?.current) return;
    const { left, top } = logoRef.current?.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="flex h-28 w-60 items-center justify-center rounded-small bg-default-200/50 text-foreground dark:bg-default-50/50">
      <div
        ref={logoRef}
        onMouseMove={onMouseMove}
        className="group relative w-full h-full flex items-center justify-center"
      >
        <LazyMotion features={domAnimation}>
          <m.div
            className=" pointer-events-none absolute inset-0 opacity-0 transition duration-250 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  350px circle at ${mouseX}px ${mouseY}px,
                  rgba(200, 120, 150, 0.15),
                  rgba(120, 80, 120, 0.12) 40%,
                  rgba(60, 40, 80, 0.08) 65%,
                  transparent 90%

                )
              `,
            }}
          />
        </LazyMotion>
        <div className="relative z-10  group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[rgba(200,120,150,1)] group-hover:via-[rgba(120,80,120,1)] group-hover:to-[rgba(60,40,80,1)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default IntegrationGridItem; 