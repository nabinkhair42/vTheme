"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Download,
  Copy,
  Check,
  ExternalLink,
  Keyboard,
  Github,
  Code2,
  Sparkles,
  FileJson,
  Palette,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function InstallationSection() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<
    "marketplace" | "cli" | "extension"
  >("marketplace");
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [terminalText, setTerminalText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Commands for installation methods
  const commands = {
    cli: "code --install-extension nabinkhair.vtheme",
    extension: "ext install nabinkhair.vtheme",
  };

  // Copy command to clipboard
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(type);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  // Terminal typing animation
  useEffect(() => {
    if (activeTab === "cli") {
      const command = commands.cli || "";
      setTerminalText("");
      setIsTyping(true);

      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < command.length) {
          setTerminalText((prev) => prev + command[index]);
          index++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);

          // After command is typed, show installation progress
          setTimeout(() => {
            setTerminalText((prev) => {
              return `${command}\n\nDownloading extension...\nInstalling V Theme...\nInstallation completed successfully!\n\nV Theme has been installed. Restart VS Code to apply theme.`;
            });

            // Scroll to bottom of terminal
            if (terminalRef.current) {
              terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
            }
          }, 500);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [activeTab, commands.cli]);

  // Scroll terminal to bottom when text changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalText]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      className="relative py-20 sm:py-28 overflow-hidden"
      id="installation"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 rounded-full bg-primary/5 blur-[100px] opacity-70"></div>
      </div>

      <div className="container px-4 sm:px-8 mx-auto max-w-7xl relative z-10">
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Download className="h-4 w-4" />
            <span>Installation</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight"
          >
            Get <span className="text-primary">V Theme</span> in 60 Seconds
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-center max-w-2xl text-base sm:text-lg mb-16"
          >
            Choose your preferred installation method and transform your coding
            environment
          </motion.p>

          {/* Tab navigation for installation methods */}
          <motion.div
            variants={itemVariants}
            className="relative w-full max-w-3xl mb-12"
          >
            <div className="absolute h-[1px] bottom-0 left-0 right-0 bg-border"></div>

            <div className="flex flex-wrap justify-center sm:justify-around">
              <button
                onClick={() => setActiveTab("marketplace")}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                  activeTab === "marketplace"
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                <Sparkles className="h-5 w-5" />
                <span className="font-medium">VS Code Marketplace</span>
              </button>

              <button
                onClick={() => setActiveTab("cli")}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                  activeTab === "cli"
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                <Terminal className="h-5 w-5" />
                <span className="font-medium">Command Line</span>
              </button>

              <button
                onClick={() => setActiveTab("extension")}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                  activeTab === "extension"
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                <Code2 className="h-5 w-5" />
                <span className="font-medium">Extension Panel</span>
              </button>
            </div>
          </motion.div>

          {/* VS Code Marketplace Method */}
          {activeTab === "marketplace" && (
            <motion.div
              className="w-full max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                {/* Left side - Mockup */}
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <div className="rounded-lg border border-border overflow-hidden shadow-xl">
                    {/* VSCode window header */}
                    <div
                      className={`h-8 flex items-center px-3 ${
                        theme === "light" ? "bg-[#f0f0f0]" : "bg-[#252526]"
                      } border-b border-border`}
                    >
                      <div className="flex space-x-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Extensions Marketplace - V Theme
                      </div>
                    </div>

                    {/* Marketplace content */}
                    <div
                      className={`${
                        theme === "light" ? "bg-[#f9f9f9]" : "bg-[#1e1e1e]"
                      } p-4`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-16 w-16 rounded bg-primary/10 flex items-center justify-center">
                          <img
                            src="/logo.png"
                            alt="V Theme Logo"
                            className="h-16 w-16"
                            onError={(e) => {
                              e.currentTarget.src = "/logo.svg";
                              e.currentTarget.onerror = null;
                            }}
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">V Theme</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            A professionally crafted VS Code theme
                          </p>

                          <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center gap-1">
                              <div className="text-amber-500 flex">
                                {[1, 2, 3, 4, 5].map((i) => (
                                  <Star key={i} size={14} fill="currentColor" />
                                ))}
                              </div>
                              <span className="text-xs">(42)</span>
                            </div>

                            <div className="text-xs text-muted-foreground">
                              3.5K+ installs
                            </div>

                            <div className="text-xs text-muted-foreground">
                              Updated April 2025
                            </div>
                          </div>

                          <Button className="text-xs h-8 px-3 bg-primary text-primary-foreground hover:bg-primary/90">
                            Install
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Steps */}
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Download className="h-5 w-5 text-primary" />
                    <span>Marketplace Installation</span>
                  </h3>

                  <ol className="space-y-6">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Open Extensions View</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Press{" "}
                          <kbd className="px-2 py-0.5 rounded bg-muted text-xs">
                            Ctrl+Shift+X
                          </kbd>{" "}
                          or click Extensions icon in the Activity Bar
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Search for V Theme</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Type "V Theme" in the search box
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Click Install</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Find V Theme in the results and click the Install
                          button
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Apply the Theme</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Press{" "}
                          <kbd className="px-1.5 py-0.5 rounded bg-muted text-xs">
                            Ctrl+K
                          </kbd>{" "}
                          <kbd className="px-1.5 py-0.5 rounded bg-muted text-xs">
                            Ctrl+T
                          </kbd>{" "}
                          and select V Theme
                        </p>
                      </div>
                    </li>
                  </ol>

                  <div className="mt-8">
                    <Button className="flex items-center gap-2" asChild>
                      <a
                        href="https://marketplace.visualstudio.com/items?itemName=nabinkhair.vtheme"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Open in Marketplace
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Command Line Method */}
          {activeTab === "cli" && (
            <motion.div
              className="w-full max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                {/* Left side - Terminal */}
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <div className="rounded-lg border border-border overflow-hidden shadow-xl">
                    {/* Terminal header */}
                    <div className="h-8 flex items-center px-3 bg-muted border-b border-border">
                      <div className="flex space-x-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs">Terminal</div>
                    </div>

                    {/* Terminal content */}
                    <div
                      ref={terminalRef}
                      className="bg-black p-4 h-80 overflow-y-auto"
                    >
                      <div className="font-mono text-sm">
                        <span className="text-green-400">user@vscode</span>
                        <span className="text-white">:</span>
                        <span className="text-blue-400">~</span>
                        <span className="text-white">$ </span>
                        <span className="text-white">{terminalText}</span>
                        {isTyping && <span className="animate-pulse">▋</span>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Steps */}
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-primary" />
                    <span>CLI Installation</span>
                  </h3>

                  <ol className="space-y-6">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Open a Terminal</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Open your command line or terminal application
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Run the Command</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Copy and paste the command below:
                        </p>

                        <div className="mt-2 relative">
                          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
                            {commands.cli}
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute right-2 top-2 h-7 w-7 p-0"
                            onClick={() => copyToClipboard(commands.cli, "cli")}
                          >
                            {copiedCommand === "cli" ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Apply the Theme</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Restart VS Code if needed, then press{" "}
                          <kbd className="px-1.5 py-0.5 rounded bg-muted text-xs">
                            Ctrl+K
                          </kbd>{" "}
                          <kbd className="px-1.5 py-0.5 rounded bg-muted text-xs">
                            Ctrl+T
                          </kbd>{" "}
                          and select V Theme
                        </p>
                      </div>
                    </li>
                  </ol>

                  <div className="mt-8">
                    <Button
                      className="flex items-center gap-2"
                      onClick={() => copyToClipboard(commands.cli, "btn")}
                    >
                      {copiedCommand === "btn" ? (
                        <>
                          <Check className="h-4 w-4" />
                          Copied to Clipboard
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy Command
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Extension Panel Method */}
          {activeTab === "extension" && (
            <motion.div
              className="w-full max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                {/* Left side - VS Code UI */}
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <div className="rounded-lg border border-border overflow-hidden shadow-xl">
                    {/* VS Code header */}
                    <div
                      className={`h-8 flex items-center px-3 ${
                        theme === "light" ? "bg-[#f0f0f0]" : "bg-[#252526]"
                      } border-b border-border`}
                    >
                      <div className="flex space-x-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Visual Studio Code
                      </div>
                    </div>

                    {/* VS Code content */}
                    <div
                      className={`${
                        theme === "light" ? "bg-[#f9f9f9]" : "bg-[#1e1e1e]"
                      } p-4 h-80 flex`}
                    >
                      {/* Left sidebar */}
                      <div className="w-12 h-full border-r border-border">
                        <div className="flex flex-col items-center gap-4 py-2">
                          <div className="w-8 h-8 rounded flex items-center justify-center bg-primary/10">
                            <FileJson className="h-5 w-5 text-primary" />
                          </div>
                          <div className="w-8 h-8 rounded flex items-center justify-center bg-background">
                            <Code2 className="h-5 w-5 text-muted-foreground" />
                          </div>
                        </div>
                      </div>

                      {/* Main content - Command palette */}
                      <div className="flex-1 flex flex-col">
                        <div className="p-4 text-center">
                          <p className="text-sm opacity-70 mb-4">
                            Press{" "}
                            <kbd className="px-1.5 py-0.5 rounded bg-muted text-xs">
                              Ctrl+P
                            </kbd>{" "}
                            to open Command Palette
                          </p>

                          <div
                            className={`w-full max-w-md mx-auto border border-border rounded-md p-2 ${
                              theme === "light" ? "bg-white" : "bg-[#252526]"
                            } shadow-md`}
                          >
                            <div className="flex items-center gap-2 mb-4">
                              <span className="text-sm opacity-70">&gt;</span>
                              <div className="flex-1 text-left">
                                <span className="text-sm font-medium text-primary">
                                  ext install nabinkhair.vtheme
                                </span>
                                <span className="animate-pulse">▋</span>
                              </div>
                            </div>

                            <div className="flex items-start gap-2 p-2 my-1 rounded-sm bg-primary/5">
                              <Palette className="h-5 w-5 mt-0.5 text-primary" />
                              <div className="flex-1 text-left">
                                <p className="text-sm font-medium">V Theme</p>
                                <p className="text-xs opacity-70">
                                  A professionally crafted VS Code theme
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Steps */}
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Keyboard className="h-5 w-5 text-primary" />
                    <span>Quick Installation</span>
                  </h3>

                  <ol className="space-y-6">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Open Command Palette</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Press{" "}
                          <kbd className="px-2 py-0.5 rounded bg-muted text-xs">
                            Ctrl+P
                          </kbd>{" "}
                          (or{" "}
                          <kbd className="px-2 py-0.5 rounded bg-muted text-xs">
                            Cmd+P
                          </kbd>{" "}
                          on Mac)
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Type Extension Command</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Type{" "}
                          <code className="text-primary font-mono">
                            ext install nabinkhair.vtheme
                          </code>
                        </p>

                        <div className="mt-2 relative">
                          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
                            {commands.extension}
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute right-2 top-2 h-7 w-7 p-0"
                            onClick={() =>
                              copyToClipboard(commands.extension, "ext")
                            }
                          >
                            {copiedCommand === "ext" ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Press Enter</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Press Enter to install the extension
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Apply the Theme</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Press{" "}
                          <kbd className="px-1.5 py-0.5 rounded bg-muted text-xs">
                            Ctrl+K
                          </kbd>{" "}
                          <kbd className="px-1.5 py-0.5 rounded bg-muted text-xs">
                            Ctrl+T
                          </kbd>{" "}
                          and select V Theme
                        </p>
                      </div>
                    </li>
                  </ol>

                  <div className="mt-8">
                    <Button
                      className="flex items-center gap-2"
                      onClick={() =>
                        copyToClipboard(commands.extension, "extbtn")
                      }
                    >
                      {copiedCommand === "extbtn" ? (
                        <>
                          <Check className="h-4 w-4" />
                          Command Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy Command
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
