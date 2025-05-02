// Installation tabs data
export type InstallationMethod = "marketplace" | "cli" | "extension";

export const installationTabs = [
  {
    id: "marketplace" as const,
    label: "VS Code Marketplace",
    icon: "Sparkles",
  },
  {
    id: "cli" as const,
    label: "Command Line",
    icon: "Terminal",
  },
  {
    id: "extension" as const,
    label: "Extension Panel",
    icon: "Code2",
  },
];

// Installation commands
export const installationCommands = {
  cli: "code --install-extension nabinkhair.vtheme",
  extension: "ext install nabinkhair.vtheme",
};

// Installation steps for each method
export const installationSteps = {
  marketplace: [
    {
      title: "Open Extensions View",
      description:
        "Press Ctrl+Shift+X or click Extensions icon in the Activity Bar",
    },
    {
      title: "Search for V Theme",
      description: 'Type "V Theme" in the search box',
    },
    {
      title: "Click Install",
      description: "Find V Theme in the results and click the Install button",
    },
    {
      title: "Apply the Theme",
      description: "Press Ctrl+K Ctrl+T and select V Theme",
    },
  ],
  cli: [
    {
      title: "Open a Terminal",
      description: "Open your command line or terminal application",
    },
    {
      title: "Run the Command",
      description: "Copy and paste the command below:",
    },
    {
      title: "Apply the Theme",
      description:
        "Restart VS Code if needed, then press Ctrl+K Ctrl+T and select V Theme",
    },
  ],
  extension: [
    {
      title: "Open Command Palette",
      description: "Press Ctrl+P (or Cmd+P on Mac)",
    },
    {
      title: "Type Extension Command",
      description: "Type ext install nabinkhair.vtheme",
    },
    {
      title: "Press Enter",
      description: "Press Enter to install the extension",
    },
    {
      title: "Apply the Theme",
      description: "Press Ctrl+K Ctrl+T and select V Theme",
    },
  ],
};

// Marketplace mock data
export const marketplaceData = {
  title: "V Theme",
  description: "A professionally crafted VS Code theme",
  ratings: 5,
  ratingCount: 42,
  installs: "3.5K+",
  updated: "April 2025",
};

// Section heading data
export const sectionData = {
  title: "Get V Theme in 60 Seconds",
  subtitle:
    "Choose your preferred installation method and transform your coding environment",
  marketplaceUrl:
    "https://marketplace.visualstudio.com/items?itemName=nabinkhair.vtheme",
};
