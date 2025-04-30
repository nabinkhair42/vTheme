"use client";

import React from "react";
import {
  ChevronDown,
  ChevronRight,
  FolderIcon,
  FileIcon,
  FileCodeIcon,
} from "lucide-react";

type FileItem = {
  id: string;
  name: string;
  type: "file" | "folder";
  extension?: string;
  children?: FileItem[];
  isOpen?: boolean;
};

interface SidebarProps {
  title: string;
  activeView: string;
  files?: FileItem[];
  onFileClick?: (file: FileItem) => void;
}

const getFileIcon = (file: FileItem) => {
  if (file.type === "folder") {
    return (
      <FolderIcon className="h-4 w-4 mr-2 shrink-0 text-muted-foreground" />
    );
  }

  if (file.extension === "json") {
    return <FileIcon className="h-4 w-4 mr-2 shrink-0 text-orange-400" />;
  }

  if (file.extension === "ts" || file.extension === "tsx") {
    return <FileCodeIcon className="h-4 w-4 mr-2 shrink-0 text-blue-400" />;
  }

  if (file.extension === "css") {
    return <FileIcon className="h-4 w-4 mr-2 shrink-0 text-purple-400" />;
  }

  return <FileIcon className="h-4 w-4 mr-2 shrink-0 text-muted-foreground" />;
};

const FileTree: React.FC<{
  items: FileItem[];
  level: number;
  onFileClick: (file: FileItem) => void;
  onToggle: (file: FileItem) => void;
}> = ({ items, level, onFileClick, onToggle }) => {
  return (
    <div className="w-full">
      {items.map((item) => (
        <div key={item.id} className="w-full">
          <div
            className={`flex items-center h-6 hover:bg-muted/30 cursor-pointer pl-${
              level * 4
            }`}
            onClick={() => {
              if (item.type === "folder") {
                onToggle(item);
              } else {
                onFileClick(item);
              }
            }}
          >
            {item.type === "folder" ? (
              <div className="flex items-center">
                <div className="mr-1 text-muted-foreground">
                  {item.isOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </div>
                {getFileIcon(item)}
                <span className="text-xs">{item.name}</span>
              </div>
            ) : (
              <div className="flex items-center ml-5">
                {getFileIcon(item)}
                <span className="text-xs">{item.name}</span>
              </div>
            )}
          </div>
          {item.type === "folder" && item.isOpen && item.children && (
            <FileTree
              items={item.children}
              level={level + 1}
              onFileClick={onFileClick}
              onToggle={onToggle}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({
  title,
  activeView,
  files = [],
  onFileClick = () => {},
}) => {
  const [expandedFiles, setExpandedFiles] = React.useState<
    Record<string, boolean>
  >({});

  const toggleFolder = (file: FileItem) => {
    setExpandedFiles((prev) => ({
      ...prev,
      [file.id]: !prev[file.id],
    }));
  };

  // Update isOpen property for rendering
  const filesWithOpenState = React.useMemo(() => {
    const updateOpenState = (items: FileItem[]): FileItem[] => {
      return items.map((item) => {
        if (item.type === "folder") {
          return {
            ...item,
            isOpen: expandedFiles[item.id],
            children: item.children ? updateOpenState(item.children) : [],
          };
        }
        return item;
      });
    };

    return updateOpenState(files);
  }, [files, expandedFiles]);

  return (
    <div
      className="w-60 h-full flex flex-col border-r border-border overflow-hidden"
      style={{ backgroundColor: "var(--sidebar)" }}
    >
      <div className="p-2 text-xs uppercase tracking-wider font-semibold text-sidebar-foreground">
        {title}
      </div>

      <div className="flex-grow overflow-y-auto">
        {activeView === "explorer" && (
          <div className="p-2">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Explorer
              </div>
            </div>
            <FileTree
              items={filesWithOpenState}
              level={0}
              onFileClick={onFileClick}
              onToggle={toggleFolder}
            />
          </div>
        )}

        {activeView === "search" && (
          <div className="p-2">
            <div className="mb-2">
              <input
                type="text"
                placeholder="Search"
                className="w-full py-1 px-2 text-xs rounded bg-muted/50 border border-border"
              />
            </div>
            <div className="text-xs text-muted-foreground pt-2">
              No search results
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
