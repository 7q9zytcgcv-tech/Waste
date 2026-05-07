"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { allNewObjects } from "@/data/newObjects";
import Pagination from "@/components/Pagination";
import Button from "@/components/Button";

const ITEMS_PER_PAGE = 4;

export default function NewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [searchText, setSearchText] = useState("");
  const [region, setRegion] = useState("");
  const [filteredData, setFilteredData] = useState(allNewObjects);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(start, start + ITEMS_PER_PAGE);

  const handleSearch = () => {
    if (!searchText && !region) {
      setIsSearched(false);
      setFilteredData(allNewObjects);
      return;
    }

    let result = [...allNewObjects];

    if (searchText) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (region) {
      result = result.filter((item) => item.region === region);
    }

    setFilteredData(result);
    setCurrentPage(1);
    setIsSearched(true);
    router.push(`/landfill/new?page=1`);
  };

  const handleReset = () => {
    setSearchText("");
    setRegion("");
    setFilteredData(allNewObjects);
    setCurrentPage(1);
    setIsSearched(false);
    router.push(`/landfill/new?page=1`);
  };

  const changePage = (page) => {
    setCurrentPage(page);
    router.push(`/landfill/new?page=${page}`);
  };

  return (
    <div className="py-10 space-y-10">

      {/* 🔍 FILTER */}
      <div className="bg-white border border-[#E5E5E5]/40 rounded-[6px] p-6 w-full">
        <div className="flex flex-col lg:flex-row gap-4">

          <input
            type="text"
            placeholder="გთხოვთ ჩაწეროთ დასახელება"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full lg:flex-1 h-[48px] px-4 border border-[#DADADA] rounded text-sm"
          />

          <div className="relative w-full md:w-[250px]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Image src="/icons/pinFilter.svg" alt="region" width={18} height={18} className="opacity-70 w-auto h-auto" />
            </div>

            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full h-[48px] pl-10 pr-4 border border-[#DADADA] rounded text-sm text-[#929292] bg-white"
            >
              <option value="">აირჩიეთ რეგიონი</option>
              <option value="tbilisi">თბილისი</option>
              <option value="kakheti">კახეთი</option>
            </select>
          </div>

          <button
            onClick={handleSearch}
            className="w-full lg:w-[160px] h-[44px] bg-[#039855] text-white rounded hover:bg-[#03814A] transition cursor-pointer"
          >
            ძებნა
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {currentItems.map((item) => (
          <Link
            key={item.id}
            href={`/landfill/new/${item.id}?page=${currentPage}`}
            className="group w-full"
          >
            <div className="relative overflow-hidden rounded-t-xl">

              <div className="relative h-[220px] sm:h-[260px] lg:h-[340px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full px-4 py-4 bg-[#000000]/60 group-hover:bg-[#0F2F24]/80 transition">
                <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-snug line-clamp-3">
                  {item.title}
                </p>
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* NO RESULTS */}
      {isSearched && currentItems.length === 0 && (
        <p className="flex justify-center text-lg font-semibold">
          არაფერი მოიძებნა
        </p>
      )}

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

    </div>
  );
}