"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BRAND_CATEGORIES } from "@/app/lib/constants";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function AsliBrands() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section id="brands" className="py-[var(--section-padding)] bg-[var(--bg-light)] text-[var(--text-light)]">
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
            Collaborations & Partnerships
          </p>
          <h2 className="max-w-4xl mx-auto">
            Trusted by <span className="text-[var(--accent)]">Leading Brands</span>
          </h2>
          <p className="text-lg text-[var(--gray)] mt-6 max-w-2xl mx-auto">
            Working with global brands across fashion, beauty, technology, and lifestyle industries
          </p>
        </motion.div>

        {/* Brand Categories */}
        <div className="space-y-6">
          {BRAND_CATEGORIES.map((category, categoryIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
              className="border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--bg-dark)]/5 hover:bg-[var(--bg-dark)]/10 transition-all duration-300"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-[var(--gray)]">
                      {category.brands.length} brands
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[var(--gray)] group-hover:text-[var(--accent)] transition-colors"
                >
                  {expandedCategory === category.id ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </motion.div>
              </button>

              {/* Brands Grid */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedCategory === category.id ? "auto" : 0,
                  opacity: expandedCategory === category.id ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 pt-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {category.brands.map((brand, brandIdx) => (
                      <motion.div
                        key={brand}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                          opacity: expandedCategory === category.id ? 1 : 0,
                          scale: expandedCategory === category.id ? 1 : 0.9,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: brandIdx * 0.02,
                        }}
                        className="px-4 py-3 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300 text-center"
                      >
                        <span className="text-sm font-medium">{brand}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            {
              value: "100+",
              label: "Brand Partners",
              description: "Trusted collaborations",
            },
            {
              value: "10",
              label: "Industries",
              description: "Diverse expertise",
            },
            {
              value: "Global",
              label: "Reach",
              description: "Worldwide partnerships",
            },
            {
              value: "3M+",
              label: "Total Views",
              description: "From brand campaigns",
            },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[var(--gray)]">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

