"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-brass/20" : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#home" className="font-display text-xl tracking-tight text-parchment">
          {site.shortName}
          <span className="ml-2 font-mono text-[10px] tracking-[0.3em] text-brass">
            L.L.C
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.2em] text-parchment/70 transition-colors hover:text-brass"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contact" variant="primary">
            Get a Quote
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-px w-6 bg-parchment" />
          <span className="h-px w-6 bg-parchment" />
        </button>
      </Container>

      {open && (
        <div className="border-t border-brass/20 bg-ink md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.2em] text-parchment/80"
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" className="w-fit">
              Get a Quote
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
