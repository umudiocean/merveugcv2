"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";

// Custom TikTok Icon
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function AsliAbout() {
  return (
    <section id="about" className="py-[var(--section-padding)] bg-[var(--bg-light)] text-[var(--text-light)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-secondary)]/20" />
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                📸
              </div>
            </div>

            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-[var(--bg-dark)] text-[var(--text-dark)] p-8 rounded-2xl shadow-2xl"
            >
              <div className="text-4xl font-bold text-[var(--accent)] mb-2">120+</div>
              <div className="text-sm uppercase tracking-wider text-[var(--gray)]">
                Successful Campaigns
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--gray)] mb-6">
              About Me
            </p>

            <h2 className="mb-8">
              Creating Content <br />
              <span className="text-[var(--accent)]">That Converts</span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-[var(--gray)] mb-12">
              <p>
                I&apos;m Merve, a UGC content creator specializing in authentic, high-converting 
                content for brands across fashion, beauty, technology, home decor, fitness, 
                and lifestyle industries.
              </p>
              <p>
                With over 100+ brand collaborations including global leaders like Zara, Nike, 
                L&apos;Oréal, Dyson, and Target, I help brands connect with their audience through 
                genuine storytelling and engaging content that drives real results.
              </p>
              <p>
                My approach combines creative excellence with data-driven strategy to deliver 
                content that not only looks great but performs exceptionally well across TikTok, 
                Instagram Reels, and YouTube Shorts.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              {[
                { icon: Instagram, href: "https://instagram.com/merveugc", label: "Instagram" },
                { icon: Youtube, href: "https://youtube.com/@merveugc", label: "YouTube" },
                { icon: TikTokIcon, href: "https://tiktok.com/@merveugc", label: "TikTok" },
              ].map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

