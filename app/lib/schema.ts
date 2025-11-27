// JSON-LD Schema Helpers for SEO

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "MERVE TAS",
    jobTitle: "Professional UGC Content Creator",
    description: "Texas-based professional UGC Creator and digital storyteller. Creating high-impact, organic traffic-generating, and sales conversion-focused content for brands worldwide.",
    url: "https://merveugc.com",
    email: "merve@merveugc.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Texas",
      addressCountry: "USA",
    },
    sameAs: [
      "https://www.instagram.com/merveugc/",
    ],
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Instagram UGC Video Production",
    provider: {
      "@type": "Person",
      name: "MERVE TAS",
    },
    description: "Professional Instagram UGC video production, optimized for performance marketing campaigns. Also working with Google and Yahoo for data promotion partnerships.",
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
    name: "MERVE TAS",
    url: "https://merveugc.com",
    logo: "https://merveugc.com/logo.png",
    email: "merve@merveugc.com",
    sameAs: [
      "https://www.instagram.com/merveugc/",
    ],
  };
}

