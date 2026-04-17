import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
    <html lang="vi" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen bg-gray-100 text-gray-800 antialiased dark:bg-gray-900 dark:text-white">
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </main>

          <footer className="border-t-4 border-emerald-600/80 bg-gray-100 dark:border-emerald-500/70 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-6xl px-4 py-5 text-center text-sm font-semibold text-gray-600 sm:px-6 lg:px-8 dark:text-gray-300">
              <p>
                © 2026 Danh Nguyễn Tuấn Khanh - 2212390. Built with Next.js và
                Tailwind CSS.
              </p>
            </div>
          </footer>
        </div>
        <Toaster richColors />
      </body>
    </html>
  );
}
