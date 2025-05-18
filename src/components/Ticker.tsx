/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client";

import { ScrollShadowProps, ScrollShadow, cn } from "@heroui/react";
import React from "react";

export default function Ticker({
  className,
  isReverse,
  isVertical = false,
  gap = "1rem",
  showShadow = true,
  shouldPauseOnHover = true,
  duration = 40,
  children,
  ...props
}) {
  const shadowProps: ScrollShadowProps = {
    isEnabled: showShadow,
    offset: -20,
    size: 300,
    orientation: isVertical ? "vertical" : "horizontal",
    visibility: "both",
  };

  return (
    <>
      <style jsx>{`
        @keyframes scrolling-banner {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - var(--gap)/2)); }
        }
        
        @keyframes scrolling-banner-vertical {
          from { transform: translateY(0); }
          to { transform: translateY(calc(-50% - var(--gap)/2)); }
        }

        .animate-scrolling-banner {
          animation: scrolling-banner var(--duration) linear infinite;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .animate-scrolling-banner-vertical {
          animation: scrolling-banner-vertical var(--duration) linear infinite;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .animate-scrolling-banner:hover,
        .animate-scrolling-banner-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>
      <ScrollShadow
        {...props}
        {...shadowProps}
        className={cn(
          "flex",
          {
            "w-full": !isVertical,
            "overflow-y-hidden": isVertical,
            "overflow-x-hidden": !isVertical,
            "max-h-[calc(100vh_-_200px)]": isVertical,
          },
          className
        )}
        style={{
          "--gap": gap,
          "--duration": `${duration}s`,
        }}
      >
        <div
          className={cn("flex w-max items-stretch gap-[--gap]", {
            "flex-col": isVertical,
            "h-full": isVertical,
            "animate-scrolling-banner": !isVertical,
            "animate-scrolling-banner-vertical": isVertical,
            "[animation-direction:reverse]": isReverse,
          })}
        >
          {React.Children.map(children, (child) => React.cloneElement(child))}
        </div>
      </ScrollShadow>
    </>
  );
}
