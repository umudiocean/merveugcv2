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
  title: "Merve UGC – High-Converting TikTok & Reels UGC Videos",
  description: "UGC content creator specializing in performance marketing and A/B testing for DTC and e-commerce brands. TikTok & Reels focused.",
  keywords: ["UGC", "User Generated Content", "TikTok Ads", "Reels", "Performance Marketing", "DTC", "E-commerce", "Content Creator"],
  authors: [{ name: "Merve UGC" }],
  creator: "Merve UGC",
  publisher: "Merve UGC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://merveugc.com",
    title: "Merve UGC – High-Converting TikTok & Reels UGC Videos",
    description: "UGC content creator specializing in performance marketing and A/B testing for DTC and e-commerce brands.",
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
    title: "Merve UGC – High-Converting TikTok & Reels UGC Videos",
    description: "UGC content creator specializing in performance marketing and A/B testing for DTC and e-commerce brands.",
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
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

