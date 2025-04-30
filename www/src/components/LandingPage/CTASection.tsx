"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Download, 
  Github, 
  Share2, 
  Twitter, 
  Linkedin, 
  ArrowRight, 
  CheckCircle2, 
  Copy, 
  Sparkles, 
  Star
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export function CTASection() {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [installMethod, setInstallMethod] = useState<"marketplace" | "cli" | "github">("marketplace");
  
  const currentYear = new Date().getFullYear();
  const currentTheme = theme === "light" ? "light" : "dark";
  
  const installCommand = "code --install-extension nabinkhair.vtheme";
  
  const copyCommand = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>
      
      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Enhance Your Coding Experience</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Elevate Your <span className="text-primary gradient-text">VS Code</span> Today
          </h2>
          
          <p className="max-w-2xl text-muted-foreground md:text-xl mx-auto">
            Join thousands of developers who've transformed their coding environment with V Theme's 
            color theory-based design for improved focus and reduced eye strain.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column - Download options */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Choose Your Installation Method</h3>
              
              {/* Installation Method Tabs */}
              <div className="flex border-b border-border mb-6">
                <button
                  onClick={() => setInstallMethod("marketplace")}
                  className={`flex items-center gap-2 px-4 py-2 border-b-2 text-sm font-medium transition-colors ${
                    installMethod === "marketplace"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border/60"
                  }`}
                >
                  <Download className="h-4 w-4" />
                  VS Code Marketplace
                </button>
                
                <button
                  onClick={() => setInstallMethod("cli")}
                  className={`flex items-center gap-2 px-4 py-2 border-b-2 text-sm font-medium transition-colors ${
                    installMethod === "cli"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border/60"
                  }`}
                >
                  <Copy className="h-4 w-4" />
                  Command Line
                </button>
                
                <button
                  onClick={() => setInstallMethod("github")}
                  className={`flex items-center gap-2 px-4 py-2 border-b-2 text-sm font-medium transition-colors ${
                    installMethod === "github"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border/60"
                  }`}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </button>
              </div>
              
              {/* Marketplace Method */}
              {installMethod === "marketplace" && (
                <div className="space-y-5">
                  <p className="text-sm text-muted-foreground">
                    Install directly from the VS Code marketplace with just a few clicks. The easiest method for most users.
                  </p>
                  
                  <ol className="space-y-4 text-sm">
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary font-medium text-xs">
                        1
                      </div>
                      <span>Open VS Code and click on the <strong>Extensions</strong> icon in the sidebar</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary font-medium text-xs">
                        2
                      </div>
                      <span>Search for <strong>"V Theme"</strong> and click Install</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary font-medium text-xs">
                        3
                      </div>
                      <span>Select V Theme from the Color Theme menu (<kbd className="px-1 py-0.5 rounded bg-muted text-xs">Ctrl+K</kbd> <kbd className="px-1 py-0.5 rounded bg-muted text-xs">Ctrl+T</kbd>)</span>
                    </li>
                  </ol>
                  
                  <div className="pt-3">
                    <Button className="w-full" size="lg">
                      <a 
                        href="https://marketplace.visualstudio.com/items?itemName=nabinkhair.vtheme" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full"
                      >
                        <Download className="h-4 w-4" />
                        Open VS Code Marketplace
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              )}
              
              {/* CLI Method */}
              {installMethod === "cli" && (
                <div className="space-y-5">
                  <p className="text-sm text-muted-foreground">
                    Use the VS Code CLI to install V Theme directly from your terminal.
                  </p>
                  
                  <div className="relative">
                    <div className="flex items-center px-4 py-2 text-xs font-medium bg-muted/60 border-b border-border">
                      <div className="flex space-x-1 mr-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <span>Terminal</span>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-b-lg font-mono text-sm overflow-x-auto">
                      $ {installCommand}
                    </div>
                    <button 
                      onClick={copyCommand}
                      className="absolute right-3 top-12 p-1.5 rounded-md bg-background/50 backdrop-blur-sm border border-border hover:bg-muted transition-colors"
                      aria-label="Copy command"
                    >
                      {copied ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/5 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <p>After installation, select V Theme from the Color Theme menu (<kbd className="px-1 py-0.5 rounded bg-muted text-xs">Ctrl+K</kbd> <kbd className="px-1 py-0.5 rounded bg-muted text-xs">Ctrl+T</kbd>)</p>
                  </div>
                  
                  <div className="pt-3">
                    <Button 
                      className="w-full" 
                      size="lg" 
                      onClick={copyCommand}
                    >
                      {copied ? (
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle2 className="h-4 w-4" />
                          Command Copied!
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Copy className="h-4 w-4" />
                          Copy Install Command
                        </div>
                      )}
                    </Button>
                  </div>
                </div>
              )}
              
              {/* GitHub Method */}
              {installMethod === "github" && (
                <div className="space-y-5">
                  <p className="text-sm text-muted-foreground">
                    Clone the repository from GitHub and install manually. Best for developers who want to customize the theme.
                  </p>
                  
                  <ol className="space-y-4 text-sm">
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary font-medium text-xs">
                        1
                      </div>
                      <span>Clone the repository to your local machine</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary font-medium text-xs">
                        2
                      </div>
                      <span>Copy the folder to your VS Code extensions directory</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary font-medium text-xs">
                        3
                      </div>
                      <span>Restart VS Code and select V Theme from the Color Theme menu</span>
                    </li>
                  </ol>
                  
                  <div className="relative">
                    <div className="bg-muted/30 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      $ git clone https://github.com/nabinkhair42/vtheme.git
                    </div>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText("git clone https://github.com/nabinkhair42/vtheme.git");
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      className="absolute right-3 top-3 p-1.5 rounded-md bg-background/50 backdrop-blur-sm border border-border hover:bg-muted transition-colors"
                      aria-label="Copy command"
                    >
                      {copied ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                  
                  <div className="pt-3">
                    <Button className="w-full" size="lg">
                      <a 
                        href="https://github.com/nabinkhair42/vtheme" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
          
          {/* Right column - Theme preview */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-blue-600/30 rounded-2xl blur opacity-40"></div>
            
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
              <div className="flex items-center px-4 h-10 bg-card border-b border-border">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-muted-foreground">Visual Studio Code</span>
              </div>
              
              <div className="relative aspect-[4/3] max-h-[500px] overflow-hidden">
                <Image
                  src={currentTheme === "light" ? "/preview-light.png" : "/preview-dark.png"}
                  alt={`V Theme ${currentTheme === "light" ? "Light" : "Dark"} Preview`}
                  className="object-cover w-full h-full"
                  fill
                />
                
                {/* Floating stars effect */}
                <div className="absolute top-5 right-5 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30 shadow-lg">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-medium ml-1">4.9/5</span>
                </div>
                
                {/* Download count badge */}
                <div className="absolute bottom-5 left-5 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30 shadow-lg">
                  <span className="text-xs font-medium">3,500+ installs</span>
                </div>
              </div>
            </div>
            
            {/* Callout box */}
            <div className="absolute -bottom-6 -right-6 max-w-xs bg-card border border-border/60 rounded-xl p-4 shadow-lg backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 bg-primary/10 p-2 rounded-md">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Better for Your Eyes</h4>
                  <p className="text-xs text-muted-foreground">
                    Thoughtfully designed to reduce eye strain during long coding sessions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Social sharing */}
        <div className="mt-20 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Share2 className="h-4 w-4 text-primary" />
            <h3 className="text-base font-medium">Share V Theme with Your Network</h3>
          </div>
          
          <p className="text-sm text-muted-foreground mb-6">
            Enjoying V Theme? Spread the word and help fellow developers discover a better coding experience!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button >
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  "Just discovered V Theme for VS Code - a professionally crafted theme based on color theory principles that reduces eye strain. Check it out!"
                )}%20https://marketplace.visualstudio.com/items?itemName=nabinkhair.vtheme`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Twitter className="h-4 w-4 text-[#1DA1F2] group-hover:text-[#1DA1F2]" />
                Share on Twitter
              </a>
            </Button>
            
            <Button variant="secondary" >
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  "https://marketplace.visualstudio.com/items?itemName=nabinkhair.vtheme"
                )}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4 text-[#0A66C2] group-hover:text-[#0A66C2]" />
                Share on LinkedIn
              </a>
            </Button>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-24 text-center">
          <div className="flex items-center justify-center mb-4">
            <Image 
              src="/logo.svg"
              alt="V Theme Logo"
              width={40}
              height={40}
              className="w-8 h-8"
            />
          </div>
          
          <p className="text-sm font-medium">
            © {currentYear} V Theme by Nabin Khair. All rights reserved.
          </p>
          
          <p className="text-xs text-muted-foreground mt-2">
            VS Code theme crafted with ❤️ and color theory.
          </p>
        </footer>
      </div>
    </section>
  );
}
