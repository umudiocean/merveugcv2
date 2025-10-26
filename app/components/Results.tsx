"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import StatCard from "./StatCard";
import { STATS } from "../lib/constants";

export default function Results() {
  return (
    <Section
      id="results"
      title="Proven Results"
      subtitle="Real performance metrics from recent campaigns."
      className="bg-muted/5"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
        {STATS.map((stat, idx) => (
          <StatCard key={idx} {...stat} delay={idx * 0.1} />
        ))}
      </div>

      {/* Case snippet */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="max-w-3xl mx-auto p-8 rounded-xl border border-accent/30 bg-accent/5"
      >
        <div className="text-center">
          <div className="text-sm uppercase tracking-wider text-accent mb-2">Case Study</div>
          <h3 className="text-2xl font-bold mb-3">
            Skincare Brand – 14-Day Campaign
          </h3>
          <p className="text-lg text-muted mb-4">
            4 UGC videos with hook variants tested across TikTok & Meta.
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12">
            <div>
              <div className="text-3xl font-bold text-accent">1.6 → 2.3</div>
              <div className="text-sm text-muted">ROAS Improvement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">-32%</div>
              <div className="text-sm text-muted">CPM Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">+45%</div>
              <div className="text-sm text-muted">CTR Increase</div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

