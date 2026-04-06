"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Screenshot {
  src: string;
  label: string;
  desc?: string;
}

export default function ScreenshotGallery({ shots }: { shots: Screenshot[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {shots.map((s, i) => (
          <div
            key={i}
            className="screenshot-card rounded-xl overflow-hidden border border-[--color-border] cursor-pointer bg-[--color-card]"
            onClick={() => setSelected(i)}
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={s.src}
                alt={s.label}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="px-4 py-2.5 border-t border-[--color-border]">
              <p className="text-xs font-medium text-[--color-text]">{s.label}</p>
              {s.desc && (
                <p className="text-[11px] text-[--color-text-muted] mt-1 leading-relaxed">{s.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-[90vw] max-h-[90vh]"
            >
              <Image
                src={shots[selected].src}
                alt={shots[selected].label}
                width={1440}
                height={900}
                className="rounded-lg object-contain max-h-[85vh] w-auto"
              />
              <p className="text-center text-sm text-[--color-text-muted] mt-4">
                {shots[selected].label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
