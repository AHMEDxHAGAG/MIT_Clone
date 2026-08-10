"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      aria-pressed={theme === "light"}
      className="srg-theme-toggle"
      onClick={toggleTheme}
      title="Toggle between our light and dark theme. We default to your system theme."
      type="button"
    >
      {theme === "dark" ? "Light Theme" : "Dark Theme"}
    </button>
  );
}
