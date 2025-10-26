"use client";

import Section from "./Section";
import VideoCard from "./VideoCard";
import { PORTFOLIO } from "../lib/constants";

export default function Portfolio() {
  return (
    <Section
      id="portfolio"
      title="Recent Work"
      subtitle="A selection of UGC videos created for DTC and e-commerce brands."
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {PORTFOLIO.map((item, idx) => (
          <VideoCard
            key={item.id}
            {...item}
            delay={idx * 0.05}
          />
        ))}
      </div>

      <p className="text-center text-muted mt-8 text-sm">
        Note: Placeholder videos shown. Real content available upon request.
      </p>
    </Section>
  );
}

