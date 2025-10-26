"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Play } from "lucide-react";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Skincare Brand Campaign",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    video: "/videos/demo-1.mp4",
  },
  {
    id: 2,
    title: "Fitness App Launch",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    video: "/videos/demo-2.mp4",
  },
  {
    id: 3,
    title: "Fashion Brand Collab",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    video: "/videos/demo-3.mp4",
  },
  {
    id: 4,
    title: "Tech Product Review",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    video: "/videos/demo-4.mp4",
  },
  {
    id: 5,
    title: "Food & Beverage",
    category: "Food",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    video: "/videos/demo-5.mp4",
  },
  {
    id: 6,
    title: "Home Decor Series",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    video: "/videos/demo-6.mp4",
  },
];

export default function AsliPortfolio() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(PORTFOLIO_ITEMS.map(item => item.category)))];
  const filteredItems = filter === "All" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

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
            Portfolio
          </p>
          <h2 className="max-w-4xl">
            Selected <span className="text-[var(--accent)]">Work</span>
          </h2>
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

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item.id)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6">
                {/* Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-[var(--bg-dark)] flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Play size={24} fill="white" className="ml-1" />
                  </motion.div>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[var(--accent)] text-white text-xs tracking-wider uppercase rounded-full">
                  {item.category}
                </div>
              </div>

              {/* Title */}
              <motion.h3
                className="text-xl md:text-2xl mb-2"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.h3>

              {/* View Project Link */}
              <motion.p
                className="text-sm text-[var(--gray)] uppercase tracking-wider group-hover:text-[var(--accent)] transition-colors"
              >
                View Project →
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

