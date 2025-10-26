"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  delay?: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  avatar,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className="p-8 rounded-xl border border-line bg-bg/40 backdrop-blur-sm hover:border-accent/30 transition-colors duration-300"
    >
      <div className="mb-6">
        <svg
          className="w-10 h-10 text-accent/40"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <p className="text-fg/90 mb-6 leading-relaxed">{content}</p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-muted">
            {role} at {company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

