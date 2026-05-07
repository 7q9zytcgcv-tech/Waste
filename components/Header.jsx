"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menu } from "@/data/menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("ka");

  const pathname = usePathname();
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLabel = lang === "ka" ? "ქარ" : "ENG";
  const otherLang = lang === "ka" ? "en" : "ka";
  const otherLabel = otherLang === "ka" ? "ქარ" : "ENG";

  const handleLangChange = () => {
    setLang(otherLang);
    setLangOpen(false);
  };

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
        
        {/* LOGO */}
        <Link href="/">
          <Image
  src="/WasteHeaderLogo.svg"
  alt="logo"
  width={300}
  height={80}
  className="w-full max-w-[300px] h-auto"
/>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex flex-1 justify-center gap-10 font-bpg text-[14px] leading-[20px] font-bold">
          {menu.map((item) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setHovered(item.href)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  href={item.href}
                  className={`relative pb-2 ${
                    isActive
                      ? "text-[#0F2F24]"
                      : "text-[#656565] hover:text-[#0F2F24]"
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute left-0 bottom-[-32px] w-full h-[10px] bg-[#0F2F24]" />
                  )}
                </Link>

                {/* DROPDOWN */}
                {item.children && hovered === item.href && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-3 w-[220px] z-50">
                    {item.children.map((sub) => {
                      const subActive = pathname === sub.href;

                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`block px-3 py-2 text-sm rounded ${
                            subActive
                              ? "bg-[#E6F0E8] text-[#0F2F24] font-semibold"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* RIGHT */}
        <div className="ml-auto flex items-center gap-4">
          
          {/* LANGUAGE */}
          <div ref={langRef} className="relative hidden md:block">
            <div
              onClick={() => setLangOpen(!langOpen)}
              className="w-[120px] h-[36px] bg-[#F6F6F6] border border-gray-300/70 flex items-center justify-between px-3 rounded-full cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Image src="/languageLogo.png" alt="lang" width={30} height={30} />
                <span className="text-sm">{currentLabel}</span>
              </div>
              <span>{langOpen ? "▲" : "▼"}</span>
            </div>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-[95px] bg-white border rounded-md shadow-md">
                <div
                  onClick={handleLangChange}
                  className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer text-center"
                >
                  {otherLabel}
                </div>
              </div>
            )}
          </div>

          {/* BURGER */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-2xl">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden absolute right-4 top-[70px] w-[280px] bg-white border shadow-lg rounded-lg p-4 space-y-4 z-50">
          
          {menu.map((item) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm ${
                    isActive
                      ? "text-[#0F2F24] font-semibold"
                      : "text-[#656565]"
                  }`}
                >
                  {item.label}
                </Link>

                {item.children && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.children.map((sub) => {
                      const subActive = pathname === sub.href;

                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className={`block text-sm ${
                            subActive
                              ? "text-[#0F2F24] font-semibold"
                              : "text-[#656565]"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* MOBILE LANGUAGE */}
          <div className="border-t pt-3 flex justify-between items-center md:hidden">
            <span className="text-sm text-gray-600">ენა</span>
            <button
              onClick={handleLangChange}
              className="text-sm bg-gray-100 px-3 py-1 rounded"
            >
              {otherLabel}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}