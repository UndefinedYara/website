import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./ui/components/navbar";

export const metadata: Metadata = {
  title: "Yara Khairat | Web-centric Software Developer",
  description:
    "Check out my work and do reach out—I'm always up for new challenges!",
  openGraph: {
    title: "Yara Khairat | Web-centric Software Developer",
    description:
      "Check out my work and do reach out—I'm always up for new challenges!",
    type: "website",
    locale: "en_US",
    siteName: "Yara's website ;(",
    images: [
      {
        url: "https://undefinedyara.github.io/website/images/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Yara's website ;(",
      },
    ],
  },
  appleWebApp: { title: "Yara Khairat | Web-centric Software Developer" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-manrope antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
