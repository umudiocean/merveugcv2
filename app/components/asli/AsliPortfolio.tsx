"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BRAND_CATEGORIES } from "@/app/lib/constants";

// Map category IDs to display names
const CATEGORY_MAP: Record<string, string> = {
  fashion: "Fashion",
  beauty: "Beauty",
  home: "Home",
  tech: "Technology",
  fitness: "Fitness",
  baby: "Baby & Kids",
  kitchen: "Kitchen",
  pet: "Pet Care",
  ecommerce: "E-Commerce",
  apps: "Apps & Software",
};

export default function AsliPortfolio() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...BRAND_CATEGORIES.map(cat => CATEGORY_MAP[cat.id] || cat.name)];
  
  const filteredCategories = filter === "All" 
    ? BRAND_CATEGORIES 
    : BRAND_CATEGORIES.filter(cat => {
        const displayName = CATEGORY_MAP[cat.id] || cat.name;
        return displayName === filter;
      });

  return (
    <section id="portfolio" className="py-[var(--section-padding)]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[var(--gray)] mb-4">
            Collaborations & Partnerships
          </p>
          <h2 className="max-w-4xl">
            Selected <span className="text-[var(--accent)]">Work</span>
          </h2>
          <p className="text-lg text-[var(--gray)] mt-6 max-w-2xl">
            Explore our brand collaborations across different industries. Click on a category to see the brands we&apos;ve worked with.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full text-sm tracking-wider uppercase transition-all duration-300 ${
                filter === category
                  ? "bg-[var(--accent)] text-white"
                  : "border border-[var(--border)] hover:border-[var(--accent)]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Brands Grid by Category */}
        <div className="space-y-16">
          {filteredCategories.map((category, categoryIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">{category.icon}</span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                    {CATEGORY_MAP[category.id] || category.name}
                  </h3>
                  <p className="text-sm text-[var(--gray)]">
                    {category.brands.length} brand{category.brands.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {/* Brands Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.brands.map((brand, brandIdx) => (
                  <motion.div
                    key={brand}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.3, delay: brandIdx * 0.02 }}
                    className="px-4 py-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300 text-center group cursor-pointer"
                  >
                    <span className="text-sm font-medium group-hover:text-[var(--accent)] transition-colors">
                      {brand}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-[var(--border)]"
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
              value: "Instagram",
              label: "Primary Platform",
              description: "Content distribution",
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
