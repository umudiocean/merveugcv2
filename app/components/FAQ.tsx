"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import Section from "./Section";
import { FAQ_ITEMS } from "../lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section
      id="faq"
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about working with me."
    >
      <div className="max-w-3xl mx-auto">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-start justify-between gap-4 p-6 rounded-lg border border-line bg-bg/40 backdrop-blur-sm hover:border-accent/30 transition-colors duration-300 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-lg">{item.question}</span>
                <Plus
                  className={`flex-shrink-0 w-6 h-6 text-accent transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 text-muted leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

