"use client";

import Section from "./Section";
import PackageCard from "./PackageCard";
import { PACKAGES } from "../lib/constants";

export default function Packages() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section
      id="packages"
      title="Choose Your Package"
      subtitle="Flexible options to match your content needs and testing strategy."
      className="bg-muted/5"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {PACKAGES.map((pkg, idx) => (
          <PackageCard
            key={pkg.name}
            {...pkg}
            delay={idx * 0.1}
            onCTAClick={scrollToContact}
          />
        ))}
      </div>
    </Section>
  );
}

