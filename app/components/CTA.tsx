"use client";

import Section from "./Section";
import ContactForm from "./ContactForm";

export default function CTA() {
  return (
    <Section
      id="contact"
      title="Let's Create Together"
      subtitle="Ready to elevate your brand with performance-driven UGC? Get in touch."
      className="bg-muted/5"
    >
      <ContactForm />
    </Section>
  );
}

