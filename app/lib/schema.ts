// JSON-LD Schema Helpers for SEO

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Merve UGC",
    jobTitle: "UGC Content Creator",
    description: "UGC content creator specializing in performance marketing and A/B testing for DTC and e-commerce brands.",
    url: "https://merveugc.com",
    sameAs: [
      "https://tiktok.com/@merveugc",
      "https://instagram.com/merveugc",
      "https://youtube.com/@merveugc",
      "https://linkedin.com/in/merveugc",
    ],
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "UGC Video Production",
    provider: {
      "@type": "Person",
      name: "Merve UGC",
    },
    description: "Professional UGC video production for TikTok and Instagram Reels, optimized for performance marketing campaigns.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "UGC Video Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Starter Package",
            description: "2 UGC Videos with hook variants",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Grow Package",
            description: "4 UGC Videos with A/B tested variants",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Scale Package",
            description: "8 UGC Videos with maximum output",
          },
        },
      ],
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Merve UGC",
    url: "https://merveugc.com",
    logo: "https://merveugc.com/logo.png",
    sameAs: [
      "https://tiktok.com/@merveugc",
      "https://instagram.com/merveugc",
      "https://youtube.com/@merveugc",
      "https://linkedin.com/in/merveugc",
    ],
  };
}

