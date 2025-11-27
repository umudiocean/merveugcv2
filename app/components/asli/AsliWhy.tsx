"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const WHY_POINTS = [
  "100% organic and high-engagement content",
  "Professional lighting, editing, and color grading techniques",
  "Data-informed (data-driven) content strategy",
  "High-conversion conversion-driven storytelling",
  "Brand-specific concept design",
  "100+ global brand experience",
  "Corporate communication and fast delivery on every project",
];

export default function AsliWhy() {
  return (
    <section id="why" className="py-[var(--section-padding)] bg-[var(--bg-light)] text-[var(--text-light)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--gray)] mb-6">
              Why Choose Me
            </p>

            <h2 className="mb-8">
              Why <span className="text-[var(--accent)]">MERVE UGC</span>?
            </h2>

            <p className="text-lg text-[var(--gray)] leading-relaxed mb-8">
              I deliver authentic, high-impact content that drives real results for your brand.
            </p>

            <ul className="space-y-4">
              {WHY_POINTS.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-[var(--accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={16} className="text-[var(--accent)]" />
                  </div>
                  <span className="text-lg text-[var(--gray)]">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Visual/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-secondary)]/20">
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                ✨
              </div>
            </div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-[var(--bg-dark)] text-[var(--text-dark)] p-6 rounded-2xl shadow-2xl"
            >
              <div className="text-3xl font-bold text-[var(--accent)] mb-1">100%</div>
              <div className="text-sm uppercase tracking-wider text-[var(--gray)]">
                Organic Content
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -top-8 -right-8 bg-[var(--bg-dark)] text-[var(--text-dark)] p-6 rounded-2xl shadow-2xl"
            >
              <div className="text-3xl font-bold text-[var(--accent)] mb-1">Fast</div>
              <div className="text-sm uppercase tracking-wider text-[var(--gray)]">
                Delivery
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

