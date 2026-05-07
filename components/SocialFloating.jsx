"use client";

import Image from "next/image";

export default function SocialFloating() {
  return (
    <div className="hidden lg:flex fixed right-0 top-1/4 -translate-y-1/2 z-[9999] flex-col gap-4">

      {/* FACEBOOK */}
      <a
        href="https://www.facebook.com/SWMCGEORGIA/?locale=ka_GE"
        target="_blank"
        className="
          bg-[#3b5791]
          rounded-l-[10px]
          shadow
          flex items-center justify-center
          w-[70px] h-[70px]
          hover:-translate-x-1 hover:scale-105
          transition-all duration-300
        "
      >
        <Image
          src="/icons/1.png"
          alt="facebook"
          width={32}
          height={32}
        />
      </a>

      {/* YOUTUBE */}
      <a
        href="https://www.youtube.com/@myarinarchenebi4567"
        target="_blank"
        className="
          bg-[#e72620]
          rounded-l-[10px]
          shadow
          flex items-center justify-center
          w-[70px] h-[70px]
          hover:-translate-x-1 hover:scale-105
          transition-all duration-300
        "
      >
        <Image
          src="/icons/2.png"
          alt="youtube"
          width={32}
          height={32}
        />
      </a>

    </div>
  );
}