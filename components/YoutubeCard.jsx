"use client";

import Image from "next/image";

export default function YoutubeCard({ text, logoSrc, url }) {
  return (
    <div className="space-y-2 w-full">
      <div className="relative flex items-center border border-[#0C6D1D]/20 rounded-lg rounded-l-[50px] px-4 py-4 bg-[#E6F0E8]">
        
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[1px]"
        >
          <div className="w-[65px] h-[50px] relative rounded-full bg-[#0C6D1D] flex items-center justify-center shadow">
            <Image
              src={logoSrc}
              alt="logo"
              fill
              className="object-contain p-2"
            />
          </div>
        </a>

        <p className="text-sm text-black pl-[70px] sm:pl-[80px] leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}