"use client";

import { Link } from "next-view-transitions";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";
import { useEffect, useState } from "react";

const messages: string[] = [
  "Page not found...",
  "Looks like you're lost.",
  "Let's get you back on track!",
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
  exit: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.3 } },
  exit: { opacity: 0, y: -12, transition: { ease: "easeIn", duration: 0.2 } },
};

export default function NotFound() {
  const [index, setIndex] = useState<number>(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6">
        <h1 className="text-primary text-8xl font-bold">404</h1>
        <p className="text-secondary text-xl">{messages[0]}</p>
        <Link href="/" className="text-primary hover:underline">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <motion.h1
        className="text-primary text-8xl font-bold"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        404
      </motion.h1>

      <div className="flex h-8 items-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="text-secondary flex text-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {messages[index].split("").map((char, i) => (
              <motion.span key={i} variants={charVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <Link href="/" className="text-primary hover:underline">
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
