"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({
  images = [],
  showPrint = false,
  showGallery = true,
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // 👉 უსაფრთხოება (ძალიან მნიშვნელოვანია)
  if (!images.length) return null;

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* 🔥 ICON WRAPPER */}
      <div className="absolute right-4 bottom-4 flex flex-col gap-2 items-end">

        {/* PRINT */}
        {showPrint && (
          <button
            onClick={handlePrint}
            className="bg-white p-2 rounded cursor-pointer hover:opacity-80 transition"
          >
            <Image src="/icons/print.svg" alt="print" width={25} height={25} className="w-auto h-auto"/>
          </button>
        )}

        {/* GALLERY */}
        {showGallery && (
          <button
            onClick={() => setOpen(true)}
            className="bg-white p-2 rounded cursor-pointer hover:opacity-80 transition"
          >
            <Image src="/icons/photoAlbum.svg" alt="gallery" width={25} height={25} className="w-auto h-auto" />
          </button>
        )}
      </div>

      {/* 🔥 MODAL */}
      {open && showGallery && (
        <div className="fixed inset-0 bg-white/70 flex items-center justify-center z-[999]">
          
          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white bg-[#0C6D1D] w-10 h-10 flex items-center justify-center rounded-full text-xl cursor-pointer"
          >
            ✕
          </button>

          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute left-4 text-[#0C6D1D] text-3xl cursor-pointer"
          >
            ←
          </button>

          {/* IMAGE */}
          <div className="relative w-[90%] max-w-[900px] h-[70vh]">
            <Image
              src={images[index]}
              alt="gallery"
              fill
              className="object-contain"
            />
          </div>

          {/* RIGHT */}
          <button
            onClick={next}
            className="absolute right-4 text-[#0C6D1D] text-3xl cursor-pointer"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}