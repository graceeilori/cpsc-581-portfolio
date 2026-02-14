import type { Metadata } from "next";
import { Syne, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "581 — CPSC 581 Portfolio",
  description:
    "An interactive portfolio showcasing Human-Computer Interaction projects from CPSC 581.",
  openGraph: {
    title: "581 — CPSC 581 Portfolio",
    description:
      "An interactive portfolio showcasing Human-Computer Interaction projects from CPSC 581.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${dmSans.variable} ${caveat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
