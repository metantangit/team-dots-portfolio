"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionRevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * MotionReveal — single element fade-up on scroll into view.
 * Fires once per page load, triggered ~15% before the element
 * reaches the viewport center.
 */
export function MotionReveal({
  children,
  delay = 0,
  y = 24,
  className,
}: MotionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

type MotionStaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
};

const staggerContainer = (delay: number, stagger: number) => ({
  hidden: {},
  show: {
    transition: {
      delayChildren: delay,
      staggerChildren: stagger,
    },
  },
});

const staggerItem = (y: number) => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
});

/**
 * MotionStagger — wrapper that staggers direct children on reveal.
 * Each direct child should be wrapped in <MotionStaggerItem>.
 */
export function MotionStagger({
  children,
  className,
  delay = 0,
  stagger = 0.1,
}: MotionStaggerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer(delay, stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15% 0px" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * MotionStaggerItem — must be a direct child of MotionStagger.
 */
export function MotionStaggerItem({
  children,
  className,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div className={className} variants={staggerItem(y)}>
      {children}
    </motion.div>
  );
}

export default MotionReveal;
