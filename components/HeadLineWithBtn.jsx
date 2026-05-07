"use client";

export default function HeadLineWithBtn({ text, textBtn }) {
  return (
    <div className="relative w-full mb-6 pl-6">
      
      {/* VERTICAL LINE */}
      <span className="absolute left-3 top-0 bottom-[-17px] w-[1px] bg-black/25"></span>

      {/* HORIZONTAL LINE */}
      <span className="absolute left-[-1px] top-[35px] w-[85px] h-[1px] bg-black/25"></span>

      <div className="flex items-center justify-between">
        
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          {text}
        </h1>

        <button className="w-[153px] h-[37px] bg-[#F5F5F5] rounded-[3px] text-[13px] leading-[15px] text-black opacity-80 cursor-pointer">
          {textBtn}
        </button>

      </div>
    </div>
  );
}