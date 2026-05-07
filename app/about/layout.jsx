"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HeadLine from "@/components/HeadLine";

const menu = [
  { href: "/about", label: "კომპანიის შესახებ" },
  { href: "/about/news", label: "სიახლეები" },
  { href: "/about/structure", label: "სტრუქტურა" },
  { href: "/about/management", label: "მენეჯმენტი" },
  { href: "/about/mission", label: "მისია და ხედვა" },
];

export default function AboutLayout({ children }) {
  const pathname = usePathname();

  const currentTitle =
    menu.find((item) =>
      item.href === "/about"
        ? pathname === "/about"
        : pathname.startsWith(item.href)
    )?.label || "კომპანიის შესახებ";

  return (
    <section className="py-10 bg-white space-y-10">

      {/* 🔥 EXACT SAME AS HEADER */}
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <HeadLine text={currentTitle} />

        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[2fr_1fr]">
          
          {/* CONTENT */}
          <div className="order-1 w-full min-w-0">
            {children}
          </div>

          {/* SIDEBAR */}
          <div className="hidden lg:block order-2">
            <div className="bg-white rounded-[10px] p-6 border border-[#D1D1D1] shadow-[0px_0px_5px_#0000000D] w-full">
              
              <div className="flex flex-col gap-3">
                {menu.map((item) => {
                  const isActive =
                    item.href === "/about"
                      ? pathname === "/about"
                      : pathname.startsWith(item.href);

                  return (
                    <Link key={item.href} href={item.href}>
                      <div
                        className={`
                          w-full px-4 py-3 rounded-md cursor-pointer transition
                          ${
                            isActive
                              ? "bg-[#E6F0E8] text-green-700 font-semibold"
                              : "bg-[#F8F8F8] text-black hover:bg-[#E6F0E8]"
                          }
                        `}
                      >
                        {item.label}
                      </div>
                    </Link>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}