"use client";

export default function HeadLine({ text }) {
  return (
    <div className="relative inline-block mb-6 pl-6">
      
      {/* VERTICAL LINE */}
      <span className="absolute left-3 top-0 bottom-[-17px] w-[1px] bg-black/25"></span>

      {/* HORIZONTAL LINE */}
      <span className="absolute left-[-1px] top-[35px] w-[85px] h-[1px] bg-black/25"></span>

      <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
        {text}
      </h1>
    </div>
  );
}