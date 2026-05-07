"use client";

import { useState } from "react";
import Image from "next/image";
import CustomList from "@/components/CustomList";
import Pagination from "@/components/Pagination";
import Button from "@/components/Button";

const ITEMS_PER_PAGE = 2;

const DATA = [
  {
    id: 1,
    title: "გლდანის რეგიონალური ობიექტი",
    type: "ოფისი",
    person: "ნინო ბერიძე",
    position: "მენეჯერი",
  },
  {
    id: 2,
    title: "ვაკის რეგიონალური ობიექტი",
    type: "საწყობი",
    person: "გიორგი მელაძე",
    position: "კოორდინატორი",
  },
  {
    id: 3,
    title: "ისნის რეგიონალური ობიექტი",
    type: "ოფისი",
    person: "ანა კაპანაძე",
    position: "ოპერატორი",
  },
];

export default function RegionsPage() {
  const [searchText, setSearchText] = useState("");
  const [type, setType] = useState("");
  const [filtered, setFiltered] = useState(DATA);
  const [openId, setOpenId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searched, setSearched] = useState(false);

  const types = Array.from(new Set(DATA.map((i) => i.type)));

  const handleSearch = () => {
    if (!searchText && !type) {
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

    if (type) {
      result = result.filter((i) => i.type === type);
    }

    setFiltered(result);
    setCurrentPage(1);
    setSearched(true);
  };

  const handleReset = () => {
    setSearchText("");
    setType("");
    setFiltered(DATA);
    setCurrentPage(1);
    setSearched(false);
  };

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filtered.slice(start, start + ITEMS_PER_PAGE);

  const changePage = (page) => setCurrentPage(page);

  return (
    <div className="py-10 space-y-10">

      {/* 🔍 SEARCH */}
      <div className="bg-white border border-[#E5E5E5]/40 rounded-[6px] p-6">
        <div className="flex flex-col lg:flex-row gap-4">

          <input
            type="text"
            placeholder="გთხოვთ ჩაწეროთ დასახელება"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full lg:flex-1 h-[48px] px-4 border border-[#DADADA] rounded text-sm"
          />

          <div className="flex items-center border border-[#DADADA] rounded px-3 h-[48px] w-full lg:w-[260px]">
            <Image src="/icons/pinFilter.svg" alt="" width={18} height={18} className="w-auto h-auto"/>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full ml-2 outline-none text-sm bg-transparent text-[#929292]"
            >
              <option value="">ობიექტის ტიპი</option>
              {types.map((t) => (
                <option key={t}>{t}</option>
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
        <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
          <p className="text-lg font-semibold">არ მოიძებნა</p>
          <Button text="დაბრუნება" onClick={handleReset} />
        </div>
      )}

      {/* LIST */}
      {filtered.length > 0 && (
        <div className="space-y-4">
          {currentItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="border border-[#DADADA]/20 rounded-[6px] overflow-hidden"
              >
                <div className="bg-[#E6F0E8] p-4 flex justify-between items-center">
                  <div className="text-sm font-medium">{item.title}</div>

                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-8 h-8 bg-[#039855] text-white rounded-full flex items-center justify-center cursor-pointer"
                  >
                    {isOpen ? "−" : "+"}
                  </button>
                </div>

                {isOpen && (
                  <div className="bg-white border-t border-[#E5E5E5] p-4 space-y-4">

                    <div>
                      <p className="font-semibold">{item.person}</p>
                      <p className="text-sm text-gray-500">
                        {item.position}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <CustomList text="+0 000 000 000" logoSrc="/icons/phone.svg" className="bg-[#E6F0E8] border flex-1" textClassName="text-black" />
                      <CustomList text="example@waste.gov.ge" logoSrc="/icons/mail.svg" className="bg-[#E6F0E8] border flex-1" textClassName="text-black" />
                      <CustomList text="რუკა" logoSrc="/icons/globe.svg" className="bg-[#E6F0E8] border flex-1" textClassName="text-black" />
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* RESET */}
      {searched && filtered.length > 0 && (
        <div className="flex justify-center lg:justify-start pt-6">
          <Button text="დაბრუნება" onClick={handleReset} />
        </div>
      )}

      {/* PAGINATION */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        changePage={changePage}
      />

    </div>
  );
}