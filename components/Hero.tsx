"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import CloudIllustration from "@/components/CloudIllustration";

export default function Hero() {
  return (
    <section className="pt-28 lg:pt-36 pb-20 lg:pb-28 px-5 lg:px-8 bg-gradient-to-b from-white via-white to-blue-light/40 overflow-x-clip">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] tracking-tight">
            Ваши данные.{" "}
            <span className="text-blue">Ваш контроль.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed">
            Безопасное облачное хранилище для бизнеса. Храните, организуйте и
            делитесь файлами — с шифрованием банковского уровня и серверами в
            России.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue text-white font-medium hover:bg-blue-dark transition-colors"
            >
              Попробовать бесплатно
              <ArrowRight size={18} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:border-blue hover:text-blue transition-colors"
            >
              <Play size={16} />
              Смотреть демо
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["bg-blue", "bg-blue-dark", "bg-green", "bg-amber"].map(
                (bg, i) => (
                  <span
                    key={i}
                    className={`w-8 h-8 rounded-full ${bg} border-2 border-white`}
                  />
                ),
              )}
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-dark">1 000+</span> компаний
              доверяют нам
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-72 sm:h-80 lg:h-96"
        >
          <CloudIllustration />
        </motion.div>
      </div>
    </section>
  );
}
