"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TRUST_BADGES } from "../lib/constants";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-40" />
      
      {/* Parallax dots */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="mb-6 leading-tight">
              High-Converting UGC Videos for{" "}
              <span className="text-accent">Your Brand</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10"
          >
            TikTok & Reels focused content tailored for performance marketing.
            Authentic, fast, and built to convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-accent text-bg font-semibold rounded-lg hover:bg-accent-hover transition-all duration-300 flex items-center gap-2 shadow-lg shadow-accent/20"
            >
              Get a Quote
              <ArrowRight size={20} />
            </button>

            <button
              onClick={() => scrollToSection("portfolio")}
              className="px-8 py-4 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-bg transition-all duration-300"
            >
              View Portfolio
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {TRUST_BADGES.map((badge, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                  {badge.label}
                </div>
                <div className="text-sm text-muted">{badge.sublabel}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

