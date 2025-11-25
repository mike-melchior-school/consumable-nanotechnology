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
    <nav className="w-full py-4 shadow-sm">
      <ul className="flex justify-center gap-8 text-lg font-medium">
        {links.map((l) => {
          const isActive = pathname === l.href;

          return (
            <li key={l.href}>
              <a
                href={l.href}
                // className={`transition-colors border-b-2 pb-1 ${
                //   isActive
                //     ? "border-blue-600"
                //     : "border-transparent hover:border-gray-300 text-gray-700"
                // }`}
                className={`
                  px-4 py-2 rounded-xl transition-all duration-200
                  ${isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
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
