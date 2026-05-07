"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CardsCarousel({ items = [], interval = 5000 }) {
  const [index, setIndex] = useState(items.length);
  const [visibleCount, setVisibleCount] = useState(4);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const extendedItems = [...items, ...items, ...items];

  // responsive
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 1024 ? 1 : 4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 MAIN LOOP
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;

        if (next >= items.length * 2) {
          setTransitionEnabled(false);

          requestAnimationFrame(() => {
            setIndex(items.length);

            requestAnimationFrame(() => {
              setTransitionEnabled(true);
            });
          });

          return prev;
        }

        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [interval, items.length]);

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex ${
          transitionEnabled
            ? "transition-transform duration-700 ease-in-out"
            : ""
        }`}
        style={{
          transform: `translateX(-${(index * 100) / visibleCount}%)`,
        }}
      >
        {extendedItems.map((item, i) => (
          <div
            key={i}
            className={`
              flex-shrink-0 px-2
              ${
                visibleCount === 1
                  ? "w-full flex justify-center"
                  : "w-1/4"
              }
            `}
          >
            <div
              className="
                w-full
                max-w-[500px] lg:max-w-none
                h-[180px] sm:h-[200px]
                bg-white
                shadow
                p-4
                flex flex-col items-center justify-center text-center
                border border-[rgba(0,0,0,0.2)]
                rounded-[22px]
              "
            >
              <div className="mb-3">
                <Image
                  src={item.logo}
                  alt="logo"
                  width={56}
                  height={56}
                  className="object-contain w-auto h-auto"
                />
              </div>

              <p className="text-sm leading-snug text-gray-700 whitespace-pre-line">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}