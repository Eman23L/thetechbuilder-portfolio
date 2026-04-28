import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thetechbuilder.co.uk"),
  title: {
    default: "The Tech Builder | Emmanuel Bamgbala",
    template: "%s | The Tech Builder",
  },
  description:
    "Premium software engineering portfolio for Emmanuel Bamgbala, The Tech Builder.",
  openGraph: {
    title: "The Tech Builder | Emmanuel Bamgbala",
    description:
      "Modern digital systems, automation tools, dashboards, and scalable web platforms.",
    url: "https://thetechbuilder.co.uk",
    siteName: "The Tech Builder",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
