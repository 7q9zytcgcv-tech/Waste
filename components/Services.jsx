"use client";

import Image from "next/image";
import HeadLineWithBtn from "./HeadLineWithBtn";
import Link from "next/link";

const services = [
  {
    title: "არსებული\nნაგავსაყრელების რუკა",
    image: "/service1.png",
  },
  {
    title: "ქაღალდის/მუყაოს\nკონტეინერები ზუგდიდში",
    image: "/service2.png",
  },
  {
    title: "ქაღალდის/მუყაოს\nკონტეინერები თბილისში",
    image: "/service3.png",
  },
];

export default function Services() {
  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <Link href="/landfill" className="block mb-8">
          <HeadLineWithBtn text="სერვისები" textBtn="ყველას ნახვა >" />
        </Link>

        {/* 🔥 FIXED GRID */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          {services.map((item, index) => (
            <div
              key={index}
              className="
                group relative
                w-full
                h-[260px] sm:h-[300px] lg:h-[350px]
                rounded-xl overflow-hidden cursor-pointer
              "
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

              <div className="absolute inset-0 flex flex-col justify-end p-4 text-[#1A1A1A]/88">
                <h3 className="text-xl sm:text-2xl font-bpg text-[28px] leading-[32px] font-normal">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}