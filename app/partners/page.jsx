"use client";

import { useState } from "react";
import PartnerCard from "@/components/PartnerCard";

const ITEMS_PER_PAGE = 6;

export default function PartnersPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const partners = [
    { image: "/euro.png", name: "ევროპის კავშირი (EC)" },
    { image: "/iucn.png", name: "IUCN" },
    { image: "/france.png", name: "საფრანგეთი" },
  ];

  const totalPages = Math.ceil(partners.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = partners.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="py-10 space-y-10">
      
      {/* GRID */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {currentItems.map((p, i) => (
          <PartnerCard key={i} image={p.image} name={p.name} />
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          
          {/* PREV */}
          <button
            onClick={() => changePage(Math.max(currentPage - 1, 1))}
            className="px-2 py-1 border rounded cursor-pointer hover:bg-gray-100"
          >
            «
          </button>

          {/* NUMBERS */}
          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => changePage(page)}
                className={`px-3 py-1 border rounded cursor-pointer transition
                  ${
                    currentPage === page
                      ? "bg-[#039855] text-white border-[#039855]"
                      : "hover:bg-gray-100"
                  }
                `}
              >
                {page}
              </button>
            );
          })}

          {/* NEXT */}
          <button
            onClick={() =>
              changePage(Math.min(currentPage + 1, totalPages))
            }
            className="px-2 py-1 border rounded cursor-pointer hover:bg-gray-100"
          >
            »
          </button>
        </div>
      )}
    </div>
  );
}