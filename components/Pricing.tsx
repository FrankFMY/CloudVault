"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Стартап",
    price: "Бесплатно",
    period: "",
    highlight: false,
    cta: "Начать бесплатно",
    features: [
      "10 ГБ хранилища",
      "3 пользователя",
      "Базовый доступ к файлам",
      "Email-поддержка",
    ],
  },
  {
    name: "Бизнес",
    price: "990 ₽",
    period: "/мес",
    highlight: true,
    cta: "Подключить",
    features: [
      "1 ТБ хранилища",
      "25 пользователей",
      "Все интеграции",
      "Совместная работа",
      "Версионирование файлов",
      "Приоритетная поддержка",
    ],
  },
  {
    name: "Корпоративный",
    price: "4 990 ₽",
    period: "/мес",
    highlight: false,
    cta: "Связаться с нами",
    features: [
      "Безлимитное хранилище",
      "Безлимит пользователей",
      "SSO и LDAP",
      "API доступ",
      "SLA 99.9%",
      "Выделенный менеджер",
      "Интеграция с 1С",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">Тарифы</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Выберите план, который подходит вашей команде
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 pt-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative max-w-md mx-auto lg:max-w-none w-full rounded-2xl p-7 flex flex-col ${
                tier.highlight
                  ? "ring-2 ring-blue shadow-xl lg:scale-105"
                  : "border border-gray-200"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue text-white text-xs font-semibold">
                  Популярный
                </span>
              )}

              <h3 className="text-lg font-bold text-dark">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-dark">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-gray-500">{tier.period}</span>
                )}
              </div>

              <ul className="mt-6 flex flex-col gap-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-blue shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-8 block text-center py-3 rounded-lg font-medium transition-colors ${
                  tier.highlight
                    ? "bg-blue text-white hover:bg-blue-dark"
                    : "border border-gray-200 text-gray-700 hover:border-blue hover:text-blue"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
