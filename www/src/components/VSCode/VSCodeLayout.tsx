"use client";

import React, { useState, useEffect } from "react";
import { FileCode, FileJson, FileText, MenuIcon, XIcon } from "lucide-react";
import ActivityBar from "./ActivityBar";
import StatusBar from "./StatusBar";
import VSCodeTabs from "./VSCodeTabs";
import Sidebar from "./Sidebar";

type FileItem = {
  id: string;
  name: string;
  type: "file" | "folder";
  extension?: string;
  children?: FileItem[];
};

interface VSCodeLayoutProps {
  children: React.ReactNode;
}

const VSCodeLayout: React.FC<VSCodeLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState("explorer");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  // Sample file structure for the sidebar
  const files: FileItem[] = [
    {
      id: "1",
      name: "src",
      type: "folder",
      children: [
        {
          id: "2",
          name: "components",
          type: "folder",
          children: [
            {
              id: "3",
              name: "VSCodeLayout.tsx",
              type: "file",
              extension: "tsx",
            },
            {
              id: "4",
              name: "HeroSection.tsx",
              type: "file",
              extension: "tsx",
            },
            {
              id: "5",
              name: "ColorPaletteSection.tsx",
              type: "file",
              extension: "tsx",
            },
          ],
        },
        {
          id: "6",
          name: "data",
          type: "folder",
          children: [
            {
              id: "7",
              name: "colorPaletteData.ts",
              type: "file",
              extension: "ts",
            },
            {
              id: "8",
              name: "comparisonData.ts",
              type: "file",
              extension: "ts",
            },
          ],
        },
        { id: "9", name: "globals.css", type: "file", extension: "css" },
      ],
    },
    {
      id: "10",
      name: "themes",
      type: "folder",
      children: [
        {
          id: "11",
          name: "V Theme-color-theme.json",
          type: "file",
          extension: "json",
        },
        {
          id: "12",
          name: "V Theme Light-color-theme.json",
          type: "file",
          extension: "json",
        },
      ],
    },
    { id: "13", name: "package.json", type: "file", extension: "json" },
    { id: "14", name: "README.md", type: "file", extension: "md" },
  ];

  // Define tabs with proper structure
  const tabs = [
    {
      id: "home",
      title: "welcome.tsx",
      isActive: activeTab === "home",
      icon: <FileCode className="h-4 w-4 mr-1.5 text-blue-400" />,
    },
    {
      id: "theme-dark",
      title: "V Theme-color-theme.json",
      isActive: activeTab === "theme-dark",
      icon: <FileJson className="h-4 w-4 mr-1.5 text-yellow-400" />,
    },
    {
      id: "theme-light",
      title: "V Theme Light-color-theme.json",
      isActive: activeTab === "theme-light",
      icon: <FileJson className="h-4 w-4 mr-1.5 text-yellow-400" />,
    },
    {
      id: "about",
      title: "README.md",
      isActive: activeTab === "about",
      icon: <FileText className="h-4 w-4 mr-1.5 text-muted-foreground" />,
    },
  ];

  // Handle tab click
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  // Handle activity bar icon click
  const handleIconClick = (iconId: string) => {
    setActiveView(iconId);
    setSidebarOpen(true);
    // On mobile, ensure menu is open when clicking an activity bar icon
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(true);
    }
  };

  // Handle file click in sidebar
  const handleFileClick = (file: FileItem) => {
    console.log("File clicked:", file.name);
    // On mobile, auto-close the sidebar after clicking a file
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(false);
    }
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden text-foreground bg-background">
      {/* Mobile header - only visible on small screens */}
      <div className="flex items-center h-12 border-b border-border md:hidden px-3">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md hover:bg-muted/30 transition-colors"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
        <div className="ml-3 font-medium">V Theme</div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar - hidden on mobile unless menu open */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} md:block z-20`}
        >
          <ActivityBar activeIcon={activeView} onIconClick={handleIconClick} />
        </div>

        {/* Sidebar - hidden on mobile unless menu open */}
        {sidebarOpen && (
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:block z-10 w-60 md:w-auto`}
          >
            <Sidebar
              title="V THEME"
              activeView={activeView}
              files={files}
              onFileClick={handleFileClick}
            />
          </div>
        )}

        {/* Editor Group */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Editor Tabs */}
          <VSCodeTabs
            tabs={tabs}
            onTabClick={handleTabClick}
            onTabClose={() => {}} // No-op for demo
          />

          {/* Editor Content */}
          <div
            className="flex-1 overflow-auto"
            style={{ backgroundColor: "var(--background)" }}
          >
            {children}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar />

      {/* Mobile overlay when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-0 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default VSCodeLayout;
