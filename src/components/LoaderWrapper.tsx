"use client";

import { useState, useEffect } from "react";
import CFLogoLoader from "./CFLogoLoader";
import { cn } from "@/lib/utils";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup in case of unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <CFLogoLoader onComplete={() => setIsLoading(false)} />}
      
      {/* 
        The main app content is mounted immediately so layout calculations can occur. 
        It fades in over 1s once loading finishes.
      */}
      <div
        className={cn(
          "transition-opacity duration-1000 ease-in-out",
          isLoading ? "opacity-0" : "opacity-100"
        )}
      >
        {children}
      </div>
    </>
  );
}
