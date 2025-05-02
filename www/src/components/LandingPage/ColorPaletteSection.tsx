"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { useState } from "react";
import { darkThemeColors, lightThemeColors } from "@/data/colorPaletteData";
import { motion } from "framer-motion";
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react";

export function ColorPaletteSection() {
  const { theme } = useTheme();
  const [copied, setCopied] = useState<string | null>(null);
  const [expandedColor, setExpandedColor] = useState<string | null>(null);
  const currentTheme = theme === "light" ? "light" : "dark";

  // Get theme colors based on current theme
  const colorData =
    currentTheme === "light" ? lightThemeColors : darkThemeColors;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  // Function to generate lighter/darker variations of colors
  const generateColorVariations = (hexColor: string) => {
    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Generate 3 variations (lighter to darker)
    const variations = [
      // 30% lighter
      `#${Math.min(255, Math.floor(r * 1.3))
        .toString(16)
        .padStart(2, "0")}${Math.min(255, Math.floor(g * 1.3))
        .toString(16)
        .padStart(2, "0")}${Math.min(255, Math.floor(b * 1.3))
        .toString(16)
        .padStart(2, "0")}`,

      // Original color
      hexColor,

      // 30% darker
      `#${Math.floor(r * 0.7)
        .toString(16)
        .padStart(2, "0")}${Math.floor(g * 0.7)
        .toString(16)
        .padStart(2, "0")}${Math.floor(b * 0.7)
        .toString(16)
        .padStart(2, "0")}`,
    ];

    return variations;
  };

  // Toggle expanding a color card
  const toggleExpand = (colorName: string) => {
    if (expandedColor === colorName) {
      setExpandedColor(null);
    } else {
      setExpandedColor(colorName);
    }
  };

  // Animation variants for color cards
  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    },
    expanded: {
      scale: 1.02,
      zIndex: 10,
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for color variations section
  const variationsVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 },
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
      id="colors"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Color Palette
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Carefully crafted colors that enhance coding experience and reduce eye
          strain
        </motion.p>

        <Tabs defaultValue="primary" className="mb-8">
          <TabsList className="mb-6 sm:mb-8 w-full ">
            <TabsTrigger value="primary">Primary</TabsTrigger>
            <TabsTrigger value="syntax">Syntax</TabsTrigger>
            <TabsTrigger value="ui">UI</TabsTrigger>
          </TabsList>

          {/* Primary Colors Tab */}
          <TabsContent value="primary">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {colorData.primary.map((color, index) => (
                <motion.div
                  key={color.name}
                  className={`rounded-lg overflow-hidden border border-border transition-all duration-300 ${
                    expandedColor === color.name ? "shadow-lg" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={
                    expandedColor !== color.name ? "hover" : undefined
                  }
                  animate={
                    expandedColor === color.name ? "expanded" : undefined
                  }
                  variants={cardVariants}
                >
                  <div
                    className="h-20 sm:h-28 cursor-pointer flex justify-between items-end p-3 sm:p-4 relative overflow-hidden"
                    style={{ backgroundColor: color.hexCode }}
                    onClick={() => toggleExpand(color.name)}
                  >
                    <div className="absolute top-3 right-3 p-1 text-white/80 bg-black/20 backdrop-blur-sm rounded">
                      {expandedColor === color.name ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </div>

                    <div className="flex-grow"></div>

                    <button
                      className="bg-background/90 hover:bg-background text-foreground p-2 rounded-md backdrop-blur-sm z-10 transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(color.hexCode);
                      }}
                      aria-label={`Copy color ${color.hexCode}`}
                    >
                      {copied === color.hexCode ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>

                  <div className="p-3 sm:p-4">
                    <h3 className="text-sm sm:text-base font-medium">
                      {color.name}
                    </h3>
                    <p className="text-xs font-mono mt-1">{color.hexCode}</p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {color.usage}
                    </p>
                  </div>

                  <motion.div
                    className="px-3 pb-3 overflow-hidden"
                    variants={variationsVariants}
                    initial="hidden"
                    animate={
                      expandedColor === color.name ? "visible" : "hidden"
                    }
                  >
                    <p className="text-xs font-medium mb-2">
                      Color variations:
                    </p>
                    <div className="flex gap-2">
                      {generateColorVariations(color.hexCode).map(
                        (variation, i) => (
                          <div
                            key={i}
                            className="flex-1 flex flex-col items-center"
                          >
                            <div
                              className="w-full h-8 rounded cursor-pointer mb-1 border border-border/50"
                              style={{ backgroundColor: variation }}
                              onClick={() => copyToClipboard(variation)}
                            ></div>
                            <span className="text-[10px] font-mono">
                              {variation}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Syntax Colors Tab */}
          <TabsContent value="syntax">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {colorData.syntax.map((color, index) => (
                <motion.div
                  key={color.name}
                  className={`rounded-lg overflow-hidden border border-border transition-all duration-300 ${
                    expandedColor === color.name ? "shadow-lg" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={
                    expandedColor !== color.name ? "hover" : undefined
                  }
                  animate={
                    expandedColor === color.name ? "expanded" : undefined
                  }
                  variants={cardVariants}
                >
                  <div
                    className="h-20 sm:h-28 cursor-pointer flex justify-between items-end p-3 sm:p-4 relative overflow-hidden"
                    style={{ backgroundColor: color.hexCode }}
                    onClick={() => toggleExpand(color.name)}
                  >
                    <div className="absolute top-3 right-3 p-1 text-white/80 bg-black/20 backdrop-blur-sm rounded">
                      {expandedColor === color.name ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </div>

                    <div className="flex-grow"></div>

                    <button
                      className="bg-background/90 hover:bg-background text-foreground p-2 rounded-md backdrop-blur-sm z-10 transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(color.hexCode);
                      }}
                      aria-label={`Copy color ${color.hexCode}`}
                    >
                      {copied === color.hexCode ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>

                  <div className="p-3 sm:p-4">
                    <h3 className="text-sm sm:text-base font-medium">
                      {color.name}
                    </h3>
                    <p className="text-xs font-mono mt-1">{color.hexCode}</p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {color.usage}
                    </p>
                  </div>

                  <motion.div
                    className="px-3 pb-3 overflow-hidden"
                    variants={variationsVariants}
                    initial="hidden"
                    animate={
                      expandedColor === color.name ? "visible" : "hidden"
                    }
                  >
                    <p className="text-xs font-medium mb-2">
                      Color variations:
                    </p>
                    <div className="flex gap-2">
                      {generateColorVariations(color.hexCode).map(
                        (variation, i) => (
                          <div
                            key={i}
                            className="flex-1 flex flex-col items-center"
                          >
                            <div
                              className="w-full h-8 rounded cursor-pointer mb-1 border border-border/50"
                              style={{ backgroundColor: variation }}
                              onClick={() => copyToClipboard(variation)}
                            ></div>
                            <span className="text-[10px] font-mono">
                              {variation}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* UI Elements Tab */}
          <TabsContent value="ui">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {colorData.ui.map((color, index) => (
                <motion.div
                  key={color.name}
                  className={`rounded-lg overflow-hidden border border-border transition-all duration-300 ${
                    expandedColor === color.name ? "shadow-lg" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={
                    expandedColor !== color.name ? "hover" : undefined
                  }
                  animate={
                    expandedColor === color.name ? "expanded" : undefined
                  }
                  variants={cardVariants}
                >
                  <div
                    className="h-20 sm:h-28 cursor-pointer flex justify-between items-end p-3 sm:p-4 relative overflow-hidden"
                    style={{ backgroundColor: color.hexCode }}
                    onClick={() => toggleExpand(color.name)}
                  >
                    <div className="absolute top-3 right-3 p-1 text-white/80 bg-black/20 backdrop-blur-sm rounded">
                      {expandedColor === color.name ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </div>

                    <div className="flex-grow"></div>

                    <button
                      className="bg-background/90 hover:bg-background text-foreground p-2 rounded-md backdrop-blur-sm z-10 transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(color.hexCode);
                      }}
                      aria-label={`Copy color ${color.hexCode}`}
                    >
                      {copied === color.hexCode ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>

                  <div className="p-3 sm:p-4">
                    <h3 className="text-sm sm:text-base font-medium">
                      {color.name}
                    </h3>
                    <p className="text-xs font-mono mt-1">{color.hexCode}</p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {color.usage}
                    </p>
                  </div>

                  <motion.div
                    className="px-3 pb-3 overflow-hidden"
                    variants={variationsVariants}
                    initial="hidden"
                    animate={
                      expandedColor === color.name ? "visible" : "hidden"
                    }
                  >
                    <p className="text-xs font-medium mb-2">
                      Color variations:
                    </p>
                    <div className="flex gap-2">
                      {generateColorVariations(color.hexCode).map(
                        (variation, i) => (
                          <div
                            key={i}
                            className="flex-1 flex flex-col items-center"
                          >
                            <div
                              className="w-full h-8 rounded cursor-pointer mb-1 border border-border/50"
                              style={{ backgroundColor: variation }}
                              onClick={() => copyToClipboard(variation)}
                            ></div>
                            <span className="text-[10px] font-mono">
                              {variation}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
