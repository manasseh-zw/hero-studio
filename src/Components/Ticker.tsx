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
          "hover:[animation-play-state:paused]": shouldPauseOnHover,
        })}
      >
        {React.Children.map(children, (child) => React.cloneElement(child))}
      </div>
    </ScrollShadow>
  );
}
