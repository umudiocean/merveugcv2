import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Merve UGC – High-Converting TikTok & Reels UGC Videos | 100+ Brand Collaborations",
  description: "UGC content creator with 100+ brand partnerships including Zara, Nike, L'Oréal, Dyson, and Target. Specializing in fashion, beauty, technology, and lifestyle content across TikTok, Instagram Reels, and YouTube Shorts.",
  keywords: ["UGC", "User Generated Content", "TikTok Ads", "Reels", "Performance Marketing", "DTC", "E-commerce", "Content Creator", "Brand Collaborations", "Fashion UGC", "Beauty UGC", "Tech UGC"],
  authors: [{ name: "Merve UGC" }],
  creator: "Merve UGC",
  publisher: "Merve UGC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://merveugc.com",
    title: "Merve UGC – High-Converting TikTok & Reels UGC Videos | 100+ Brand Collaborations",
    description: "UGC content creator with 100+ brand partnerships including Zara, Nike, L'Oréal, Dyson, and Target. Specializing in authentic, high-converting content across 10+ industries.",
    siteName: "Merve UGC",
    // images: [
    //   {
    //     url: "/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Merve UGC",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merve UGC – High-Converting TikTok & Reels UGC Videos | 100+ Brand Collaborations",
    description: "UGC content creator with 100+ brand partnerships. Specializing in authentic, high-converting content across fashion, beauty, technology, and lifestyle industries.",
    // images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

