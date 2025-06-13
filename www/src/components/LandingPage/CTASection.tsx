"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Share2, CheckCircle2, Sparkles, Star } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export function CTASection() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  const currentTheme = theme === "light" ? "light" : "dark";

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
            Elevate Your{" "}
            <span className="text-primary gradient-text">VS Code</span> Today
          </h2>

          <p className="max-w-2xl text-muted-foreground md:text-xl mx-auto">
            Join thousands of developers who've transformed their coding
            environment with V Theme's color theory-based design for improved
            focus and reduced eye strain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold mb-6">
                Ready to Transform Your Coding Experience?
              </h3>

              <div className="space-y-6">
                <p className="text-muted-foreground">
                  V Theme offers multiple installation options to fit your
                  workflow. Whether you prefer the VS Code Marketplace, command
                  line, extension panel, or direct download, we've got you
                  covered.
                </p>

                <div className="flex flex-col gap-4">
                  <Button className="w-full" size="lg" asChild>
                    <a href="#installation">
                      <Download className="h-4 w-4 mr-2" />
                      Get V Theme Now
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full"
                    size="lg"
                    asChild
                  >
                    <a
                      href="https://github.com/nabinkhair42/vtheme"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="h-4 w-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Optimized for Readability</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Reduces Eye Strain</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Light & Dark Variants</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Based on Color Theory</span>
                  </div>
                </div>
              </div>
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
                <span className="text-xs text-muted-foreground">
                  Visual Studio Code
                </span>
              </div>

              <div className="relative aspect-[4/3] max-h-[500px] overflow-hidden">
                <Image
                  src={
                    currentTheme === "light"
                      ? "/preview-light.png"
                      : "/preview-dark.png"
                  }
                  alt={`V Theme ${
                    currentTheme === "light" ? "Light" : "Dark"
                  } Preview`}
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
                  <span className="text-xs font-medium ml-1">5/5</span>
                </div>

                {/* Download count badge */}
                <div className="absolute bottom-5 left-5 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30 shadow-lg">
                  <span className="text-xs font-medium">680+ installs</span>
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
                  <h4 className="text-sm font-medium mb-1">
                    Better for Your Eyes
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Thoughtfully designed to reduce eye strain during long
                    coding sessions
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
            <h3 className="text-base font-medium">
              Share V Theme with Your Network
            </h3>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Enjoying V Theme? Spread the word and help fellow developers
            discover a better coding experience!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  "Just discovered V Theme for VS Code - a professionally crafted theme based on color theory principles that reduces eye strain. Check it out!"
                )}%20https://marketplace.visualstudio.com/items?itemName=UncleSamsTech.vtheme`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaSquareXTwitter className="h-4 w-4" />
                Share on Twitter
              </a>
            </Button>

            <Button variant="secondary">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  "https://marketplace.visualstudio.com/items?itemName=UncleSamsTech.vtheme"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaLinkedin className="h-4 w-4" />
                Share on LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
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
