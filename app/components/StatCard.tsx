"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  delay?: number;
}

export default function StatCard({ value, label, description, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className="text-center p-6 md:p-8 rounded-lg border border-line bg-bg/40 backdrop-blur-sm hover:border-accent/30 transition-colors duration-300"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2">
        {value}
      </div>
      <div className="text-lg md:text-xl font-semibold mb-1">
        {label}
      </div>
      {description && (
        <div className="text-sm text-muted">
          {description}
        </div>
      )}
    </motion.div>
  );
}

