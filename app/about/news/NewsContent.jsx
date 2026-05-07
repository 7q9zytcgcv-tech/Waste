"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { allNews } from "@/data/news";
import CustomList from "@/components/CustomList";
import Pagination from "@/components/Pagination";
import GeorgianDatePicker from "@/components/GeorgianDatePicker";
import Button from "@/components/Button";

const ITEMS_PER_PAGE = 4;

const formatDate = (date) => {
  const months = [
    "იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი",
    "ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი",
  ];

  const [year, month, day] = date.split("-");
  return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
};

export default function NewsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [searchText, setSearchText] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [filteredNews, setFilteredNews] = useState(allNews);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredNews.slice(start, start + ITEMS_PER_PAGE);

  const handleSearch = () => {
    if (!searchText && !dateValue) {
      setIsSearched(false);
      setFilteredNews(allNews);
      return;
    }

    let result = [...allNews]; // ✅ safer copy

    if (searchText) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (dateValue) {
      result = result.filter((item) => item.date === dateValue);
    }

    setFilteredNews(result);
    setCurrentPage(1);
    setIsSearched(true);
    router.push(`/about/news?page=1`);
  };

  const handleReset = () => {
    setSearchText("");
    setDateValue("");
    setFilteredNews(allNews);
    setCurrentPage(1);
    setIsSearched(false);
    router.push(`/about/news?page=1`);
  };

  const changePage = (page) => {
    setCurrentPage(page);
    router.push(`/about/news?page=${page}`);
  };

  return (
    <div className="py-10 space-y-10">

      {/* 🔍 FILTER */}
      <div className="bg-white border border-[#E5E5E5]/40 rounded-[6px] p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row gap-4">

          <input
            type="text"
            placeholder="გთხოვთ ჩაწერეთ დასახელება"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full lg:flex-1 h-[44px] px-4 border border-[#DADADA] rounded text-sm"
          />

          <div className="relative w-full lg:w-[260px]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Image
                src="/icons/filterCalendar.svg"
                alt="calendar"
                width={18}
                height={18}
                className="opacity-70"
              />
            </div>

            <GeorgianDatePicker
              value={dateValue ? new Date(dateValue) : null}
              onChange={(date) => {
                if (!date) return setDateValue("");

                const y = date.getFullYear();
                const m = String(date.getMonth() + 1).padStart(2, "0");
                const d = String(date.getDate()).padStart(2, "0");

                setDateValue(`${y}-${m}-${d}`);
              }}
            />
          </div>

          <Button text="ძებნა" onClick={handleSearch} />
        </div>
      </div>

      {/* EMPTY */}
      {filteredNews.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
          <p className="text-lg font-semibold">არაფერი მოიძებნა</p>
          <Button text="დაბრუნება" onClick={handleReset} />
        </div>
      ) : (
        <>
          {/* 🔥 GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {currentItems.map((item) => (
              <Link
                key={item.id}
                href={`/about/news/${item.id}?page=${currentPage}`}
                className="group w-full"
              >
                <div className="relative overflow-hidden rounded-t-xl">

                  {/* IMAGE */}
                  <div className="relative h-[220px] sm:h-[260px] lg:h-[340px]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  {/* DATE */}
                  <div className="absolute top-5 right-5">
                    <CustomList
                      text={formatDate(item.date)}
                      logoSrc="/icons/filterCalendar.svg"
                      variant="calendar"
                      className="bg-[#FDF6F6]/86 shadow-md w-[200px] h-[38px]"
                      textClassName="text-black text-base flex items-center justify-center w-full h-full"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="absolute bottom-0 left-0 w-full px-4 py-4 bg-[#000000]/60 group-hover:bg-[#0F2F24]/80 transition">
                    <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-snug line-clamp-3">
                      {item.title}
                    </p>
                  </div>

                </div>
              </Link>
            ))}
          </div>

          {/* PAGINATION */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            changePage={changePage}
          />

          {/* RESET */}
          {isSearched && (
            <div className="flex justify-center mt-6">
              <Button text="დაბრუნება" onClick={handleReset} />
            </div>
          )}
        </>
      )}

    </div>
  );
}