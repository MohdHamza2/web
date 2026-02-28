import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"; // Added JetBrains Mono for tech data
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "IEEE GRSS | Orbital Data Systems",
  description: "Official website of the IEEE Geoscience and Remote Sensing Society Student Chapter.",
};

import LayoutWrapper from "@/components/LayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-space-black text-white min-h-screen overflow-x-hidden selection:bg-mission-blue selection:text-white`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
