import { Cloud } from "lucide-react";

const columns = [
  {
    title: "Продукт",
    links: [
      { label: "Преимущества", href: "#advantages" },
      { label: "Как это работает", href: "#how-it-works" },
      { label: "Тарифы", href: "#pricing" },
      { label: "Безопасность", href: "#security" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "#" },
      { label: "Блог", href: "#" },
      { label: "Карьера", href: "#" },
      { label: "Партнёрам", href: "#" },
    ],
  },
  {
    title: "Контакты",
    links: [
      { label: "info@cloudvault.ru", href: "mailto:info@cloudvault.ru" },
      { label: "8 800 100-00-00", href: "tel:88001000000" },
      { label: "Москва, Россия", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark pt-16 pb-8 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-10 border-b border-white/10">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <Cloud size={24} className="text-blue" />
              <span className="text-lg font-bold text-white">
                Cloud<span className="text-blue">Vault</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              Безопасное облачное хранилище для бизнеса любого масштаба.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} CloudVault. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
