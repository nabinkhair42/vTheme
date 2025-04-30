import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import VSCodeLayout from "@/components/VSCode/VSCodeLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "V Theme - Beautiful VS Code Theme",
  description:
    "A professionally crafted VS Code theme based on color theory principles to reduce eye strain and enhance code readability",
  // add url and author
  authors: [
    {
      name: "Nabin Khair",
      url: "https://nabinkhair.com.np",
    },
  ],
  keywords: [
    "VS Code",
    "Theme",
    "Dark Theme",
    "Light Theme",
    "Nabin Khair",
    "V Theme",
    "Code Editor",
    "Programming",
  ],

  openGraph: {
    images: [
      {
        url: "https://vthemes.nabinkhair.com.np/preview-dark.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <VSCodeLayout>{children}</VSCodeLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
