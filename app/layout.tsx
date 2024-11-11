import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iyaad's Eco-Friendly School",
  description: "An eco-friendly model of our school by Iyaad - Exploring sustainable education and environmental initiatives",
  keywords: ["eco-friendly school", "sustainable education", "environmental initiatives", "green school", "sustainability"],
  authors: [{ name: "Iyaad" }],
  openGraph: {
    title: "Iyaad's Eco-Friendly School",
    description: "An eco-friendly model of our school by Iyaad - Exploring sustainable education and environmental initiatives",
    type: "website",
    locale: "en_US",
    siteName: "Iyaad's Eco-Friendly School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iyaad's Eco-Friendly School",
    description: "An eco-friendly model of our school by Iyaad - Exploring sustainable education and environmental initiatives",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#4CAF50",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
