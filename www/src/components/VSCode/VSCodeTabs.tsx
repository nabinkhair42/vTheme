"use client";

import React from "react";

type Tab = {
  id: string;
  title: string;
  isActive: boolean;
  icon?: React.ReactNode;
};

interface VSCodeTabsProps {
  tabs: Tab[];
  onTabClick?: (tabId: string) => void;
  onTabClose?: (tabId: string) => void;
}

const VSCodeTabs: React.FC<VSCodeTabsProps> = ({
  tabs,
  onTabClick = () => {},
  onTabClose = () => {},
}) => {
  return (
    <div
      className="flex h-9 border-b border-border overflow-x-auto hide-scrollbar"
      role="tablist"
    >
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tab"
          aria-selected={tab.isActive}
          className={`h-full px-3 flex items-center gap-1.5 border-r border-border min-w-[120px] max-w-[200px] cursor-pointer group transition-colors ${
            tab.isActive
              ? "text-foreground bg-background"
              : "text-muted-foreground hover:bg-muted/20"
          }`}
          onClick={() => onTabClick(tab.id)}
        >
          {tab.icon}
          <span className="truncate text-xs font-medium">{tab.title}</span>
          <button
            className="opacity-0 group-hover:opacity-100 ml-auto p-1 rounded-sm hover:bg-muted/40 transition-opacity"
            onClick={(e) => {
              e.stopPropagation();
              onTabClose(tab.id);
            }}
          >
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default VSCodeTabs;
