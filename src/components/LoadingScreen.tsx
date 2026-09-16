"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep it fast, 1.5 seconds maximum as requested
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-100 dark:bg-zinc-950"
        >
          <div className="relative flex items-center justify-center">
            {/* The Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-10 h-24 w-24 overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-zinc-900"
            >
              <Image
                src="/asset/logo.png"
                alt="Logo"
                fill
                sizes="96px"
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Light trace / Sweep effect around the logo */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-10px] z-0 rounded-3xl bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(0,0,0,0.1)_360deg)] dark:bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,255,255,0.2)_360deg)] opacity-70"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
