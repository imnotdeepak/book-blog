"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  type ThemeKey = "classic" | "academia";
  const [theme, setTheme] = useState<ThemeKey>("classic");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "academia" || saved === "classic") {
        setTheme(saved as ThemeKey);
        document.documentElement.setAttribute("data-theme", saved);
      }
    } catch {}
  }, []);

  const toggleTheme = () => {
    const next: ThemeKey = theme === "classic" ? "academia" : "classic";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Book Blog
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/reviews" className="hover:underline underline-offset-4">
            Reviews
          </Link>
          <Link href="/tbr" className="hover:underline underline-offset-4">
            TBR
          </Link>
          <Link href="/about" className="hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-4">
            Contact
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="ml-2 inline-flex items-center justify-center h-8 w-8 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
            aria-label={
              theme === "classic"
                ? "Switch to Dark Academia"
                : "Switch to Classic Library"
            }
            title={theme === "classic" ? "Dark Academia" : "Classic Library"}
          >
            {theme === "classic" ? (
              <span aria-hidden>🌙</span>
            ) : (
              <span aria-hidden>☀️</span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
