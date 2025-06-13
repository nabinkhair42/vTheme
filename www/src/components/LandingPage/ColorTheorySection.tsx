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
  Plus,
  Minus,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { darkThemeColors, lightThemeColors } from "@/data/colorPaletteData";
import { colorTheoryPrinciplesData, IconName } from "@/data/colorTheory";
import { pageAnimations } from "@/lib/animations";
import { getThemeColors, getColorValue, processExampleTemplate } from "@/lib/colorUtils";
import { 
  getColorTheoryIllustration, 
  AnalogousColorHarmony, 
  ContrastReadability 
} from "./ColorTheoryIllustrations";

// Map icon names to actual components
const iconComponents: Record<IconName, LucideIcon> = {
  Paintbrush,
  Lightbulb,
  Palette,
  Eye,
  Brain,
  LayoutPanelLeft,
};

export function ColorTheorySection() {
  const { theme } = useTheme();
  const currentTheme = theme === "light" ? "light" : "dark";
  const [expandedTheory, setExpandedTheory] = useState<string | null>("analogous");

  // Get theme colors using our utility function
  const colorData = currentTheme === "light" ? lightThemeColors : darkThemeColors;
  const themeColors = getThemeColors(currentTheme, colorData);
  
  // Destructure colors for easier access
  const { bgColor, primaryColor, secondaryColor, textColor, syntax } = themeColors;

  // Process the imported data to create the final array for rendering
  const processedColorTheoryPrinciples = colorTheoryPrinciplesData.map(
    (principle) => {
      const IconComponent = iconComponents[principle.iconName];
      const example = processExampleTemplate(principle.exampleTemplate, themeColors);
      const colors = principle.colorKeys.map(key => getColorValue(key, themeColors));

      return {
        ...principle,
        icon: <IconComponent className="h-5 w-5" />,
        example,
        colors,
      };
    }
  );

  // Toggle expanding a theory card
  const toggleExpand = (theoryId: string) => {
    if (expandedTheory === theoryId) {
      setExpandedTheory(null);
    } else {
      setExpandedTheory(theoryId);
    }
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
          {...pageAnimations.fadeInUp}
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
              variants={pageAnimations.containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Use the processed data */}
              {processedColorTheoryPrinciples.map((principle) => (
                <motion.div
                  key={principle.id}
                  variants={pageAnimations.itemVariants}
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
                        {getColorTheoryIllustration(principle.illustration, themeColors)}

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
            {...pageAnimations.fadeInRight}
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
                        <AnalogousColorHarmony themeColors={themeColors} />
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
                        <ContrastReadability themeColors={themeColors} />
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
                              style={{ color: syntax.comment }}
                            >
                              {/* Comment - less important */}
                            </div>
                            <div style={{ color: syntax.keyword }}>
                              function{" "}
                              <span style={{ color: syntax.function }}>
                                getData
                              </span>
                              ()
                              <div
                                className="pl-4"
                                style={{ color: textColor }}
                              >
                                return{" "}
                                <span style={{ color: syntax.type }}>
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
                                    backgroundColor: syntax.keyword,
                                  }}
                                ></div>
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: syntax.type }}
                                ></div>
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{
                                    backgroundColor: syntax.comment,
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
              <Button className="gap-2 py-6">
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=UncleSamsTech.vtheme"
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
