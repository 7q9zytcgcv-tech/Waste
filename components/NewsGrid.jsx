"use client";

import Image from "next/image";
import HeadLineWithBtn from "./HeadLineWithBtn";
import Link from "next/link";
import { allNews } from "@/data/news";
import CustomList from "@/components/CustomList";

const formatDate = (date) => {
  const months = [
    "იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი",
    "ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი",
  ];

  const [year, month, day] = date.split("-");
  return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
};

export default function NewsGrid() {
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <Link href="/about/news" className="block mb-8">
          <HeadLineWithBtn text="სიახლეები" textBtn="ყველას ნახვა >" />
        </Link>

        {/* GRID */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          {allNews.map((item) => (
            <Link
              key={item.id}
              href={`/about/news/${item.id}`}
              className="group w-full"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                
                <div className="relative h-[260px] sm:h-[300px] lg:h-[350px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="absolute top-5 right-5">
                  <CustomList
                    text={formatDate(item.date)}
                    logoSrc="/icons/filterCalendar.svg"
                    variant="calendar"
                    className="bg-[#FDF6F6]/86 text-base shadow-md w-[200px] h-[38px]"
                    textClassName="text-black text-base flex items-center justify-center w-full h-full"
                  />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 group-hover:bg-[#0F2F24]/80 transition">
                  <p className="text-sm text-white font-medium line-clamp-3">
                    {item.title}
                  </p>
                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}