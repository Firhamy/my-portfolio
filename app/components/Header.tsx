import Link from "next/link";
import Image from "next/image";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/90 backdrop-blur-md border-b border-white/5">
      <nav className="px-6 py-2 md:py-3"> {/* Padding vertikal dikurangi (py-2) */}
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <Link 
            href="/" 
            className="transition-opacity hover:opacity-80"
          >
            <Image 
              src="/logo/logo.svg" 
              alt="Muhammad Firdaus Ilhamy" 
              width={80} // Ukuran dasar diperkecil
              height={32} 
              className="w-auto h-7 md:h-8" // Logo dibuat lebih pendek (h-7)
              priority
            />
          </Link>

          <ul className="flex items-center gap-6 md:gap-8 list-none m-0 p-0">
            {["Home", "About", "Experience", "Contact"].map((item) => (
              <li key={item} className="m-0 p-0">
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="text-white/70 hover:text-purple-400 transition-colors text-xs md:text-sm font-medium tracking-wide"
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