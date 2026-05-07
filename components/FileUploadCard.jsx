"use client";
import Image from "next/image";

export default function FileUploadCard({
  text,
  logoSrc,
  secondLogoSrc,
}) {
  return (
    <div className="space-y-2 w-full">
      <div className="relative flex items-center gap-3 border border-[#0C6D1D]/20 rounded-lg px-4 py-4 bg-[#E6F0E8]">
        
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-[70px] h-[40px] relative rounded-full bg-[#0C6D1D] flex items-center justify-center shadow">
            <Image
              src={logoSrc}
              alt="logo"
              fill
              sizes="70px"
              className="object-contain p-2"
            />
          </div>

          <div className="w-[70px] h-[40px] relative rounded-full bg-[#0C6D1D] flex items-center justify-center shadow">
            <Image
              src={secondLogoSrc}
              alt="logo"
              fill
              sizes="70px"
              className="object-contain p-2"
            />
          </div>
        </div>

        <p className="text-sm text-black">{text}</p>
      </div>
    </div>
  );
}