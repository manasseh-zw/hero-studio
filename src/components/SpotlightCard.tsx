"use client";

import { CardProps, Card, CardHeader, CardBody, Image } from "@heroui/react";
import {
  useMotionValue,
  LazyMotion,
  domAnimation,
  m,
  useMotionTemplate,
} from "framer-motion";
import React from "react";

interface SpotlightCardProps extends CardProps {
  heading?: string;
  content?: string;
  imageSrc?: string;
  imageAlt?: string;
  size?: "small" | "medium" | "large";
  accentColor?: string;
}

export default function SpotlightCard({
  heading = "Get started with Acme Planner",
  content = "Outline, monitor, and deliver extensive work elements from inception to completion using project management and strategic roadmaps.",
  imageSrc = "/feature6.jpg",
  imageAlt = "Acme Planner",
  size = "medium",
  accentColor = "rgba(120, 40, 200, 0.2)",
  ...props
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = React.useRef<HTMLDivElement>(null);

  function onMouseMove({
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!cardRef?.current) return;
    const { left, top } = cardRef.current?.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Adjust image height based on card size
  const getImageHeight = () => {
    switch (size) {
      case "small":
        return "h-[8rem] lg:h-[8rem]";
      case "large":
        return "h-[14rem] lg:h-[14rem]";
      case "medium":
      default:
        return "h-[10.9rem] lg:h-[10.2rem]";
    }
  };

  return (
    <Card
      {...props}
      ref={cardRef}
      className={`group relative w-full bg-zinc-900 shadow-large font-roboto h-full border-1 border-zinc-800/30`}
      radius="md"
      onMouseMove={onMouseMove}
    >
      <LazyMotion features={domAnimation}>
        <m.div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                350px circle at ${mouseX}px ${mouseY}px,
                ${accentColor},
                rgba(80, 40, 140, 0.08) 40%,
                rgba(0, 0, 0, 0) 70%
              )
            `,
          }}
        />
      </LazyMotion>
      <CardHeader className={`relative ${getImageHeight()} p-0`}>
        <Image
          removeWrapper
          alt={imageAlt}
          className="h-full w-full object-cover bg-blend-darken"
          src={imageSrc || "/placeholder.svg"}
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 70%, transparent 100%)",
          }}
        />
      </CardHeader>
      <CardBody className="px-6 pb-8 pt-4 font-light">
        <div className="flex flex-col gap-2">
          <p className="text font-semibold text-neutral-300">{heading}</p>
          <p className="text-small text-gray-400">{content}</p>
        </div>
      </CardBody>
    </Card>
  );
}
