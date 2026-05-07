"use client";

export default function Pagination({
  currentPage,
  totalPages,
  changePage,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-1">
      
      {/* PREV */}
      <button
        onClick={() => changePage(Math.max(currentPage - 1, 1))}
        className="px-2 py-1 border rounded cursor-pointer bg-[#E6F0E8] text-[#2C473C]"
      >
        «
      </button>

      {/* PAGES */}
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        return (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`px-3 py-1 border rounded cursor-pointer transition ${
              currentPage === page
                ? "bg-[#2C473C] text-white"
                : "bg-[#E6F0E8] text-[#2C473C] hover:bg-[#d5e6d9]"
            }`}
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
        className="px-2 py-1 border rounded cursor-pointer bg-[#E6F0E8] text-[#2C473C]"
      >
        »
      </button>

    </div>
  );
}