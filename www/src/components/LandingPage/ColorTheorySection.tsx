"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Paintbrush,
  Lightbulb,
  Palette,
  Sparkles,
  Eye,
  Brain,
  LayoutPanelLeft,
  ChevronRight,
  Plus,
  Minus,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { darkThemeColors, lightThemeColors } from "@/data/colorPaletteData";

export function ColorTheorySection() {
  const { theme } = useTheme();
  const currentTheme = theme === "light" ? "light" : "dark";
  const [expandedTheory, setExpandedTheory] = useState<string | null>(
    "analogous"
  );

  // Get theme colors based on current theme
  const colorData =
    currentTheme === "light" ? lightThemeColors : darkThemeColors;

  // Background color from theme data
  const bgColor =
    colorData.primary.find((c) => c.name === "Background")?.hexCode ||
    (currentTheme === "light" ? "#F5F8FA" : "#212836");

  // Primary accent color
  const primaryColor =
    colorData.primary.find((c) => c.name === "Primary")?.hexCode ||
    (currentTheme === "light" ? "#00A3A3" : "#64FFDA");

  // Secondary accent color
  const secondaryColor =
    colorData.primary.find((c) => c.name === "Secondary")?.hexCode ||
    (currentTheme === "light" ? "#0072C6" : "#82AAFF");

  // Text color
  const textColor =
    colorData.primary.find((c) => c.name === "Foreground")?.hexCode ||
    (currentTheme === "light" ? "#2D3748" : "#E9ECEF");

  // Syntax highlight colors
  const syntaxColors = {
    keyword: currentTheme === "light" ? "#A31DB1" : "#FF79C6", // Pink/Purple
    string: currentTheme === "light" ? "#16A349" : "#5CFF87", // Green
    number: currentTheme === "light" ? "#E03E3E" : "#FF8A8A", // Red
    function: currentTheme === "light" ? "#00A3A3" : "#64FFDA", // Teal/Cyan
    comment: currentTheme === "light" ? "#718096" : "#8695A8", // Gray
    variable: currentTheme === "light" ? "#2D3748" : "#E9ECEF", // Text color
    type: currentTheme === "light" ? "#B45309" : "#FFCB6B", // Yellow/Orange
    operator: currentTheme === "light" ? "#0072C6" : "#82AAFF", // Blue
  };

  // Define color theory principles with descriptions matching the requirements
  const colorTheoryPrinciples = [
    {
      id: "analogous",
      title: "Analogous Color Scheme",
      icon: <Palette className="h-5 w-5" />,
      theory:
        "Analogous colors are those next to each other on the color wheel (e.g., blue → teal → cyan).",
      effect: "Creates a harmonious, unified look that's easy on the eyes.",
      example: `Navy (${bgColor}), teal (${primaryColor}), blue (${secondaryColor}) — all cool tones that flow naturally.`,
      colors: [bgColor, primaryColor, secondaryColor],
      illustration: "analogous-wheel",
    },
    {
      id: "hsv",
      title: "Hue, Saturation, and Value (HSV Model)",
      icon: <Paintbrush className="h-5 w-5" />,
      theory:
        "Good themes vary hue (color), saturation (intensity), and value (lightness/darkness) to create visual hierarchy.",
      effect: "Guides attention subtly without visual noise.",
      example:
        "Bright functions vs. muted comments — this difference in value and saturation helps users prioritize information.",
      colors: [
        syntaxColors.keyword,
        syntaxColors.comment,
        syntaxColors.function,
      ],
      illustration: "hsv-model",
    },
    {
      id: "cool-colors",
      title: "Cool Colors Psychology",
      icon: <Brain className="h-5 w-5" />,
      theory:
        'Blues, greens, and teals are "cool" colors that evoke calmness, stability, and focus.',
      effect: "Users feel relaxed and attentive, not overstimulated.",
      example:
        "Ideal for development environments, where long focus sessions are key.",
      colors: [primaryColor, secondaryColor, bgColor],
      illustration: "cool-colors",
    },
    {
      id: "contrast",
      title: "Contrast and Accessibility",
      icon: <Eye className="h-5 w-5" />,
      theory: "Contrast between background and foreground improves legibility.",
      effect: "Lowers cognitive load, improves code comprehension.",
      example: `Uses dark backgrounds with soft-light text and just enough contrast for syntax clarity — avoiding harsh brightness.`,
      colors: [bgColor, textColor, primaryColor],
      illustration: "contrast",
    },
    {
      id: "hierarchy",
      title: "Visual Hierarchy Using Color",
      icon: <LayoutPanelLeft className="h-5 w-5" />,
      theory:
        "High-saturation or bright colors draw the eye. Desaturated or darker colors recede.",
      effect:
        "Important code elements (like keywords) stand out; less important ones (like punctuation or comments) fade back.",
      example:
        "Leverages this subtly — functions and variables are brighter than comments or brackets.",
      colors: [syntaxColors.keyword, textColor, syntaxColors.comment],
      illustration: "hierarchy",
    },
    {
      id: "minimal",
      title: "Minimal Palette Reduces Cognitive Load",
      icon: <Lightbulb className="h-5 w-5" />,
      theory:
        "Too many colors overwhelm working memory. Simpler schemes help comprehension.",
      effect:
        "The brain can process code faster when it isn't flooded with color variation.",
      example: "Uses a limited but expressive palette — strategic, not noisy.",
      colors: [
        syntaxColors.keyword,
        syntaxColors.function,
        syntaxColors.operator,
        syntaxColors.type,
        syntaxColors.comment,
      ],
      illustration: "minimal-palette",
    },
  ];

  // Toggle expanding a theory card
  const toggleExpand = (theoryId: string) => {
    if (expandedTheory === theoryId) {
      setExpandedTheory(null);
    } else {
      setExpandedTheory(theoryId);
    }
  };

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

  // Render color wheel illustration
  const renderColorWheel = (type: string) => {
    switch (type) {
      case "analogous-wheel":
        return (
          <div className="relative w-24 h-24 mx-auto my-4">
            <div className="absolute inset-0 rounded-full border border-border flex items-center justify-center overflow-hidden">
              <div
                className="absolute w-full h-full bg-gradient-to-r from-[var(--bg-color)] via-[var(--primary-color)] to-[var(--secondary-color)] opacity-70"
                style={
                  {
                    "--bg-color": bgColor,
                    "--primary-color": primaryColor,
                    "--secondary-color": secondaryColor,
                  } as any
                }
              ></div>
              <div className="relative z-10 bg-background/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-xs font-medium">Analogous</span>
              </div>
            </div>
          </div>
        );
      case "hsv-model":
        return (
          <div className="grid grid-cols-3 gap-2 my-4">
            <div className="flex flex-col items-center">
              <div className="w-full h-8 rounded bg-gradient-to-r from-[#FF0000] via-[#00FF00] to-[#0000FF]"></div>
              <span className="text-xs mt-1">Hue</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-full h-8 rounded bg-gradient-to-r"
                style={{
                  backgroundImage: `linear-gradient(to right, ${primaryColor}20, ${primaryColor})`,
                }}
              ></div>
              <span className="text-xs mt-1">Saturation</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full h-8 rounded bg-gradient-to-r from-[#000000] to-[#FFFFFF]"></div>
              <span className="text-xs mt-1">Value</span>
            </div>
          </div>
        );
      case "cool-colors":
        return (
          <div className="flex justify-center gap-2 my-4">
            <div
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: primaryColor }}
            ></div>
            <div
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: secondaryColor }}
            ></div>
            <div
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: bgColor }}
            ></div>
          </div>
        );
      case "contrast":
        return (
          <div
            className="my-4 p-3 rounded"
            style={{ backgroundColor: bgColor }}
          >
            <div className="flex flex-col gap-2">
              <div
                className="h-2 w-3/4 rounded"
                style={{ backgroundColor: textColor }}
              ></div>
              <div
                className="h-2 w-1/2 rounded"
                style={{ backgroundColor: primaryColor }}
              ></div>
              <div
                className="h-2 w-2/3 rounded"
                style={{ backgroundColor: textColor }}
              ></div>
            </div>
          </div>
        );
      case "hierarchy":
        return (
          <div
            className="my-4 p-3 rounded"
            style={{ backgroundColor: bgColor }}
          >
            <div className="flex flex-col gap-2">
              <div
                className="h-2 rounded"
                style={{ backgroundColor: syntaxColors.keyword }}
              ></div>
              <div
                className="h-2 rounded"
                style={{ backgroundColor: textColor }}
              ></div>
              <div
                className="h-2 rounded"
                style={{ backgroundColor: syntaxColors.comment }}
              ></div>
            </div>
          </div>
        );
      case "minimal-palette":
        return (
          <div className="flex flex-wrap justify-center gap-1 my-4">
            <div
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: syntaxColors.keyword }}
            ></div>
            <div
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: syntaxColors.function }}
            ></div>
            <div
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: syntaxColors.operator }}
            ></div>
            <div
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: syntaxColors.type }}
            ></div>
            <div
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: syntaxColors.comment }}
            ></div>
          </div>
        );
      default:
        return null;
    }
  };

  // Code snippet with proper syntax highlighting for demonstration
  const codeSnippet = `function processData(input: string[]): Result {
  // Transform raw data into structured format
  const result = input.map((item) => {
    const value = parseInt(item);
    if (value > 100) {
      return { 
        status: "success",
        data: value * 2 
      };
    } else {
      return { 
        status: "error",
        message: "Value too low"
      };
    }
  });
  
  console.log(\`Processed \${result.length} items\`);
  return result;
}`;

  const highlightSyntax = (code: string) => {
    // Apply syntax highlighting with theme colors
    return (
      code
        // Keywords
        .replace(
          /\b(function|const|let|var|if|else|return|interface|type|class|extends|implements|new|this|import|export|from|as|of|for|while|do|switch|case|break|continue|async|await|try|catch|throw|typeof|instanceof|void|null|undefined|true|false)\b/g,
          `<span style="color: ${syntaxColors.keyword}">$1</span>`
        )
        // Strings
        .replace(
          /(['"`])((?:\\.|(?!\1)[^\\])*)\1/g,
          `<span style="color: ${syntaxColors.string}">$&</span>`
        )
        // Numbers
        .replace(
          /\b(\d+)\b/g,
          `<span style="color: ${syntaxColors.number}">$1</span>`
        )
        // Functions
        .replace(
          /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g,
          `<span style="color: ${syntaxColors.function}">$1</span>(`
        )
        // Comments
        .replace(
          /(\/\/.*$)/gm,
          `<span style="color: ${syntaxColors.comment}">$1</span>`
        )
        // Types
        .replace(/:?\s*\b([A-Z][a-zA-Z0-9_$]*)\b/g, (match, p1) =>
          match.includes(":")
            ? `: <span style="color: ${syntaxColors.type}">${p1}</span>`
            : `<span style="color: ${syntaxColors.type}">${p1}</span>`
        )
        // Variables after declaration
        .replace(
          /\b(const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g,
          `<span style="color: ${syntaxColors.keyword}">$1</span> <span style="color: ${syntaxColors.variable}">$2</span>`
        )
        // Operators
        .replace(
          /([=!<>+\-*/%&|^~?:]+)(?![^<]*>)/g,
          `<span style="color: ${syntaxColors.operator}">$1</span>`
        )
    );
  };

  return (
    <section
      className="py-20 sm:py-28 overflow-hidden relative"
      id="color-theory"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.08),transparent_80%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>

      <div className="container px-4 sm:px-8 mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Scientific Design</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight">
            Color Theory Elements in{" "}
            <span className="text-primary">V Theme</span>
          </h2>

          <p className="text-muted-foreground text-center max-w-2xl text-base sm:text-lg">
            The science behind V Theme's color scheme that makes it easy on the
            eyes and enhances productivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left side - Principles list */}
          <div className="lg:col-span-2">
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {colorTheoryPrinciples.map((principle) => (
                <motion.div
                  key={principle.id}
                  variants={itemVariants}
                  className={`border border-border rounded-xl overflow-hidden transition-all duration-300 ${
                    expandedTheory === principle.id
                      ? "shadow-lg border-primary/30"
                      : "hover:border-primary/20"
                  }`}
                >
                  <div
                    className="flex items-center gap-3 p-4 cursor-pointer"
                    onClick={() => toggleExpand(principle.id)}
                  >
                    <div
                      className={`flex-shrink-0 p-2 rounded-lg ${
                        expandedTheory === principle.id
                          ? "bg-primary/20 text-primary"
                          : "bg-primary/10 text-primary/80"
                      }`}
                    >
                      {principle.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium">{principle.title}</h3>
                    </div>
                    <div>
                      {expandedTheory === principle.id ? (
                        <Minus className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <Plus className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                  </div>

                  {expandedTheory === principle.id && (
                    <div className="px-4 pb-4 pt-0">
                      <div className="pt-2 pb-3 border-t border-border">
                        {renderColorWheel(principle.illustration)}

                        <div className="space-y-3 mt-3">
                          <div>
                            <h4 className="text-sm font-medium flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-primary/80"></div>
                              The Theory
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {principle.theory}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-primary/80"></div>
                              The Effect
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {principle.effect}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-primary/80"></div>
                              In V Theme
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {principle.example}
                            </p>
                          </div>

                          <div className="flex gap-2 mt-4">
                            {principle.colors.map((color, index) => (
                              <div
                                key={index}
                                className="flex-grow h-8 rounded"
                                style={{ backgroundColor: color }}
                                title={color}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Visual demonstration */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
              <div className="p-5 border-b border-border">
                <h3 className="text-lg font-semibold mb-2">
                  Visual Demonstration
                </h3>
                <p className="text-sm text-muted-foreground">
                  See how color theory principles create a harmonious and
                  functional coding environment
                </p>
              </div>

              <Tabs defaultValue="comparison" className="p-5">
                <TabsList className="mb-6">
                  <TabsTrigger value="comparison">Light vs Dark</TabsTrigger>
                  <TabsTrigger value="principles">
                    Applied Principles
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="comparison">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium mb-3">V Theme Dark</h4>
                      <div className="bg-[#212836] p-4 rounded-lg h-48 overflow-hidden">
                        <div className="space-y-2">
                          <div
                            className="h-2 w-3/4 rounded"
                            style={{ backgroundColor: "#FF79C6" }}
                          ></div>
                          <div
                            className="h-2 w-2/3 rounded"
                            style={{ backgroundColor: "#64FFDA" }}
                          ></div>
                          <div
                            className="h-2 w-1/2 rounded"
                            style={{ backgroundColor: "#82AAFF" }}
                          ></div>
                          <div
                            className="h-2 w-4/5 rounded"
                            style={{ backgroundColor: "#FFCB6B" }}
                          ></div>
                          <div
                            className="h-2 w-2/3 rounded"
                            style={{ backgroundColor: "#E9ECEF" }}
                          ></div>
                          <div
                            className="h-2 w-3/4 rounded"
                            style={{ backgroundColor: "#8695A8" }}
                          ></div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: "#212836" }}
                            ></div>
                            <span>Deep navy background reduces eye strain</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: "#64FFDA" }}
                            ></div>
                            <span>
                              Teal provides enough contrast without being harsh
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: "#8695A8" }}
                            ></div>
                            <span>Muted grays for less important elements</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-3">
                        V Theme Light
                      </h4>
                      <div className="bg-[#F5F8FA] p-4 rounded-lg h-48 overflow-hidden">
                        <div className="space-y-2">
                          <div
                            className="h-2 w-3/4 rounded"
                            style={{ backgroundColor: "#A31DB1" }}
                          ></div>
                          <div
                            className="h-2 w-2/3 rounded"
                            style={{ backgroundColor: "#00A3A3" }}
                          ></div>
                          <div
                            className="h-2 w-1/2 rounded"
                            style={{ backgroundColor: "#0072C6" }}
                          ></div>
                          <div
                            className="h-2 w-4/5 rounded"
                            style={{ backgroundColor: "#B45309" }}
                          ></div>
                          <div
                            className="h-2 w-2/3 rounded"
                            style={{ backgroundColor: "#2D3748" }}
                          ></div>
                          <div
                            className="h-2 w-3/4 rounded"
                            style={{ backgroundColor: "#718096" }}
                          ></div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: "#F5F8FA" }}
                            ></div>
                            <span>Soft light background prevents glare</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: "#00A3A3" }}
                            ></div>
                            <span>Teal maintains identity across themes</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: "#2D3748" }}
                            ></div>
                            <span>
                              Deep grays for main text avoid pure black
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-primary/5 rounded-lg p-4">
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      Color Theory Consistency
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Both themes maintain the same color theory principles
                      while adapting to different lighting conditions. Notice
                      how the dark theme uses higher saturation to compensate
                      for the darker background, while the light theme uses
                      deeper, more muted tones to prevent eye strain in bright
                      environments.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="principles">
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                          <Palette className="h-4 w-4 text-primary" />
                          Analogous Color Harmony
                        </h4>
                        <div
                          className="p-4 rounded-lg"
                          style={{ backgroundColor: bgColor }}
                        >
                          <div className="flex justify-between items-center">
                            <div
                              className="w-12 h-12 rounded-full border"
                              style={{ backgroundColor: bgColor }}
                            ></div>
                            <ChevronRight
                              className="text-[var(--primary-color)]"
                              style={{ "--primary-color": primaryColor } as any}
                            />
                            <div
                              className="w-12 h-12 rounded-full"
                              style={{ backgroundColor: primaryColor }}
                            ></div>
                            <ChevronRight
                              className="text-[var(--secondary-color)]"
                              style={
                                { "--secondary-color": secondaryColor } as any
                              }
                            />
                            <div
                              className="w-12 h-12 rounded-full"
                              style={{ backgroundColor: secondaryColor }}
                            ></div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          V Theme uses colors adjacent on the color wheel to
                          create harmony.
                        </p>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                          <Eye className="h-4 w-4 text-primary" />
                          Contrast for Readability
                        </h4>
                        <div
                          className="p-4 rounded-lg"
                          style={{ backgroundColor: bgColor }}
                        >
                          <div className="space-y-3">
                            <div
                              className="p-2 rounded"
                              style={{ backgroundColor: primaryColor }}
                            >
                              <div
                                className="h-4 rounded w-4/5"
                                style={{ backgroundColor: bgColor }}
                              ></div>
                            </div>
                            <div
                              className="p-2 rounded"
                              style={{ backgroundColor: syntaxColors.keyword }}
                            >
                              <div
                                className="h-4 rounded w-3/5"
                                style={{ backgroundColor: bgColor }}
                              ></div>
                            </div>
                            <div
                              className="p-2 rounded"
                              style={{ backgroundColor: textColor }}
                            >
                              <div
                                className="h-4 rounded w-2/3"
                                style={{ backgroundColor: bgColor }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Optimized contrast for extended reading without eye
                          strain.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                        <LayoutPanelLeft className="h-4 w-4 text-primary" />
                        Visual Hierarchy
                      </h4>
                      <div
                        className="p-4 rounded-lg"
                        style={{ backgroundColor: bgColor }}
                      >
                        <div className="space-y-2">
                          <div>
                            <div
                              className="text-xs"
                              style={{ color: syntaxColors.comment }}
                            >
                              // Comment - less important
                            </div>
                            <div style={{ color: syntaxColors.keyword }}>
                              function{" "}
                              <span style={{ color: syntaxColors.function }}>
                                getData
                              </span>
                              ()
                              <div
                                className="pl-4"
                                style={{ color: textColor }}
                              >
                                return{" "}
                                <span style={{ color: syntaxColors.type }}>
                                  Result
                                </span>
                                ;
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Important elements stand out through strategic color
                          use.
                        </p>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                          <Brain className="h-4 w-4 text-primary" />
                          Cognitive Load Reduction
                        </h4>
                        <div className="p-4 rounded-lg">
                          <div className="flex gap-3 justify-between">
                            <div
                              className="flex-1 p-2 rounded"
                              style={{ backgroundColor: bgColor }}
                            >
                              <div className="flex flex-wrap gap-1 justify-center">
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: primaryColor }}
                                ></div>
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: secondaryColor }}
                                ></div>
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{
                                    backgroundColor: syntaxColors.keyword,
                                  }}
                                ></div>
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: syntaxColors.type }}
                                ></div>
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{
                                    backgroundColor: syntaxColors.comment,
                                  }}
                                ></div>
                              </div>
                              <div
                                className="text-center text-xs mt-2"
                                style={{ color: textColor }}
                              >
                                V Theme
                              </div>
                            </div>
                            <div
                              className="flex-1 p-2 rounded"
                              style={{ backgroundColor: bgColor }}
                            >
                              <div className="flex flex-wrap gap-1 justify-center">
                                {Array(15)
                                  .fill(0)
                                  .map((_, i) => (
                                    <div
                                      key={i}
                                      className="w-3 h-3 rounded-full"
                                      style={{
                                        backgroundColor: `hsl(${
                                          i * 24
                                        }, 70%, 60%)`,
                                      }}
                                    ></div>
                                  ))}
                              </div>
                              <div
                                className="text-center text-xs mt-2"
                                style={{ color: textColor }}
                              >
                                Too Many Colors
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Limited palette reduces cognitive load while coding.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="mt-8 text-center">
              <Button className="gap-2">
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=nabinkhair.vtheme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Palette className="h-4 w-4" />
                  Try V Theme's Color Harmony
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
