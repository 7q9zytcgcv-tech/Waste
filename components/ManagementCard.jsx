"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ManagementCard({
  id,
  name,
  role,
  image,
}) {
  const router = useRouter();

  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow
        overflow-hidden
        flex
        flex-col
        h-full
      "
    >
      {/* IMAGE */}
      <div className="relative w-full h-[220px] md:h-[260px]">
        <Image src={image} alt={name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
      </div>

      {/* CONTENT */}
      <div className="p-4 md:p-5 flex flex-col gap-4">
        
        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-4
          "
        >
          {/* LEFT */}
          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-semibold">
              {name}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              {role}
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => router.push(`/about/management/${id}`)}
            className="
              shrink-0
              bg-[#F5F5F5]
              text-[#1A1A1A]/60
              text-sm md:text-base
              px-4 py-2
              rounded-md
              hover:opacity-90
              transition
              w-full sm:w-auto
              cursor-pointer
              hover:bg-[#E6F0E8]
            "
          >
            სრულად
          </button>
        </div>

      </div>
    </div>
  );
}