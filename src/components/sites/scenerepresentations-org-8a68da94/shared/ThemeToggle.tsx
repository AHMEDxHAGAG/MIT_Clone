"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const themeChangeEvent = "srg-theme-change";

function subscribeToThemeChange(onStoreChange: () => void) {
  window.addEventListener(themeChangeEvent, onStoreChange);
  return () => window.removeEventListener(themeChangeEvent, onStoreChange);
}

function getThemeSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerThemeSnapshot(): Theme {
  return "dark";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToThemeChange,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event(themeChangeEvent));
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
