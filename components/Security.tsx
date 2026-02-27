"use client";

import { motion } from "framer-motion";
import { Shield, Server, FileSearch, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Сквозное шифрование",
    description:
      "AES-256 для данных в покое и TLS 1.3 при передаче. Ваши файлы недоступны даже для нас.",
  },
  {
    icon: Server,
    title: "Дата-центры в России",
    description:
      "Tier III сертифицированные ЦОД. Полное соответствие требованиям 152-ФЗ о персональных данных.",
  },
  {
    icon: FileSearch,
    title: "Аудит и контроль",
    description:
      "Полная история действий с файлами. Гранулярные права доступа и журнал изменений.",
  },
  {
    icon: Lock,
    title: "Двухфакторная аутентификация",
    description:
      "2FA через SMS и приложение. Поддержка SSO и LDAP для корпоративных клиентов.",
  },
];

const badges = ["ФЗ-152", "ISO 27001", "ГОСТ Р 57580"];

export default function Security() {
  return (
    <section id="security" className="py-20 lg:py-28 px-5 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Безопасность на первом месте
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Корпоративный уровень защиты данных для каждого клиента
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white border border-gray-200 p-7"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-muted flex items-center justify-center mb-5">
                <f.icon size={24} className="text-blue" />
              </div>
              <h3 className="text-lg font-bold text-dark">{f.title}</h3>
              <p className="mt-2 text-gray-500 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {badges.map((badge) => (
            <div
              key={badge}
              className="px-5 py-2.5 rounded-lg bg-blue-muted border border-blue/10 text-sm font-semibold text-blue"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
