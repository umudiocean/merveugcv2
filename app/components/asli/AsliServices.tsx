"use client";

import { motion } from "framer-motion";
import { Video, Camera, Zap, TrendingUp } from "lucide-react";

const SERVICES = [
  {
    icon: Video,
    title: "UGC Video Production",
    items: [
      "Product Demo",
      "Unboxing",
      "Testimonial",
      "TikTok Style Short Form",
      "A/B Performance Creatives",
      "Trend-based Reels",
    ],
  },
  {
    icon: Camera,
    title: "Photography & Lifestyle Content",
    items: [
      "Product photography",
      "Lifestyle scenes",
      "Atmosphere & composition shots",
    ],
  },
  {
    icon: Zap,
    title: "Ad Creative Production",
    items: [
      "Meta Ads",
      "TikTok Ads",
      "Conversion optimized video scripts",
      "Hook + CTA + retention-focused editing",
    ],
  },
  {
    icon: TrendingUp,
    title: "Content Strategy",
    items: [
      "Content planning",
      "Brand voice creation",
      "Content segmentation by target audience",
      "Organic & paid content optimization",
    ],
  },
];

export default function AsliServices() {
  return (
    <section id="services" className="py-[var(--section-padding)]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[var(--gray)] mb-4">
            Services
          </p>
          <h2 className="max-w-4xl mx-auto">
            What I <span className="text-[var(--accent)]">Offer</span>
          </h2>
          <p className="text-lg text-[var(--gray)] mt-6 max-w-2xl mx-auto">
            Comprehensive UGC content creation services tailored to your brand&apos;s needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 bg-[var(--bg-light)]/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                  <service.icon size={24} className="text-[var(--accent)]" />
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>
              <ul className="space-y-3">
                {service.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <span className="text-[var(--accent)] mt-1">•</span>
                    <span className="text-[var(--gray)]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

