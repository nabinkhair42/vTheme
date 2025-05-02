"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Moon,
  Sun,
  CheckCircle2,
  Code2,
  Sparkles,
  Eye,
  Star,
  Terminal,
  Zap,
  Copy,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export function HeroSection() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [installCount, setInstallCount] = useState(3524);
  const [rating, setRating] = useState(4.9);
  const [copySuccess, setCopySuccess] = useState(false);

  // Handle mounted state for hydration
  useEffect(() => setMounted(true), []);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText("code --install-extension nabinkhair.vtheme");
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
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        delay: 0.3,
      },
    },
    hover: {
      y: -5,
      transition: { type: "spring", stiffness: 200, damping: 25 },
    },
  };

  return (
    <section className="w-full py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] opacity-60"></div>

        {/* Animated particles/stars effect - reduced quantity for better performance */}
        <div className="stars-container absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/70 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-10 lg:space-y-12 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top badge */}
          <motion.div variants={itemVariants}>
            <Badge
              variant="outline"
              className="px-4 py-1.5 gap-2 text-sm font-medium border-primary/30 backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>V Theme 1.0 — {new Date().getFullYear()}</span>
            </Badge>
          </motion.div>

          {/* Main heading and description */}
          <motion.div
            className="space-y-5 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600 dark:from-primary dark:to-cyan-400">
                Perfect
              </span>{" "}
              VS Code Theme for Developers
            </h1>

            <p className="mx-auto max-w-[700px] text-muted-foreground text-base md:text-lg">
              A professionally crafted color theme based on advanced color
              theory principles, designed to reduce eye strain and enhance code
              readability during long coding sessions
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div variants={itemVariants} className="space-y-5 w-full max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="lg" 
                className="gap-2 relative overflow-hidden group"
                asChild
              >
                <a
                  href="#installation"
                  className="flex items-center"
                >
                  <Download className="h-4 w-4" />
                  Get V Theme
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-primary/20"
                asChild
              >
                <a
                  href="https://github.com/nabinkhair42/vtheme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaGithub className="h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>

            {/* Quick copy code snippet */}
            <div
              className="relative rounded-lg border border-border/60 overflow-hidden bg-card/50 backdrop-blur-sm cursor-pointer hover:border-primary/40 transition-colors group"
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
              <div className="px-4 py-3 flex items-center justify-between group-hover:bg-muted/20 transition-colors">
                <code className="font-mono text-sm">
                  code --install-extension nabinkhair.vtheme
                </code>
                <div className="text-muted-foreground">
                  {copySuccess ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 group-hover:text-foreground transition-colors" />
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Theme preview */}
          <motion.div
            className="w-full max-w-5xl mx-auto mt-6"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="relative group">
              {/* Theme image preview */}
              <div className="relative rounded-xl overflow-hidden border border-border/60 shadow-xl">
                {/* Top editor bar */}
                <div className="flex items-center px-4 py-2 bg-card/80 border-b border-border/60 backdrop-blur-sm">
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
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 gap-1.5 rounded-full text-xs font-medium"
                      onClick={() => setTheme(isLightTheme ? "dark" : "light")}
                    >
                      {isLightTheme ? (
                        <>
                          <Moon className="h-3.5 w-3.5" /> Dark
                        </>
                      ) : (
                        <>
                          <Sun className="h-3.5 w-3.5" /> Light
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Theme preview content */}
                <div className="aspect-video transition-all rounded-xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isLightTheme ? "light" : "dark"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 rounded-xl"
                    >
                      <Image
                        src={
                          isLightTheme
                            ? "/preview-light.png"
                            : "/preview-dark.png"
                        }
                        alt={`V Theme ${
                          isLightTheme ? "Light" : "Dark"
                        } Preview`}
                        fill
                        className="object-cover rounded-xl"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Feature badges */}
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg">
                  <div className="flex items-center gap-1.5">
                    <Star
                      fill="currentColor"
                      className="h-3.5 w-3.5 text-yellow-500"
                    />
                    <span className="text-xs font-medium">
                      {rating}/5 rating
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg">
                  <div className="flex items-center gap-1.5">
                    <Download className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-medium">
                      {installCount.toLocaleString()}+ installs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mt-2 px-2"
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
                className="relative p-5 rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-center w-9 h-9 mb-3 rounded-md bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-semibold mb-1.5">
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
