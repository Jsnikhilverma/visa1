"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-500/20 bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo2.png"
            alt="Global Visa Solutions"
            width={72}
            height={40}
            className="h-12 w-18 transition-opacity hover:opacity-80"
          />
          <span className="hidden bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-lg font-bold text-transparent md:block">
            AXE VISA
            <br />
            TECHNOLOGY
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-8">
          {["Home", "Services", "About", "Testimonials", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-amber-100/60 transition-all hover:text-amber-400 hover:underline hover:underline-offset-4"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="bg-gradient-to-r from-amber-400 to-amber-600 backdrop-blur-lg hover:bg-amber-600/50 border border-amber-500/20 px-4 py-2  rounded-xl sm:ml-4"
          >
            Client Portal
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden text-amber-400 hover:bg-amber-500/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute left-0 top-20 w-full bg-black/95 backdrop-blur-xl md:hidden">
            <div className="flex flex-col space-y-6 p-8 border-t border-amber-500/20">
              {["Home", "Services", "About", "Testimonials", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-medium text-amber-100/80 hover:text-amber-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                )
              )}
              <Button className="mt-4 bg-amber-500/20 text-amber-400 hover:bg-amber-500/30">
                Client Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
