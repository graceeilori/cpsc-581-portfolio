import type { Metadata } from "next";
import { Syne, DM_Sans, Caveat, Prata, IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CPSC 581 Portfolio",
  description:
    "An interactive portfolio showcasing Human-Computer Interaction projects from CPSC 581.",
  openGraph: {
    title: "CPSC 581 Portfolio",
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
        className={`${syne.variable} ${dmSans.variable} ${caveat.variable} ${prata.variable} ${ibmPlexSans.variable}`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
