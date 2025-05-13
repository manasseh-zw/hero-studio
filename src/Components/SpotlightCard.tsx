/* eslint-disable @typescript-eslint/ban-ts-comment */
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
}

export default function SpotlightCard({
  heading = "Get started with Acme Planner",
  content = "Outline, monitor, and deliver extensive work elements from inception to completion using project management and strategic roadmaps.",
  // imageSrc = "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/calendar.png",
  imageSrc = "/feature6.jpg",
  imageAlt = "Acme Planner",
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

  return (
    <Card
      {...props}
      ref={cardRef}
      className="group relative w-full bg-zinc-950 shadow-large font-roboto"
      radius="lg"
      onMouseMove={onMouseMove}
    >
      <LazyMotion features={domAnimation}>
        <m.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-250 group-hover:opacity-100 z-10"
          style={{
            // background: useMotionTemplate`
            //   radial-gradient(
            //     350px circle at ${mouseX}px ${mouseY}px,
            //     rgba(220, 38, 107, 0.2),
            //     rgba(120, 40, 140, 0.2) 40%,
            //     rgba(40, 15, 60, 0.1) 65%,
            //     transparent 80%
            //   )
            // `,
            background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(200, 120, 150, 0.15),
              rgba(120, 80, 120, 0.12) 40%,
              rgba(60, 40, 80, 0.08) 65%,
              transparent 90%
            )
          `,
          }}
        />
      </LazyMotion>
      <CardHeader className="relative h-[12.5rem] p-0">
        <Image
          removeWrapper
          alt={imageAlt}
          className="h-full w-full object-cover bg-blend-darken"
          src={imageSrc}
          style={{
            // @ts-ignore
            "-webkit-mask-image":
              "linear-gradient(to bottom, #000 70%, transparent 100%)",
          }}
        />
      </CardHeader>
      <CardBody className="px-6 pb-8 pt-4 font-light ">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-neutral-300">{heading}</p>
          <p className="text-small text-neutral-400 ">{content}</p>
        </div>
      </CardBody>
    </Card>
  );
}
