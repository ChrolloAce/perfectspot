import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Perfect Spot - Discover Amazing Places",
  description: "Find and save your favorite spots with Perfect Spot. Swipe, discover, and explore amazing places around you.",
  keywords: "perfect spot, location finder, place discovery, save places, app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
