import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./ui/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yara Khairat",
  description:
    "On a mission to shape the future of finance. Entrepreneur, investor, and thought leader building boldly in the crypto space with conviction and clarity.",
  openGraph: {
    title: "Yara - Entrepreneur, investor, and thought leader",
    description:
      "On a mission to shape the future of finance. Entrepreneur, investor, and thought leader building boldly in the crypto space with conviction and clarity.",

    type: "website",
    locale: "en_US",
    url: "",
    siteName: "Yara Khairat",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Yara",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
