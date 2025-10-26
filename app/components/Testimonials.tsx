"use client";

import Section from "./Section";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "../lib/constants";

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="What Clients Say"
      subtitle="Hear from brands I've partnered with."
    >
      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} delay={idx * 0.1} />
        ))}
      </div>
    </Section>
  );
}

