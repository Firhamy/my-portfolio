"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = ["System Administrator", "Network Infrastructure", "Network Security", "Network Engineer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTypingSpeed(100);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          
          {/* Bagian Foto Profil */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
              {/* Tooltip Nama di Mobile */}
              <div className="lg:hidden absolute -top-16 left-1/2 -translate-x-1/2 z-20 w-full text-center">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl relative inline-block">
                  <p className="text-white text-sm md:text-base whitespace-nowrap">
                    Hello! I Am <span className="text-purple-400 font-semibold">Firdaus Ilhamy</span>
                  </p>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
                </div>
              </div>

              <Image
                src="/assets/me.png"
                alt="Muhammad Firdaus Ilhamy"
                fill
                className="object-contain z-10"
                priority
              />
              <Image
                src="/assets/me-glow.png"
                alt="Glow effect"
                fill
                className="object-contain scale-110 opacity-70"
                priority
              />
            </div>
          </div>

{/* Bagian Teks Utama */}
          <div className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Tooltip Nama di Desktop */}
            <div className="hidden lg:inline-block relative mb-8">
              {/* Arrow Diperbaiki */}
              <Image
                src="/assets/arrow.png"
                alt="Arrow"
                width={80}
                height={80}
                className="absolute -left-16 -top-12 scale-x-[-1] rotate-[15deg]"
              />
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-2xl">
                <p className="text-white text-lg">
                  Hello! I Am <span className="text-purple-400 font-semibold">Muhammad Firdaus Ilhamy</span>
                </p>
              </div>
              <div className="absolute -bottom-2 left-10 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
            </div>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-white/70">An Engineer who</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] tracking-tight">
                Builds a network <br className="hidden md:block" />
                from the{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    ground
                  </span>
                  <Image 
                    src="/assets/circle.png" 
                    alt="Circle" 
                    width={200} 
                    height={100} 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[120%] object-contain opacity-60" 
                  />
                </span>
                ...
              </h1>
              <p className="text-base md:text-lg text-white/60 max-w-lg mx-auto lg:mx-0">
                Ensuring seamless connectivity and robust security for every system.
              </p>
            </div>
          </div>
        </div>

        {/* Bagian Typing Animation & Pengalaman */}
        <div className="mt-16 lg:mt-24 space-y-6 text-center lg:text-left">
          <p className="text-3xl md:text-5xl lg:text-6xl text-white font-bold min-h-[60px]">
            I&apos;m a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">{displayedText}</span>
            <span className="animate-pulse ml-1 text-purple-400">|</span>
          </p>
          
          <div className="space-y-4">
            <p className="text-base md:text-lg lg:text-xl text-white/90 flex flex-wrap items-center justify-center lg:justify-start gap-x-2">
              <span>Currently, I&apos;m an IT Network Engineer at</span>
              <span className="text-blue-400 font-semibold border-b border-blue-400/30">PT. Indoseiki Metal Utama</span>
            </p>
            
            <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A dedicated IT professional with over 2 years of experience. I specialize in 
              managing network infrastructure, ensuring 99.9% uptime through proactive 
              monitoring, and securing systems against evolving digital threats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}