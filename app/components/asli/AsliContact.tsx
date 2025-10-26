"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useState, FormEvent } from "react";

export default function AsliContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Add actual API endpoint
    console.log("Form submission:", formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-[var(--section-padding)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--gray)] mb-6">
              Let&apos;s Work Together
            </p>

            <h2 className="mb-8">
              Start Your <br />
              <span className="text-[var(--accent)]">Next Project</span>
            </h2>

            <p className="text-lg text-[var(--gray)] leading-relaxed mb-12">
              Ready to create content that converts? Let&apos;s discuss how we can bring 
              your brand vision to life with authentic, engaging UGC that resonates 
              with your audience.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.a
                href="mailto:hello@merveugc.com"
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-all">
                  <Mail size={20} />
                </div>
                <span className="text-lg">hello@merveugc.com</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name *"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-0 py-4 bg-transparent border-b border-[var(--border)] focus:border-[var(--accent)] outline-none transition-colors text-lg"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-0 py-4 bg-transparent border-b border-[var(--border)] focus:border-[var(--accent)] outline-none transition-colors text-lg"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Brand / Company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-0 py-4 bg-transparent border-b border-[var(--border)] focus:border-[var(--accent)] outline-none transition-colors text-lg"
              />
            </div>

            <div>
              <textarea
                placeholder="Tell me about your project *"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-0 py-4 bg-transparent border-b border-[var(--border)] focus:border-[var(--accent)] outline-none transition-colors text-lg resize-none"
              />
            </div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[var(--accent)]"
              >
                ✓ Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="group relative px-8 py-4 border border-[var(--border)] rounded-full overflow-hidden disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-[var(--accent)] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 flex items-center gap-3 text-sm tracking-wider uppercase">
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

