"use client";

import Image from "next/image";

export default function PartnerCard({ image, name }) {
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition">
      
      <div className="relative w-[180px] h-[100px] mb-3">
        <Image
          src={image}
          alt={name}
          fill
          sizes="180px"
          className="object-contain"
        />
      </div>

      <p className="text-lg text-gray-600">{name}</p>
    </div>
  );
}