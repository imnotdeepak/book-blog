import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Book Blog",
    template: "%s | Book Blog",
  },
  description: "Personal book blog with reviews and reading lists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Theme init before paint */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              const saved = localStorage.getItem('theme');
              const theme = saved === 'academia' ? 'academia' : 'classic';
              document.documentElement.setAttribute('data-theme', theme);
            } catch (_) {
              document.documentElement.setAttribute('data-theme', 'classic');
            }
          `}
        </Script>
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
