import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Caveat, DM_Sans, Noto_Serif_Malayalam, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-hand" });
const notoMalayalam = Noto_Serif_Malayalam({ subsets: ["malayalam"], variable: "--font-malayalam", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Dr. പപ്പനും പിള്ളേരും — The Digital Memory Book",
  description: "One batch. A thousand stories. A living scrapbook for the 2025 CSE batch of TKM College of Engineering.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${caveat.variable} ${notoMalayalam.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
