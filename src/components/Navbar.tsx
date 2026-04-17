"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-emerald-600/80 bg-gray-100/95 backdrop-blur dark:border-emerald-500/70 dark:bg-gray-900/95">
      <nav className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-none border-2 border-emerald-700 bg-emerald-500 px-3 py-2 text-sm font-black uppercase tracking-wide text-emerald-950 shadow-sm transition hover:bg-emerald-400 dark:border-emerald-400 dark:bg-emerald-400 dark:text-emerald-950"
          >
            Minecraft Portfolio
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-none border-2 border-gray-500 bg-white text-gray-700 transition hover:bg-gray-50 md:hidden dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100"
          >
            <span className="flex flex-col gap-1">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>

          <ul className="hidden items-center gap-2 md:flex">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-none border-2 border-transparent px-3 py-2 text-sm font-bold text-gray-700 transition hover:border-emerald-600 hover:bg-emerald-100 hover:text-emerald-800 dark:text-gray-100 dark:hover:border-emerald-400 dark:hover:bg-gray-800 dark:hover:text-emerald-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {isOpen ? (
          <ul className="mt-3 grid gap-2 border-t-2 border-gray-300 pt-3 md:hidden dark:border-gray-700">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-none border-2 border-gray-400 bg-white px-3 py-2 text-sm font-bold text-gray-800 transition hover:border-emerald-600 hover:bg-emerald-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:border-emerald-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </nav>
    </header>
  );
}
