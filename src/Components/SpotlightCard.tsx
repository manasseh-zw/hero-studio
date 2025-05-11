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

export default function SpotlightCard(props: CardProps) {
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
      className="group relative w-[400px] bg-zinc-900 shadow-large"
      radius="lg"
      onMouseMove={onMouseMove}
    >
      <LazyMotion features={domAnimation}>
        <m.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-250 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                rgba(120, 40, 200, 0.2),
                transparent 80%
              )
            `, // <- Add your own color here
          }}
        />
      </LazyMotion>
      <CardHeader className="relative h-60 p-0">
        <Image
          removeWrapper
          alt="Acme Planner"
          className="h-full object-cover"
          src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/calendar.png"
          style={{
            // @ts-ignore
            "-webkit-mask-image":
              "linear-gradient(to bottom, #000 70%, transparent 100%)",
          }}
        />
      </CardHeader>
      <CardBody className="px-6 pb-8 pt-4">
        <div className="flex flex-col gap-2">
          <p className="text-xl text-neutral-50">
            Get started with Acme Planner
          </p>
          <p className="text-small text-neutral-400">
            Outline, monitor, and deliver extensive work elements from inception
            to completion using project management and strategic roadmaps.
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
