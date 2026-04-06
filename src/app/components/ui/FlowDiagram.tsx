"use client";

import { motion } from "framer-motion";

interface FlowStep {
  icon: string;
  title: string;
  desc: string;
}

export default function FlowDiagram({ steps, title }: { steps: FlowStep[]; title?: string }) {
  return (
    <div className="mb-8">
      {title && (
        <h4 className="text-sm font-medium text-[--color-text-muted] mb-4 uppercase tracking-wider">
          {title}
        </h4>
      )}
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[--color-card] border border-[--color-border]">
              <span className="text-base">{step.icon}</span>
              <div>
                <p className="text-xs font-medium text-[--color-text]">{step.title}</p>
                <p className="text-[10px] text-[--color-text-muted]">{step.desc}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <span className="text-[--color-text-muted] text-xs">→</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
