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
  title: "MERVE TAS – Instagram UGC Creator | 100+ Brand Collaborations",
  description: "Instagram-focused UGC content creator with 100+ brand partnerships including Zara, Nike, L&apos;Oréal, Dyson, and Target. Specializing in fashion, beauty, technology, and lifestyle content. Also working with Google and Yahoo for data promotion partnerships.",
  keywords: ["UGC", "User Generated Content", "Instagram UGC", "Instagram Creator", "Performance Marketing", "DTC", "E-commerce", "Content Creator", "Brand Collaborations", "Fashion UGC", "Beauty UGC", "Tech UGC", "Google Ads", "Yahoo Ads"],
  authors: [{ name: "MERVE TAS" }],
  creator: "MERVE TAS",
  publisher: "MERVE TAS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://merveugc.com",
    title: "MERVE TAS – Instagram UGC Creator | 100+ Brand Collaborations",
    description: "Instagram-focused UGC content creator with 100+ brand partnerships including Zara, Nike, L&apos;Oréal, Dyson, and Target. Also working with Google and Yahoo for data promotion partnerships.",
    siteName: "MERVE TAS",
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
    title: "MERVE TAS – Instagram UGC Creator | 100+ Brand Collaborations",
    description: "Instagram-focused UGC content creator with 100+ brand partnerships. Also working with Google and Yahoo for data promotion partnerships.",
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

