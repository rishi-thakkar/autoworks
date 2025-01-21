import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import { Exo } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-space-grotesk',
});

const exo = Exo({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-exo',
});

export const metadata: Metadata = {
  title: "FUTURE AUTO",
  description: "Premium Car Wrapping Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${spaceGrotesk.variable} ${exo.variable} font-sans antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
