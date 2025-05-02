import type { LucideIcon } from 'lucide-react';

// Define available icon names for better type checking
export type IconName = 'Palette' | 'Paintbrush' | 'Brain' | 'Eye' | 'LayoutPanelLeft' | 'Lightbulb';

export interface ColorTheoryPrinciple {
  id: string;
  title: string;
  iconName: IconName; // Use the new type for better type checking
  theory: string;
  effect: string;
  exampleTemplate: string; // Use a template string
  colorKeys: string[]; // Keys to look up colors dynamically
  illustration: string;
}

export const colorTheoryPrinciplesData: ColorTheoryPrinciple[] = [
  {
    id: "analogous",
    title: "Analogous Color Scheme",
    iconName: "Palette",
    theory:
      "Analogous colors are those next to each other on the color wheel (e.g., blue → teal → cyan).",
    effect: "Creates a harmonious, unified look that's easy on the eyes.",
    exampleTemplate: `Navy ({bgColor}), teal ({primaryColor}), blue ({secondaryColor}) — all cool tones that flow naturally.`,
    colorKeys: ["bgColor", "primaryColor", "secondaryColor"],
    illustration: "analogous-wheel",
  },
  {
    id: "hsv",
    title: "Hue, Saturation, and Value (HSV Model)",
    iconName: "Paintbrush",
    theory:
      "Good themes vary hue (color), saturation (intensity), and value (lightness/darkness) to create visual hierarchy.",
    effect: "Guides attention subtly without visual noise.",
    exampleTemplate:
      "Bright functions vs. muted comments — this difference in value and saturation helps users prioritize information.",
    colorKeys: ["syntax.keyword", "syntax.comment", "syntax.function"],
    illustration: "hsv-model",
  },
  {
    id: "cool-colors",
    title: "Cool Colors Psychology",
    iconName: "Brain",
    theory:
      'Blues, greens, and teals are "cool" colors that evoke calmness, stability, and focus.',
    effect: "Users feel relaxed and attentive, not overstimulated.",
    exampleTemplate:
      "Ideal for development environments, where long focus sessions are key.",
    colorKeys: ["primaryColor", "secondaryColor", "bgColor"],
    illustration: "cool-colors",
  },
  {
    id: "contrast",
    title: "Contrast and Accessibility",
    iconName: "Eye",
    theory: "Contrast between background and foreground improves legibility.",
    effect: "Lowers cognitive load, improves code comprehension.",
    exampleTemplate: `Uses dark backgrounds with soft-light text ({textColor}) and just enough contrast ({primaryColor}) for syntax clarity — avoiding harsh brightness.`,
    colorKeys: ["bgColor", "textColor", "primaryColor"],
    illustration: "contrast",
  },
  {
    id: "hierarchy",
    title: "Visual Hierarchy Using Color",
    iconName: "LayoutPanelLeft",
    theory:
      "High-saturation or bright colors draw the eye. Desaturated or darker colors recede.",
    effect:
      "Important code elements (like keywords) stand out; less important ones (like punctuation or comments) fade back.",
    exampleTemplate:
      "Leverages this subtly — functions and variables are brighter than comments or brackets.",
    colorKeys: ["syntax.keyword", "textColor", "syntax.comment"],
    illustration: "hierarchy",
  },
  {
    id: "minimal",
    title: "Minimal Palette Reduces Cognitive Load",
    iconName: "Lightbulb",
    theory:
      "Too many colors overwhelm working memory. Simpler schemes help comprehension.",
    effect:
      "The brain can process code faster when it isn't flooded with color variation.",
    exampleTemplate: "Uses a limited but expressive palette — strategic, not noisy.",
    colorKeys: [
      "syntax.keyword",
      "syntax.function",
      "syntax.operator",
      "syntax.type",
      "syntax.comment",
    ],
    illustration: "minimal-palette",
  },
];