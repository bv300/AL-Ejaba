import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import Loader from "@/components/ui/Loader";
import FloatingContact from "@/components/ui/FloatingContact";
import ScrollToTop from "@/components/ui/ScrollToTop";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${site.shortName} | Interior Design & Technical Services, Dubai`,
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.legalName,
    description: site.description,
    url: site.url,
    siteName: site.shortName,
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable} font-body antialiased`}
      >
        <Loader />
        {children}
        <FloatingContact />
        <ScrollToTop />
      </body>
    </html>
  );
}