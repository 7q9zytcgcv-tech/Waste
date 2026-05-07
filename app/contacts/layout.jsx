"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HeadLine from "@/components/HeadLine";

const menu = [
  { href: "/contacts", label: "კონტაქტი" },
  { href: "/contacts/regions", label: "რეგიონალური ობიექტები" },
];

export default function ContactsLayout({ children }) {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/contacts") {
      return pathname === "/contacts";
    }
    return pathname.startsWith(href);
  };

  const currentTitle =
    menu.find((item) => isActive(item.href))?.label || "კონტაქტი";

  return (
    <section className="py-10 bg-white space-y-10">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <HeadLine text={currentTitle} />

        <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] gap-10">
          
          {/* SIDEBAR */}
          <div className="hidden lg:block order-1 lg:order-2">
            <div className="bg-white rounded-[10px] p-6 border border-[#D1D1D1] shadow-[0px_0px_5px_#0000000D] max-w-[500px] mx-auto lg:max-w-none">
              
              <div className="flex flex-col gap-3">
                {menu.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                        w-full px-4 py-3 rounded-md transition block
                        ${
                          active
                            ? "bg-[#E6F0E8] text-green-700 font-semibold"
                            : "bg-[#F8F8F8] text-black hover:bg-[#E6F0E8]"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

            </div>
          </div>

          {/* CONTENT */}
          <div className="order-2 lg:order-1 w-full max-w-[900px] mx-auto lg:max-w-none">
            {children}
          </div>

        </div>
      </div>
    </section>
  );
}