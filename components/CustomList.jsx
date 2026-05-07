"use client";

import Image from "next/image";

export default function CustomList({
  text,
  logoSrc,
  className = "",
  textClassName = "",
  variant = "default",
}) {
  const isCalendar = variant === "calendar";

  return (
    <div
      className={`
        flex items-center transition
        ${
          isCalendar
            ? "overflow-hidden rounded-md"
            : "gap-3 px-4 py-3 rounded-lg"
        }
        ${
          className
            ? className
            : !isCalendar
            ? "bg-[#0F2F24]/59 hover:bg-[#0f3024]"
            : ""
        }
      `}
    >
      {/* ICON */}
      {isCalendar ? (
        <div className="bg-[#0F2F24] px-3 py-2 flex items-center justify-center">
          <Image
            src={logoSrc}
            alt={text}
            width={30}
            height={16}
            className="invert w-auto h-auto"
          />
        </div>
      ) : (
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0F2F24]">
          <Image src={logoSrc} alt={text} width={16} height={16} className="w-auto h-auto" />
        </div>
      )}

      {/* TEXT */}
      <span
        className={`
          text-sm
          ${
            textClassName
              ? textClassName
              : !isCalendar
              ? "text-gray-200"
              : ""
          }
        `}
      >
        {text}
      </span>
    </div>
  );
}