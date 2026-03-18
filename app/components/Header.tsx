"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header(): React.JSX.Element {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        // Jika scroll ke bawah, sembunyikan. Jika ke atas, tampilkan.
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-md border-b border-white/10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link 
            href="/" 
            className="text-2xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            <Image 
              src="/logo/logo.svg" 
              alt="Muhammad Firdaus Ilhamy" 
              width={100} 
              height={40} 
              className="w-auto h-8 lg:h-10" // Ukuran logo lebih terkontrol
            />
          </Link>

          {/* Navigasi Desktop */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {["Home", "About", "Experience", "Contact"].map((item) => (
              <li key={item} className="m-0 p-0">
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="text-white/80 hover:text-purple-400 transition-colors text-sm font-medium"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}