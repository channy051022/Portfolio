"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";

export default function GithubActivity() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initial check
    setIsDark(document.documentElement.classList.contains("dark"));

    // Observe changes to the HTML tag's class attribute
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "class") {
          setIsDark(document.documentElement.classList.contains("dark"));
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <GitHubCalendar 
      username="channy051022" 
      year={2026}
      blockSize={11}
      blockMargin={4}
      showColorLegend={false}
      showTotalCount={true}
      colorScheme={isDark ? "dark" : "light"}
      theme={{
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
      }}
      tooltips={{
        activity: {
          text: (activity) => `${activity.count} contributions on ${activity.date}`
        }
      }}
    />
  );
}
