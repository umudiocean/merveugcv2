"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PackageCardProps {
  name: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  delay?: number;
  onCTAClick?: () => void;
}

export default function PackageCard({
  name,
  description,
  features,
  cta,
  featured = false,
  delay = 0,
  onCTAClick,
}: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`relative p-8 rounded-xl border ${
        featured
          ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
          : "border-line bg-bg/40 backdrop-blur-sm hover:border-accent/30"
      } transition-all duration-300`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-bg px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-muted">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-fg/90">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onCTAClick}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
          featured
            ? "bg-accent text-bg hover:bg-accent-hover"
            : "border border-accent text-accent hover:bg-accent hover:text-bg"
        }`}
        aria-label={`${cta} for ${name} package`}
      >
        {cta}
      </button>
    </motion.div>
  );
}

