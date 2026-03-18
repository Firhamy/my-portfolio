import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Firdaus Ilhamy | IT Network Engineer & System Administrator",
  description: "Professional Portfolio of Muhammad Firdaus Ilhamy - IT Network Engineer at PT. Indoseiki Metal Utama. Expert in MikroTik, Proxmox, and Infrastructure Monitoring.",
  keywords: [
    "Muhammad Firdaus Ilhamy",
    "Firdaus Ilhamy",
    "IT Network Engineer",
    "System Administrator",
    "MikroTik Expert",
    "Proxmox Virtualization",
    "Network Security",
    "PT Indoseiki Metal Utama",
    "Infrastructure Monitoring",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Firdaus Ilhamy" }],
  creator: "Muhammad Firdaus Ilhamy",
  publisher: "Muhammad Firdaus Ilhamy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zayncomp.com", // Sesuaikan dengan domain Vercel Anda
    title: "Firdaus Ilhamy - IT Network Engineer & System Administrator",
    description: "Specializing in building and securing network infrastructure, managing MikroTik, Proxmox virtualization, and enterprise server monitoring.",
    siteName: "Firdaus Ilhamy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firdaus Ilhamy - IT Network Engineer",
    description: "IT Professional specializing in Network Infrastructure and System Administration.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Update link canonical ke domain Vercel Anda */}
        <link rel="canonical" href="https://firhamy-porto.vercel.app" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}