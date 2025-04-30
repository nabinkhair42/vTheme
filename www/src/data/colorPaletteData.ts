// Color palette data for V Theme - Matched to theme JSON files
export type ColorInfo = {
  name: string;
  hexCode: string;
  usage: string;
};

export type ThemeColorPalette = {
  primary: ColorInfo[];
  syntax: ColorInfo[];
  ui: ColorInfo[];
};

export const darkThemeColors: ThemeColorPalette = {
  primary: [
    {
      name: "Primary",
      hexCode: "#64FFDA",
      usage: "Main accent color for interactive elements",
    },
    {
      name: "Secondary",
      hexCode: "#82AAFF",
      usage: "Secondary accent for highlights and focus states",
    },
    { name: "Background", hexCode: "#212836", usage: "Main editor background" },
    { name: "Foreground", hexCode: "#E9ECEF", usage: "Primary text color" },
  ],
  syntax: [
    {
      name: "Keywords",
      hexCode: "#FF79C6",
      usage: "Language keywords and control flow",
    },
    {
      name: "Strings",
      hexCode: "#5CFF87",
      usage: "String literals and text content",
    },
    {
      name: "Numbers",
      hexCode: "#FF8A8A",
      usage: "Numeric literals and constants",
    },
    {
      name: "Functions",
      hexCode: "#64FFDA",
      usage: "Function names and declarations",
    },
    {
      name: "Comments",
      hexCode: "#8695A8",
      usage: "Code comments and documentation",
    },
  ],
  ui: [
    {
      name: "Selection",
      hexCode: "#3A506B",
      usage: "Selected text background",
    },
    {
      name: "Line Highlight",
      hexCode: "#2B3647",
      usage: "Current line highlight",
    },
    {
      name: "Error",
      hexCode: "#FF5555",
      usage: "Error indicators and messages",
    },
    { name: "Warning", hexCode: "#FFCB6B", usage: "Warning indicators" },
    {
      name: "Active Tab",
      hexCode: "#212836",
      usage: "Currently active editor tab",
    },
    { name: "Inactive Tab", hexCode: "#1A212E", usage: "Inactive editor tabs" },
    { name: "Sidebar", hexCode: "#1A212E", usage: "Sidebar background" },
    {
      name: "Status Bar",
      hexCode: "#151C28",
      usage: "Status bar at bottom of editor",
    },
  ],
};

export const lightThemeColors: ThemeColorPalette = {
  primary: [
    {
      name: "Primary",
      hexCode: "#00A3A3",
      usage: "Main accent color for interactive elements",
    },
    {
      name: "Secondary",
      hexCode: "#0072C6",
      usage: "Secondary accent for highlights and focus states",
    },
    { name: "Background", hexCode: "#F5F8FA", usage: "Main editor background" },
    { name: "Foreground", hexCode: "#2D3748", usage: "Primary text color" },
  ],
  syntax: [
    {
      name: "Keywords",
      hexCode: "#A31DB1",
      usage: "Language keywords and control flow",
    },
    {
      name: "Strings",
      hexCode: "#16A349",
      usage: "String literals and text content",
    },
    {
      name: "Numbers",
      hexCode: "#E03E3E",
      usage: "Numeric literals and constants",
    },
    {
      name: "Functions",
      hexCode: "#00A3A3",
      usage: "Function names and declarations",
    },
    {
      name: "Comments",
      hexCode: "#718096",
      usage: "Code comments and documentation",
    },
  ],
  ui: [
    {
      name: "Selection",
      hexCode: "#C9E3F5",
      usage: "Selected text background",
    },
    {
      name: "Line Highlight",
      hexCode: "#E9EFF5",
      usage: "Current line highlight",
    },
    {
      name: "Error",
      hexCode: "#DC2626",
      usage: "Error indicators and messages",
    },
    { name: "Warning", hexCode: "#B45309", usage: "Warning indicators" },
    {
      name: "Active Tab",
      hexCode: "#F5F8FA",
      usage: "Currently active editor tab",
    },
    { name: "Inactive Tab", hexCode: "#FFFFFF", usage: "Inactive editor tabs" },
    { name: "Sidebar", hexCode: "#FFFFFF", usage: "Sidebar background" },
    {
      name: "Status Bar",
      hexCode: "#FFFFFF",
      usage: "Status bar at bottom of editor",
    },
  ],
};

export const syntaxExamples = {
  typescript: `interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

function processUser(user: User): void {
  // Check if user is admin
  if (user.role === 'admin') {
    console.log(\`Admin user: \${user.name}\`);
    grantAdminPrivileges(user.id);
  } else {
    const message = \`Regular user: \${user.name}\`;
    console.log(message);
  }
}

// Process a collection of users
const users: User[] = fetchUsers();
const admins = users.filter(u => u.role === 'admin');

admins.forEach(processUser);`,
  javascript: `const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    
    // Process the response
    return {
      success: true,
      timestamp: new Date(),
      results: data.map(item => ({
        id: item.id,
        value: item.value * 2
      }))
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return { success: false, error };
  }
};`,
};
