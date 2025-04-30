"use client";

import React from "react";
import { useTheme } from "next-themes";
import {
  GitBranch,
  Check,
  Bell,
  Zap,
  Heart,
  LineChart,
  Cpu,
} from "lucide-react";

const StatusBar: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="h-6 flex items-center justify-between px-3 text-xs border-t border-border">
      <div className="flex items-center space-x-2 md:space-x-3 overflow-hidden">
        <div className="flex items-center space-x-1.5 min-w-0">
          <GitBranch className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="truncate">main</span>
        </div>

        <div className="hidden sm:flex items-center space-x-1.5 text-primary">
          <Check className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="truncate">0 Problems</span>
        </div>

        <div className="hidden md:flex items-center space-x-1.5">
          <Bell className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="truncate">0</span>
        </div>
      </div>

      <div className="flex items-center space-x-2 md:space-x-4 overflow-hidden">
        <div className="hidden sm:flex items-center space-x-1.5">
          <Cpu className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="truncate">TypeScript</span>
        </div>

        <div className="hidden md:flex items-center space-x-1.5">
          <LineChart className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="truncate">UTF-8</span>
        </div>

        <div className="flex items-center space-x-1.5">
          <span className="capitalize truncate">
            {theme === "system" ? "auto" : theme} Mode
          </span>
        </div>

        <div className="flex items-center space-x-1.5 text-primary">
          <Zap className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="truncate">V Theme</span>
        </div>

        <div className="hidden sm:flex items-center space-x-1.5 text-syntax-string">
          <Heart className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="truncate">2025</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
