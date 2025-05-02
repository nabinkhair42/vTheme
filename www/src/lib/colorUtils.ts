/**
 * Utility functions for color processing and dynamic color generation
 */

interface SyntaxColors {
  keyword: string;
  string: string;
  number: string;
  function: string;
  comment: string;
  variable: string;
  type: string;
  operator: string;
}

interface ThemeColors {
  bgColor: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  syntax: SyntaxColors;
}

/**
 * Get theme colors based on the current theme mode
 */
export function getThemeColors(currentTheme: 'light' | 'dark', colorData: any): ThemeColors {
  // Background color from theme data
  const bgColor =
    colorData.primary.find((c: any) => c.name === "Background")?.hexCode ||
    (currentTheme === "light" ? "#F5F8FA" : "#212836");

  // Primary accent color
  const primaryColor =
    colorData.primary.find((c: any) => c.name === "Primary")?.hexCode ||
    (currentTheme === "light" ? "#00A3A3" : "#64FFDA");

  // Secondary accent color
  const secondaryColor =
    colorData.primary.find((c: any) => c.name === "Secondary")?.hexCode ||
    (currentTheme === "light" ? "#0072C6" : "#82AAFF");

  // Text color
  const textColor =
    colorData.primary.find((c: any) => c.name === "Foreground")?.hexCode ||
    (currentTheme === "light" ? "#2D3748" : "#E9ECEF");

  // Syntax highlight colors
  const syntax: SyntaxColors = {
    keyword: currentTheme === "light" ? "#A31DB1" : "#FF79C6", // Pink/Purple
    string: currentTheme === "light" ? "#16A349" : "#5CFF87", // Green
    number: currentTheme === "light" ? "#E03E3E" : "#FF8A8A", // Red
    function: currentTheme === "light" ? "#00A3A3" : "#64FFDA", // Teal/Cyan
    comment: currentTheme === "light" ? "#718096" : "#8695A8", // Gray
    variable: currentTheme === "light" ? "#2D3748" : "#E9ECEF", // Text color
    type: currentTheme === "light" ? "#B45309" : "#FFCB6B", // Yellow/Orange
    operator: currentTheme === "light" ? "#0072C6" : "#82AAFF", // Blue
  };

  return {
    bgColor,
    primaryColor,
    secondaryColor,
    textColor,
    syntax
  };
}

/**
 * Get color value by key (handles nested syntax colors)
 */
export function getColorValue(
  key: string, 
  { bgColor, primaryColor, secondaryColor, textColor, syntax }: ThemeColors
): string {
  if (key.startsWith("syntax.")) {
    const syntaxKey = key.split(".")[1] as keyof SyntaxColors;
    return syntax[syntaxKey];
  }
  
  switch (key) {
    case "bgColor":
      return bgColor;
    case "primaryColor":
      return primaryColor;
    case "secondaryColor":
      return secondaryColor;
    case "textColor":
      return textColor;
    default:
      return "#000000"; // Fallback
  }
}

/**
 * Process example template by replacing placeholders with actual color values
 */
export function processExampleTemplate(
  template: string,
  colors: ThemeColors
): string {
  return template
    .replace("{bgColor}", colors.bgColor)
    .replace("{primaryColor}", colors.primaryColor)
    .replace("{secondaryColor}", colors.secondaryColor)
    .replace("{textColor}", colors.textColor);
}