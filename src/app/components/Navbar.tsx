"use client";

import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import MobileMenu from "./MobileMenu";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/materi", label: "Bio Info" },
    { href: "/bio-mapping", label: "Bio Mapping" },
    { href: "/bio-task", label: "Bio Task" },
    { href: "/bio-communication", label: "Bio Communication" },
    { href: "/bio-quiz", label: "Bio Quiz" },
    { href: "/pretest", label: "Pretest" },
    { href: "/post-test", label: "Post Test" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-elkpd-3/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2 group">
            <img 
              src="/images/logo.png" 
              alt="ELKPD Logo" 
              className="w-20 h-20 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <h1 className={`${poppins.className} text-xl font-bold text-elkpd-1`}>ELKPD</h1>
              <p className="text-xs text-elkpd-1/60">Evaluasi & LKPD</p>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  isActive(link.href)
                    ? "bg-gradient-to-r from-elkpd-2 to-elkpd-1 text-white shadow-md"
                    : "text-elkpd-1 hover:bg-elkpd-4/50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

