// Installation tabs data
export type InstallationMethod = "marketplace" | "cli" | "extension" | "vsix";

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
  {
    id: "vsix" as const,
    label: "Direct Download",
    icon: "Download",
  },
];

// Installation commands
export const installationCommands = {
  cli: "code --install-extension UncleSamsTech.vtheme",
  extension: "ext install UncleSamsTech.vtheme",
  vsix: "code --install-extension UncleSamsTech-0.0.3.vsix"
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
      description: "Type ext install UncleSamsTech.vtheme",
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
  vsix: [
    {
      title: "Download VSIX File",
      description: "Download the V Theme VSIX package directly from our website",
    },
    {
      title: "Open VS Code",
      description: "Launch Visual Studio Code on your computer",
    },
    {
      title: "Install from VSIX",
      description: "Go to Extensions view, click '...' menu, and select 'Install from VSIX'",
    },
    {
      title: "Select and Install",
      description: "Browse to the downloaded VSIX file and select it to install",
    },
    {
      title: "Apply the Theme",
      description: "Press Ctrl+K Ctrl+T and select V Theme from the list",
    },
  ],
};

// VSIX file data
export const vsixData = {
  fileName: "vtheme-0.0.3.vsix",
  fileSize: "154 KB",
  version: "0.0.2",
  downloadPath: "/vtheme-0.0.3.vsix",
  lastUpdated: "08, May 2025",
};

// Marketplace mock data
export const marketplaceData = {
  title: "V Theme",
  description: "A professionally crafted VS Code theme",
  ratings: 5,
  ratingCount: 42,
  installs: "0.6k+",
  updated: "April 2025",
};

// Section heading data
export const sectionData = {
  title: "Get in 60 Seconds",
  subtitle:
    "Choose your preferred installation method and transform your coding environment",
  marketplaceUrl:
    "https://marketplace.visualstudio.com/items?itemName=UncleSamsTech.vtheme",
};
