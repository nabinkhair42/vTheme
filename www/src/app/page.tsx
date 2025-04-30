import { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "V Theme - Color Theory Based VS Code Theme",
  description: "A professionally crafted theme with both dark and light variants based on color theory principles",
  icons: {
    icon: "/icon.svg",
  },
};

export default function Home() {
  return <LandingPage />;
}
