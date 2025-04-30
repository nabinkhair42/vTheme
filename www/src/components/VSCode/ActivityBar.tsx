"use client";

import React from "react";
import {
  FileIcon,
  SearchIcon,
  GitBranchIcon,
  SettingsIcon,
} from "lucide-react";
import { VscExtensions } from "react-icons/vsc";
import { VscDebugAll } from "react-icons/vsc";

interface ActivityBarProps {
  activeIcon: string;
  onIconClick: (icon: string) => void;
}

const ActivityBar: React.FC<ActivityBarProps> = ({
  activeIcon,
  onIconClick,
}) => {
  const icons = [
    { id: "explorer", icon: <FileIcon size={22} />, title: "Explorer" },
    { id: "search", icon: <SearchIcon size={22} />, title: "Search" },
    { id: "git", icon: <GitBranchIcon size={22} />, title: "Source Control" },
    { id: "debug", icon: <VscDebugAll size={22} />, title: "Run and Debug" },
    {
      id: "extensions",
      icon: <VscExtensions size={22} />,
      title: "Extensions",
    },
  ];

  return (
    <div
      className="w-12 flex flex-col items-center py-2 border-r border-border h-full"
      style={{ backgroundColor: "var(--activity-bar)" }}
      role="toolbar"
      aria-label="Activity Bar"
    >
      <div className="flex flex-col items-center space-y-4 flex-grow">
        {icons.map((item) => (
          <div
            key={item.id}
            className={`w-12 h-12 flex items-center justify-center relative cursor-pointer group`}
            onClick={() => onIconClick(item.id)}
            title={item.title}
            role="button"
            aria-pressed={activeIcon === item.id}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onIconClick(item.id);
              }
            }}
          >
            <div
              className={`p-2 rounded hover:bg-muted/30 ${
                activeIcon === item.id
                  ? "text-activity-bar-foreground"
                  : "text-activity-bar-inactive"
              }`}
            >
              {item.icon}
            </div>

            {activeIcon === item.id && (
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5"
                style={{ backgroundColor: "var(--primary)" }}
                aria-hidden="true"
              />
            )}

            {/* Tooltip */}
            <div
              className="absolute left-12 z-50 px-2 py-1 bg-popover text-popover-foreground text-xs rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity whitespace-nowrap"
              role="tooltip"
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <div
          className="w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-muted/30 text-activity-bar-inactive hover:text-activity-bar-foreground"
          title="Settings"
          role="button"
          tabIndex={0}
        >
          <SettingsIcon size={22} />
        </div>
      </div>
    </div>
  );
};

export default ActivityBar;
