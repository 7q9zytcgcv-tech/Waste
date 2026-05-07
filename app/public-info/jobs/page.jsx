"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import VacancyCard from "@/components/VacancyCard";
import Pagination from "@/components/Pagination";

const ITEMS_PER_PAGE = 4;

const DATA = [
  {
    id: 1,
    title: "Frontend დეველოპერი",
    date: "01.03.2025 - 30.03.2025",
    description: "სრული ინფორმაცია ვაკანსიაზე...",
  },
  {
    id: 2,
    title: "Backend დეველოპერი",
    date: "05.03.2025 - 25.03.2025",
    description: "სრული ინფორმაცია ვაკანსიაზე...",
  },
  {
    id: 3,
    title: "UI/UX დიზაინერი",
    date: "10.03.2025 - 20.03.2025",
    description: "სრული ინფორმაცია ვაკანსიაზე...",
  },
  {
    id: 4,
    title: "Project Manager",
    date: "12.03.2025 - 28.03.2025",
    description: "სრული ინფორმაცია ვაკანსიაზე...",
  },
  {
    id: 5,
    title: "QA Engineer",
    date: "15.03.2025 - 30.03.2025",
    description: "სრული ინფორმაცია ვაკანსიაზე...",
  },
];

export default function JobsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);

  const totalPages = Math.ceil(DATA.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = DATA.slice(start, start + ITEMS_PER_PAGE);

  const changePage = (page) => {
    setCurrentPage(page);
    router.push(`/public-info/jobs?page=${page}`);
  };

  return (
    <div className="py-10 space-y-10">

      {/* LIST */}
      {currentItems.map((item) => (
        <VacancyCard
          key={item.id}
          title={item.title}
          date={item.date}
          description={item.description}
        />
      ))}

      {/* PAGINATION */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        changePage={changePage}
      />
    </div>
  );
}