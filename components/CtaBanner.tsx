"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section
      id="cta"
      className="relative py-20 lg:py-28 px-5 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
      }}
    >
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-30%] right-[-5%] w-80 h-80 bg-white/8 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Начните бесплатно — 14 дней пробного периода
          </h2>
          <p className="mt-4 text-blue-light/80 max-w-lg mx-auto">
            Без привязки карты. Без обязательств. Полный доступ ко всем функциям
            тарифа «Бизнес».
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 max-w-md mx-auto flex flex-col gap-3"
        >
          <input
            type="email"
            placeholder="Рабочий email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
          />
          <input
            type="text"
            placeholder="Название компании"
            className="w-full px-4 py-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
          />
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-blue font-semibold hover:bg-gray-100 transition-colors text-sm"
          >
            Попробовать бесплатно
            <ArrowRight size={16} />
          </button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 text-xs text-white/50"
        >
          Настройка за 2 минуты &middot; Отмена в любой момент
        </motion.p>
      </div>
    </section>
  );
}
