"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function AsliFooter() {
  return (
    <footer className="py-12 border-t border-[var(--border)]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-[var(--gray)] flex items-center gap-2"
          >
            © {new Date().getFullYear()} MERVE TAS. Made with
            <Heart size={14} className="text-[var(--accent)] fill-[var(--accent)]" />
          </motion.p>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-8"
          >
            {["Privacy", "Terms", "Contact"].map((link, idx) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-[var(--gray)] hover:text-[var(--accent)] transition-colors"
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-[var(--gray)] hover:text-[var(--accent)] transition-colors uppercase tracking-wider"
            whileHover={{ y: -2 }}
          >
            Back to Top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

