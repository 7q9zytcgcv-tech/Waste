"use client";

import { useState } from "react";
import Image from "next/image";

export default function VacancyCard({ title, date, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#DADADA]/60 rounded-[3px] overflow-hidden">

      {/* HEADER */}
      <div className="bg-white p-4 flex flex-col gap-4 lg:grid lg:grid-cols-[180px_1fr_140px] lg:gap-10 items-center">

        {/* DATE */}
        <div className="bg-[#f1eeee] h-[55px] px-4 rounded flex items-center justify-center gap-3 text-xs text-gray-600 w-full lg:w-auto">
          <Image
            src="/icons/filterCalendar.svg"
            alt="calendar"
            width={20}
            height={20}
          />
          <span className="whitespace-nowrap">{date}</span>
        </div>

        {/* TITLE */}
        <div className="text-sm font-medium text-center lg:text-left w-full">
          {title}
        </div>

        {/* BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#f1eeee] h-[55px] px-4 rounded flex items-center justify-center text-sm hover:bg-[#E6F0E8] transition cursor-pointer w-full lg:w-auto"
        >
          {open ? "დახურვა" : "სრულად"}
        </button>

      </div>

      {/* BODY */}
      {open && (
        <div className="bg-white border-t border-[#E5E5E5] p-4">
          <p className="text-sm text-gray-700 leading-6">
            {description}
          </p>
        </div>
      )}

    </div>
  );
}