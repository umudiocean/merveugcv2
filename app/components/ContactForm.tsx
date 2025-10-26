"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    budget: "",
    message: "",
    fileLink: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual API endpoint
    console.log("Form submission:", formData);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        industry: "",
        budget: "",
        message: "",
        fileLink: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-bg border border-line focus:border-accent focus:outline-none transition-colors"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-bg border border-line focus:border-accent focus:outline-none transition-colors"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Brand / Company *
          </label>
          <input
            type="text"
            id="company"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-bg border border-line focus:border-accent focus:outline-none transition-colors"
            placeholder="Your Brand"
          />
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium mb-2">
            Industry *
          </label>
          <select
            id="industry"
            required
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-bg border border-line focus:border-accent focus:outline-none transition-colors"
          >
            <option value="">Select Industry</option>
            <option value="beauty">Beauty & Skincare</option>
            <option value="fashion">Fashion & Apparel</option>
            <option value="fitness">Fitness & Wellness</option>
            <option value="food">Food & Beverage</option>
            <option value="tech">Tech & Apps</option>
            <option value="home">Home & Decor</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="budget" className="block text-sm font-medium mb-2">
          Budget Range
        </label>
        <select
          id="budget"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-bg border border-line focus:border-accent focus:outline-none transition-colors"
        >
          <option value="">Select Budget Range</option>
          <option value="starter">Starter ($500 - $1,000)</option>
          <option value="grow">Grow ($1,000 - $2,500)</option>
          <option value="scale">Scale ($2,500 - $5,000+)</option>
          <option value="custom">Custom / Not Sure</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-bg border border-line focus:border-accent focus:outline-none transition-colors resize-none"
          placeholder="Tell me about your project, goals, and timeline..."
        />
      </div>

      <div className="mb-6">
        <label htmlFor="fileLink" className="block text-sm font-medium mb-2">
          Brief / Reference Link (Optional)
        </label>
        <input
          type="url"
          id="fileLink"
          value={formData.fileLink}
          onChange={(e) => setFormData({ ...formData, fileLink: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-bg border border-line focus:border-accent focus:outline-none transition-colors"
          placeholder="https://..."
        />
      </div>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 rounded-lg bg-accent/10 border border-accent/30 text-accent">
          ✓ Message sent successfully! I&apos;ll get back to you within 24 hours.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-8 rounded-lg bg-accent text-bg font-semibold hover:bg-accent-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  );
}

