"use client";

import { motion } from "framer-motion";
import { Upload, FolderOpen, Globe } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: Upload,
    title: "Загрузите файлы",
    description:
      "Перетащите файлы или загрузите через приложение. Поддержка любых форматов до 50 ГБ.",
  },
  {
    num: 2,
    icon: FolderOpen,
    title: "Организуйте и делитесь",
    description:
      "Создавайте папки, настраивайте доступ, работайте вместе с командой в реальном времени.",
  },
  {
    num: 3,
    icon: Globe,
    title: "Работайте откуда угодно",
    description:
      "Доступ с любого устройства — веб, десктоп, мобильное приложение. Всегда под рукой.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 px-5 lg:px-8 bg-gray-50"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Как это работает
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Три шага до безопасного облачного хранилища
          </p>
        </motion.div>

        <div className="relative grid lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="hidden lg:block absolute top-6 left-[16%] right-[16%] h-0.5 bg-gray-200">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="h-full bg-blue origin-left"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.25 }}
              className="relative text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-blue text-white text-lg font-bold flex items-center justify-center mb-5 relative z-10">
                {step.num}
              </div>
              <div className="mx-auto w-14 h-14 rounded-xl bg-blue-muted flex items-center justify-center mb-4">
                <step.icon size={26} className="text-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark">{step.title}</h3>
              <p className="mt-2 text-gray-500 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
