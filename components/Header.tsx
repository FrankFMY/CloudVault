"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Menu, X } from "lucide-react";

const links = [
  { href: "#advantages", label: "Преимущества" },
  { href: "#how-it-works", label: "Как это работает" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#security", label: "Безопасность" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 lg:h-20 bg-white/90 backdrop-blur-md border-b border-gray-200/60">
      <div className="mx-auto max-w-7xl h-full flex items-center justify-between px-5 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Cloud size={28} className="text-blue" />
          <span className="text-xl font-bold text-dark">
            Cloud<span className="text-blue">Vault</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-700 hover:text-blue transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-lg bg-blue text-white text-sm font-medium hover:bg-blue-dark transition-colors"
        >
          Попробовать бесплатно
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-dark"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-gray-700 py-2"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue text-white text-sm font-medium mt-1"
              >
                Попробовать бесплатно
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
