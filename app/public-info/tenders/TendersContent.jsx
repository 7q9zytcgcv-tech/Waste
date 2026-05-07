"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";
import Button from "@/components/Button";

const ITEMS_PER_PAGE = 3;

const DATA = [
  {
    id: 1,
    title: "ნარჩენების მართვის მომსახურება",
    category: "local",
    date: "23 მარტი 2025 - 27 აპრილი 2025",
  },
  {
    id: 2,
    title: "გადამუშავების პროექტი",
    category: "other",
    date: "10 იანვარი 2024 - 10 იანვარი 2025",
  },
  {
    id: 3,
    title: "ლოგისტიკური მომსახურება",
    category: "local",
    date: "2023-2024",
  },
  {
    id: 4,
    title: "ტექნიკური პროექტი",
    category: "other",
    date: "2022-2023",
  },
];

export default function TendersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [filtered, setFiltered] = useState(DATA);
  const [openId, setOpenId] = useState(null);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filtered.slice(start, start + ITEMS_PER_PAGE);

  const handleSearch = () => {
    if (!searchText && !category && !year) {
      setSearched(false);
      setFiltered(DATA);
      return;
    }

    let result = [...DATA];

    if (searchText) {
      result = result.filter((i) =>
        i.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (category) {
      result = result.filter((i) => i.category === category);
    }

    if (year) {
      result = result.filter((i) => i.date.includes(year));
    }

    setFiltered(result);
    setCurrentPage(1);
    setSearched(true);
    router.push(`/public-info/tenders?page=1`);
  };

  const handleReset = () => {
    setSearchText("");
    setCategory("");
    setYear("");
    setFiltered(DATA);
    setSearched(false);
    setCurrentPage(1);
    router.push(`/public-info/tenders?page=1`);
  };

  const changePage = (page) => {
    setCurrentPage(page);
    router.push(`/public-info/tenders?page=${page}`);
  };

  return (
    <div className="py-10 space-y-10">

      {/* SEARCH */}
      <div className="bg-white border border-[#E5E5E5]/40 rounded-[6px] p-6">
        <div className="flex flex-col lg:flex-row gap-4">

          <input
            type="text"
            placeholder="გთხოვთ ჩაწეროთ დასახელება"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full lg:flex-1 h-[48px] px-4 border border-[#DADADA] rounded text-sm"
          />

          {/* CATEGORY */}
          <div className="relative w-full md:w-[220px]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Image src="/icons/pinFilter.svg" alt="" width={18} height={18} className="w-auto h-auto"/>
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full h-[48px] pl-10 pr-4 border border-[#DADADA] rounded text-sm text-[#929292]"
            >
              <option value="">კატეგორია</option>
              <option value="local">ადგილობრივი</option>
              <option value="other">სხვა</option>
            </select>
          </div>

          {/* YEAR */}
          <div className="relative w-full md:w-[220px]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Image src="/icons/pinFilter.svg" alt="" width={18} height={18} className="w-auto h-auto"/>
            </div>

            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full h-[48px] pl-10 pr-4 border border-[#DADADA] rounded text-sm text-[#929292]"
            >
              <option value="">წელი</option>
              {Array.from({ length: 10 }, (_, i) => 2026 - i).map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSearch}
            className="w-full lg:w-[160px] h-[44px] bg-[#039855] text-white rounded cursor-pointer"
          >
            ძებნა
          </button>
        </div>
      </div>

      {/* EMPTY */}
      {searched && filtered.length === 0 && (
        <div className="flex flex-col items-center py-20 gap-4">
          <p className="text-lg font-semibold">არაფერი მოიძებნა</p>
          <Button text="დაბრუნება" onClick={handleReset} />
        </div>
      )}

      {/* TABLE */}
      {filtered.length > 0 && (
        <div className="space-y-4">
          {currentItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="border rounded overflow-hidden">

                <div className="bg-gray-100 p-4 flex justify-between items-center ">
                  <div>{item.title}</div>

                  <button onClick={() => setOpenId(isOpen ? null : item.id)} className="cursor-pointer">
                    {isOpen ? "−" : "+"}
                  </button>
                </div>

                {isOpen && (
                  <div className="p-4 text-sm">
                    დამატებითი ინფორმაცია...
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* PAGINATION */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        changePage={changePage}
      />

      {/* RESET */}
     {searched && filtered.length > 0 && (
  <div className="flex justify-center mt-6">
    <Button text="დაბრუნება" onClick={handleReset} />
  </div>
)}
    </div>
  );
}