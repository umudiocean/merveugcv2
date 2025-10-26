"use client";

import { motion } from "framer-motion";
import { Clock, TestTube, MessageCircle } from "lucide-react";
import Section from "./Section";

const FEATURES = [
  {
    icon: Clock,
    title: "Fast Delivery & Clear Workflow",
    description: "Streamlined briefing process with quick turnarounds to keep your campaigns moving.",
  },
  {
    icon: TestTube,
    title: "A/B Test Variants",
    description: "Multiple hook variations and formats to optimize your ad performance.",
  },
  {
    icon: MessageCircle,
    title: "Conversion-Focused Tone",
    description: "Natural, authentic delivery that builds trust and drives action.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      title="Hi, I'm Merve"
      subtitle="UGC content creator and your performance-focused creative partner."
    >
      <div className="max-w-4xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-lg text-center text-fg/80 leading-relaxed"
        >
          I create TikTok and Instagram Reels content specifically designed for DTC and e-commerce brands.
          My approach combines authentic storytelling with data-driven hook testing to maximize your
          campaign performance. Whether you need rapid content for testing or scaled production for
          winners, I deliver UGC that converts.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {FEATURES.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
              className="text-center p-6 rounded-lg border border-line bg-bg/40 backdrop-blur-sm hover:border-accent/30 transition-colors duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Headshot placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 flex justify-center"
      >
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-accent/30" />
          <div className="text-4xl md:text-5xl">👩</div>
        </div>
      </motion.div>
    </Section>
  );
}

