"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  video: string;
  tags: string[];
  delay?: number;
}

export default function VideoCard({ title, thumbnail, video, tags, delay = 0 }: VideoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay, ease: "easeOut" }}
        className="group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-[9/16] bg-muted/10 rounded-lg overflow-hidden mb-4">
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60 z-10" />
          
          {/* Placeholder thumbnail */}
          <div className="absolute inset-0 flex items-center justify-center bg-muted/5">
            <div className="text-muted/40 text-6xl">🎬</div>
          </div>

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-16 h-16 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-bg fill-bg ml-1" />
            </div>
          </div>
        </div>

        <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 rounded bg-muted/10 text-muted border border-line"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-bg/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-fg hover:text-accent transition-colors"
              aria-label="Close video modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="aspect-[9/16] bg-muted/10 rounded-lg overflow-hidden flex items-center justify-center">
              {/* Placeholder video player */}
              <div className="text-muted">
                <p className="text-sm mb-2">Video: {video}</p>
                <p className="text-xs opacity-60">Placeholder - Add real video here</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

