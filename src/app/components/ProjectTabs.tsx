"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContentFactoryTab from "./tabs/ContentFactoryTab";
import AuctionSystemTab from "./tabs/AuctionSystemTab";
import JayangdongTab from "./tabs/JayangdongTab";
import NewlistingTab from "./tabs/NewlistingTab";
import TeamDotsTab from "./tabs/TeamDotsTab";
import GigHunterTab from "./tabs/GigHunterTab";
import OthersTab from "./tabs/OthersTab";

const groups = [
  {
    label: "부동산",
    tabs: [
      { id: "auction", label: "경매 분석" },
      { id: "jayangdong", label: "자양동 임대" },
    ],
  },
  {
    label: "콘텐츠 · AI",
    tabs: [
      { id: "content-factory", label: "Content Factory" },
      { id: "teamdots", label: "Team Dots" },
    ],
  },
  {
    label: "자동화 · 봇",
    tabs: [
      { id: "newlisting", label: "Trading Bot" },
      { id: "gig-hunter", label: "Gig Hunter" },
    ],
  },
  {
    label: "기타",
    tabs: [
      { id: "others", label: "기타 프로젝트" },
    ],
  },
];

const allTabs = groups.flatMap((g) => g.tabs);

const tabContent: Record<string, React.ReactNode> = {
  "content-factory": <ContentFactoryTab />,
  "auction": <AuctionSystemTab />,
  "jayangdong": <JayangdongTab />,
  "newlisting": <NewlistingTab />,
  "teamdots": <TeamDotsTab />,
  "gig-hunter": <GigHunterTab />,
  "others": <OthersTab />,
};

function ComingSoon({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center h-64 text-[--color-text-muted]">
      {label} 탭 준비중...
    </div>
  );
}

export default function ProjectTabs() {
  const [active, setActive] = useState("auction");

  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      {/* Grouped tab bar */}
      <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
        {groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-2">
            <span className="text-[10px] text-[--color-text-muted]/50 uppercase tracking-wider">
              {group.label}
            </span>
            <div className="flex gap-1.5">
              {group.tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all
                    ${active === tab.id
                      ? "bg-[--color-accent] text-white shadow-md shadow-[--color-accent]/20"
                      : "bg-[--color-card] text-[--color-text-muted] border border-[--color-border] hover:border-[--color-accent]/40 hover:text-[--color-text]"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          {tabContent[active] || <ComingSoon label={allTabs.find(t => t.id === active)?.label || ""} />}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
