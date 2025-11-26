"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "What is Nanotechnology?", href: "/nanotechnology" },
    { label: "Benefits & Impact", href: "/benefits" },
    { label: "Implementation Plan", href: "/implementation" },
    { label: "Risks & Mitigations", href: "/risks" },
  ];

  return (
    <nav className="w-full py-4">
      <ul className="flex justify-center gap-6 text-lg font-medium">
        {links.map((l) => {
          const isActive = pathname === l.href;

          return (
            <li key={l.href}>
              <a
                href={l.href}
                className={`
                  px-6 py-3 rounded-xl transition-all duration-200 font-medium
                  ${isActive
                    ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 border border-cyan-500"
                    : "text-slate-300 hover:bg-slate-700/50 hover:text-white border border-transparent"
                  }
                `}
              >
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}