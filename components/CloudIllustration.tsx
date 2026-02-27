"use client";

import { ShieldCheck, Upload, FileText, Users, FolderOpen } from "lucide-react";

const floatingCards = [
  {
    icon: ShieldCheck,
    label: "AES-256",
    className: "top-[6%] left-[2%]",
    delay: 0,
    iconColor: "text-green",
  },
  {
    icon: Upload,
    label: "Upload",
    className: "top-[4%] right-[4%]",
    delay: 0.8,
    iconColor: "text-blue",
  },
  {
    icon: FileText,
    label: "Docs",
    className: "bottom-[12%] left-[0%]",
    delay: 1.6,
    iconColor: "text-amber",
  },
  {
    icon: Users,
    label: "Team",
    className: "bottom-[8%] right-[2%]",
    delay: 2.4,
    iconColor: "text-blue-dark",
  },
  {
    icon: FolderOpen,
    label: "Files",
    className: "top-[2%] left-[38%]",
    delay: 3.2,
    iconColor: "text-blue",
  },
];

const particles = [
  { top: "18%", left: "22%", size: 6, dur: 4 },
  { top: "72%", left: "78%", size: 4, dur: 5 },
  { top: "28%", left: "82%", size: 5, dur: 4.5 },
  { top: "68%", left: "15%", size: 4, dur: 5.5 },
  { top: "12%", left: "62%", size: 3, dur: 4.2 },
];

export default function CloudIllustration() {
  return (
    <div
      className="relative w-full h-full"
      style={{ animation: "float 6s ease-in-out infinite" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-blue/8 rounded-full blur-3xl" />

      <svg
        viewBox="0 0 400 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-auto drop-shadow-sm"
      >
        <defs>
          <linearGradient
            id="cloud-grad"
            x1="200"
            y1="50"
            x2="200"
            y2="220"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#DBEAFE" />
          </linearGradient>
          <filter
            id="cloud-shadow"
            x="-15%"
            y="-15%"
            width="130%"
            height="150%"
          >
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="14"
              floodColor="#2563EB"
              floodOpacity="0.12"
            />
          </filter>
        </defs>

        <g filter="url(#cloud-shadow)">
          <rect
            x="75"
            y="130"
            width="250"
            height="72"
            rx="36"
            fill="url(#cloud-grad)"
          />
          <circle cx="138" cy="118" r="54" fill="url(#cloud-grad)" />
          <circle cx="215" cy="88" r="68" fill="url(#cloud-grad)" />
          <circle cx="285" cy="115" r="48" fill="url(#cloud-grad)" />
        </g>

        <rect
          x="150"
          y="138"
          width="100"
          height="4"
          rx="2"
          fill="#2563EB"
          opacity="0.07"
        />
        <rect
          x="150"
          y="150"
          width="70"
          height="4"
          rx="2"
          fill="#2563EB"
          opacity="0.05"
        />
        <rect
          x="150"
          y="162"
          width="85"
          height="4"
          rx="2"
          fill="#2563EB"
          opacity="0.04"
        />

        <circle cx="135" cy="152" r="10" fill="#2563EB" opacity="0.06" />
        <path
          d="M132 152 l3 3 l5-6"
          stroke="#2563EB"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.15"
        />
      </svg>

      {floatingCards.map((card, i) => (
        <div
          key={i}
          className={`absolute bg-white rounded-xl shadow-lg shadow-blue/8 border border-gray-100 px-3 py-2 flex items-center gap-2 ${card.className}`}
          style={{
            animation: `float-slow 5s ease-in-out ${card.delay}s infinite`,
          }}
        >
          <card.icon size={16} className={card.iconColor} />
          <span className="text-xs font-semibold text-dark">{card.label}</span>
        </div>
      ))}

      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue/25"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `float ${p.dur}s ease-in-out ${i * 0.6}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
