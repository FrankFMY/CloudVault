"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Server, Users, Building2 } from "lucide-react";

const advantages = [
  {
    icon: ShieldCheck,
    title: "AES-256 шифрование",
    description:
      "Данные шифруются при передаче и хранении. Защита на уровне банковских систем.",
  },
  {
    icon: Server,
    title: "99.99% Uptime",
    description:
      "Распределённая инфраструктура гарантирует доступность ваших данных круглосуточно.",
  },
  {
    icon: Users,
    title: "Совместная работа",
    description:
      "Работайте над файлами вместе. Версионирование, комментарии, гибкие права доступа.",
  },
  {
    icon: Building2,
    title: "Интеграция с 1С",
    description:
      "Прямое подключение к 1С:Предприятие. Синхронизация документов в один клик.",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 lg:py-28 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Почему CloudVault
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Всё, что нужно бизнесу для безопасной работы с файлами
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {advantages.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-gray-200 p-7 hover:shadow-lg hover:border-blue/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-muted flex items-center justify-center mb-5">
                <a.icon size={24} className="text-blue" />
              </div>
              <h3 className="text-lg font-bold text-dark">{a.title}</h3>
              <p className="mt-2 text-gray-500 leading-relaxed">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
