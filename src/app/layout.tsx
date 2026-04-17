import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export const metadata: Metadata = {
  title: "Portfolio Blog - CTK46",
  description: "Website portfolio/blog cá nhân với Next.js App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
            <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <Link
                href="/"
                className="text-lg font-bold tracking-tight text-slate-900 transition hover:text-blue-600"
              >
                Portfolio
              </Link>

              <ul className="flex items-center gap-1 sm:gap-2">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </main>

          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto w-full max-w-6xl px-4 py-5 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
              <p>© 2026 CTK46 Portfolio Blog. Built with Next.js and Tailwind CSS.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
