"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  Copy,
  Download,
  Eye,
  Moon,
  Sparkles,
  Star,
  Sun,
  Terminal,
  Zap,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";

export function HeroSection() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [installCount, setInstallCount] = useState(680);
  const [rating, setRating] = useState(5);
  const [copySuccess, setCopySuccess] = useState(false);

  // Handle mounted state for hydration
  useEffect(() => setMounted(true), []);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText("code --install-extension UncleSamsTech.vtheme");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  if (!mounted) return null;

  const currentTheme = theme === "system" ? "dark" : theme;
  const isLightTheme = currentTheme === "light";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        delay: 0.4,
      },
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 200, damping: 25 },
    },
  };

  const gradientOverlayStyle = {
    background: isLightTheme
      ? "linear-gradient(120deg, rgba(0, 163, 163, 0.1), rgba(0, 114, 198, 0.1))"
      : "linear-gradient(120deg, rgba(100, 255, 218, 0.1), rgba(130, 170, 255, 0.1))",
  };

  return (
    <section className="w-full py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

        <div className="absolute top-1/3 -left-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] opacity-60"></div>
        <div className="absolute -bottom-1/3 -right-1/3 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] opacity-60"></div>

        {/* Animated particles/stars effect */}
        <div className="stars-container absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/70 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-12 md:space-y-16 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top badge */}
          <motion.div variants={itemVariants}>
            <Badge
              variant="outline"
              className="px-4 py-2 gap-2 text-sm font-medium border-primary/30 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span>V Theme 0.0.3 — {new Date().getFullYear()}</span>
            </Badge>
          </motion.div>

          {/* Main heading and description */}
          <motion.div
            className="space-y-6 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600 dark:from-primary dark:to-cyan-400 ">
                Perfect
              </span>{" "}
              VS Code Theme for Developers
            </h1>

            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
              A professionally crafted color theme based on advanced color
              theory principles, designed to reduce eye strain and enhance code
              readability during long coding sessions
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="h-14 px-8 gap-3 relative overflow-hidden group">
                <Download className="h-5 w-5" />
                Install V Theme
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=UncleSamsTech.vtheme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label="Install V Theme from VS Code Marketplace"
                />
              </Button>

              <Button
                variant="secondary"
                className="h-14 px-8 gap-3 border-primary/30 transition-all"
              >
                <a
                  href="https://github.com/nabinkhair42/vtheme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGithub  className="h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>

            {/* Quick copy code snippet */}
            <div
              className="relative max-w-lg mx-auto rounded-lg border border-border/60 overflow-hidden bg-card/50 backdrop-blur-sm cursor-pointer hover:border-primary/40 transition-colors"
              onClick={handleCopyCommand}
            >
              <div className="flex items-center text-xs gap-2 p-2 border-b border-border/60 bg-muted/20">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-muted-foreground">Terminal</span>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <code className="font-mono text-sm">
                  code --install-extension UncleSamsTech.vtheme
                </code>
                <div
                  className="tooltip"
                  data-tip={copySuccess ? "Copied!" : "Copy to clipboard"}
                >
                  {copySuccess ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Theme preview */}
          <motion.div
            className="w-full max-w-6xl mx-auto"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="relative group">
              {/* Theme image preview */}
              <div className="relative rounded-xl overflow-hidden border border-border/60 shadow-2xl bg-background">
                {/* Top editor bar */}
                <div className="flex items-center px-4 py-2 bg-card/80 border-b border-border/60">
                  <div className="flex space-x-2 mr-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">
                    V Theme {isLightTheme ? "Light" : "Dark"} • Visual Studio
                    Code
                  </span>

                  {/* Theme switch control */}
                  <div className="ml-auto flex items-center">
                    <motion.div
                      className={`flex h-7 rounded-full p-1 bg-card/80 backdrop-blur-sm border border-border/40 shadow-inner`}
                      initial={false}
                      animate={{ x: isLightTheme ? 0 : 2 }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`h-5 w-5 rounded-full ${
                          !isLightTheme
                            ? "bg-primary/20 text-primary"
                            : "text-muted-foreground"
                        }`}
                        onClick={() => setTheme("dark")}
                      >
                        <Moon className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`h-5 w-5 rounded-full ${
                          isLightTheme
                            ? "bg-primary/20 text-primary"
                            : "text-muted-foreground"
                        }`}
                        onClick={() => setTheme("light")}
                      >
                        <Sun className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Theme preview content */}
                <div className="relative w-full aspect-[16/9] rounded-b-xl overflow-hidden bg-background">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isLightTheme ? "light" : "dark"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Image
                        src={isLightTheme ? "/preview-light.png" : "/preview-dark.png"}
                        alt={`V Theme ${isLightTheme ? "Light" : "Dark"} Preview`}
                        fill
                        className="object-cover object-center w-full h-full"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
                        priority
                        quality={95}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Overlay with gradient when hovered */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 rounded-xl"
                  animate={{ opacity: isHovered ? 0.05 : 0 }}
                  style={gradientOverlayStyle}
                ></motion.div>

                {/* Feature badges */}
                <motion.div
                  className="absolute bottom-4 left-4 px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center gap-1.5">
                    <Star
                      fill="currentColor"
                      className="h-3.5 w-3.5 text-yellow-500"
                    />
                    <span className="text-xs font-medium">
                      {rating}/5 rating
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 right-4 px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="flex items-center gap-1.5">
                    <Download className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-medium">
                      {installCount.toLocaleString()}+ installs
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mt-4 px-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: <Eye className="h-5 w-5" />,
                title: "Eye-friendly",
                description:
                  "Reduced contrast and balanced colors to minimize eye strain",
              },
              {
                icon: <Code2 className="h-5 w-5" />,
                title: "Enhanced readability",
                description:
                  "Optimized syntax highlighting for better code comprehension",
              },
              {
                icon: <Terminal className="h-5 w-5" />,
                title: "Clean UI",
                description:
                  "Harmonized UI elements for a unified coding environment",
              },
              {
                icon: <Zap className="h-5 w-5" />,
                title: "AI optimized",
                description:
                  "Color palette refined using advanced ML algorithms",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="relative group p-5 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors"
                variants={itemVariants}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-400/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-semibold mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
