"use client";

import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FadeInStaggerContext = createContext(false);

const viewport = { once: false, margin: "0px 0px -300px" };

export function FadeIn(
  props: React.ComponentPropsWithoutRef<typeof motion.div>
) {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: shouldReduceMotion ? 0 : 35,
          scale: 0.97,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1.0,
        },
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    />
  );
}

export function FadeInStagger({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & {
  faster?: boolean;
}) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{
          staggerChildren: faster ? 0.15 : 0.25,
          delayChildren: 0.1,
        }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}
