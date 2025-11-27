"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const HERO_SLIDES = [
  {
    title: "Instagram UGC Creator",
    subtitle: "MERVE TAS",
    description: "Creating authentic Instagram content that converts for 100+ global brands including Zara, Nike, L&apos;Oréal, and Dyson",
  },
  {
    title: "Brand Stories",
    subtitle: "Your Vision",
    description: "Bringing your products to life through engaging Instagram content across 10+ industries",
  },
  {
    title: "Results Driven",
    subtitle: "Performance",
    description: "Instagram-focused content strategies with Google & Yahoo data promotion partnerships for maximum reach",
  },
];

export default function AsliHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, var(--accent) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, var(--accent-secondary) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, var(--accent) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, var(--accent) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Hero Content */}
      <div className="container relative z-10">
        <div className="max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              {/* Subtitle */}
              <motion.p
                className="text-sm md:text-base tracking-[0.3em] uppercase text-[var(--gray)] mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {HERO_SLIDES[currentSlide].subtitle}
              </motion.p>

              {/* Main Title */}
              <motion.h1
                className="mb-8 leading-[0.9]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {HERO_SLIDES[currentSlide].title.split(" ").map((word, idx) => (
                  <motion.span
                    key={idx}
                    className="inline-block mr-4 md:mr-8"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-lg md:text-2xl text-[var(--gray)] max-w-2xl mb-12 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {HERO_SLIDES[currentSlide].description}
              </motion.p>

              {/* CTA Button */}
              <motion.button
                onClick={scrollToPortfolio}
                className="group relative px-8 py-4 border border-[var(--border)] rounded-full overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="absolute inset-0 bg-[var(--accent)] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative z-10 flex items-center gap-3 text-sm tracking-wider uppercase">
                  View Work
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? "w-12 bg-[var(--accent)]" : "bg-[var(--border)]"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 right-12 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowDown size={24} className="text-[var(--gray)]" />
      </motion.div>
    </section>
  );
}

