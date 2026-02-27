"use client";

import { motion } from "framer-motion";

const clients = [
  "ТехноГрупп",
  "АльфаСтрой",
  "МедСервис",
  "ФинансПро",
  "ЛогистикА",
  "ИнноТех",
];

export default function Clients() {
  return (
    <section className="py-16 lg:py-20 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-8"
        >
          Нам доверяют компании
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 lg:gap-x-14"
        >
          {clients.map((name) => (
            <span
              key={name}
              className="text-xl lg:text-2xl font-bold text-gray-300 hover:text-dark transition-colors select-none"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
