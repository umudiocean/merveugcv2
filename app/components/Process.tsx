"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { PROCESS_STEPS } from "../lib/constants";

export default function Process() {
  return (
    <Section
      id="process"
      title="How It Works"
      subtitle="A simple, transparent workflow from brief to delivery."
      className="bg-muted/5"
    >
      <div className="max-w-4xl mx-auto">
        {PROCESS_STEPS.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
            className="relative flex gap-6 pb-12 last:pb-0"
          >
            {/* Vertical line */}
            {idx < PROCESS_STEPS.length - 1 && (
              <div className="absolute left-6 top-14 bottom-0 w-px bg-line" />
            )}

            {/* Number badge */}
            <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-accent text-bg font-bold text-xl flex items-center justify-center">
              {step.number}
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

