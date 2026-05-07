"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";

export default function InformationRequestForm({ title }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    file: null,
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: false }));
  };

  const handleSubmit = () => {
    const newErrors = {
      name: !form.name,
      phone: !form.phone,
      email: !form.email,
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    setSuccess(true);

    setForm({
      name: "",
      phone: "",
      address: "",
      email: "",
      file: null,
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="py-6 md:py-10 lg:py-12 space-y-6 md:space-y-10 max-w-[800px] mx-auto lg:max-w-none">
      
      <div className="w-full bg-white border border-[#E5E5E5]/70 rounded-xl p-4 md:p-6 lg:p-8 space-y-5 md:space-y-6">
        
        {/* TOP TEXT */}
        <h2 className="text-sm md:text-base text-gray-700 leading-6">
          {title}
        </h2>

        <h1 className="text-xs md:text-sm text-gray-500">
          გთხოვთ შეავსოთ ყველა სიმბოლოთი მონიშნული ველი...
        </h1>

        {/* SUCCESS */}
        {success && (
          <div className="text-green-600 text-sm font-medium">
            ინფორმაცია გაგზავნილია ✔
          </div>
        )}

        {/* NAME */}
        <div className={`flex items-center border rounded-lg overflow-hidden bg-white ${errors.name ? "border-red-500" : ""}`}>
          <div className="px-3">
            <Image src="/icons/publicinfofirst.svg" alt="user" width={18} height={18} className="w-auto h-auto"/>
          </div>
          <input
            type="text"
            placeholder="სახელი / გვარი ან ორგანიზაციის დასახელება*"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full h-[42px] md:h-[44px] px-2 text-sm outline-none"
          />
        </div>

        {/* PHONE + ADDRESS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          
          <div className={`flex items-center border rounded-lg overflow-hidden bg-white ${errors.phone ? "border-red-500" : ""}`}>
            <div className="px-3">
              <Image src="/icons/publicmobile.svg" alt="phone" width={18} height={18} className="w-auto h-auto"/>
            </div>
            <input
              type="text"
              placeholder="საკონტაქტო ტელეფონის ნომერი*"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full h-[42px] md:h-[44px] px-2 text-sm outline-none"
            />
          </div>

          <div className="flex items-center border rounded-lg overflow-hidden bg-white">
            <div className="px-3">
              <Image src="/icons/publicadress.svg" alt="location" width={18} height={18} className="w-auto h-auto" />
            </div>
            <input
              type="text"
              placeholder="მისამართი"
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="w-full h-[42px] md:h-[44px] px-2 text-sm outline-none"
            />
          </div>
        </div>

        {/* EMAIL + FILE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          
          <div className={`flex items-center border rounded-lg overflow-hidden bg-white ${errors.email ? "border-red-500" : ""}`}>
            <div className="px-3">
              <Image src="/icons/publicmail.svg" alt="email" width={18} height={18} className="w-auto h-auto"/>
            </div>
            <input
              type="email"
              placeholder="ელ.ფოსტა*"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full h-[42px] md:h-[44px] px-2 text-sm outline-none"
            />
          </div>

          {/* FILE */}
          <label className="flex items-center justify-between border rounded-lg overflow-hidden bg-[#f3f4f6] px-3 h-[42px] md:h-[44px] cursor-pointer hover:bg-[#e5e7eb] transition">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Image src="/icons/filedownload.svg" alt="file" width={18} height={18} className="w-auto h-auto"/>
              {form.file ? form.file.name : "ფაილის ატვირთვა"}
            </div>
            <input
              type="file"
              className="hidden"
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  file: e.target.files?.[0] || null,
                }))
              }
            />
          </label>
        </div>

        <p className="text-xs text-gray-500">
          * სიმბოლოთი მონიშნული ყველა ველი აუცილებელია
        </p>

        <Button text="გაგზავნა" onClick={handleSubmit} />
      </div>
    </div>
  );
}