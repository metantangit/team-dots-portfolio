"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import ProjectTabs from "./components/ProjectTabs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectTabs />
    </main>
  );
}
