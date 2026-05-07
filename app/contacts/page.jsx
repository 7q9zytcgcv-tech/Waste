"use client";

import { useState } from "react";
import CustomList from "@/components/CustomList";
import Image from "next/image";
import ReCaptcha from "@/components/ReCaptcha";

export default function ContactPage() {
  const [captchaToken, setCaptchaToken] = useState(null);

  return (
    <div className="py-10 space-y-10">

      <div className="flex flex-col lg:flex-row gap-6">

        {/* LEFT BLOCK */}
        <div className="bg-white border border-[#E5E5E5] rounded-lg p-6 w-full lg:max-w-[350px] space-y-5">
          
          <div>
            <h2 className="text-lg font-semibold">
              საკონტაქტო ინფორმაცია
            </h2>
            <p className="text-sm text-gray-500">
              დაგვიკავშირდით
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <CustomList
              text="თბილისი"
              logoSrc="/icons/location.svg"
              className="bg-[#E6F0E8] border border-gray-200"
              textClassName="text-gray-800"
            />
            <CustomList
              text="+0 000 000 000"
              logoSrc="/icons/phone.svg"
              className="bg-[#E6F0E8] border border-gray-200"
              textClassName="text-gray-800"
            />
            <CustomList
              text="+0 000 000 000"
              logoSrc="/icons/phone.svg"
              className="bg-[#E6F0E8] border border-gray-200"
              textClassName="text-gray-800"
            />
            <CustomList
              text="example@waste.gov.ge"
              logoSrc="/icons/mail.svg"
              className="bg-[#E6F0E8] border border-gray-200"
              textClassName="text-gray-800"
            />
            <CustomList
              text="რუკა"
              logoSrc="/icons/location.svg"
              className="bg-[#E6F0E8] border border-gray-200"
              textClassName="text-gray-800"
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white border border-[#E5E5E5] rounded-lg p-6 flex-1 space-y-6">

          <div>
            <h2 className="text-lg font-semibold">
              უკუკავშირის ფორმა
            </h2>
            <p className="text-sm text-gray-500">
              * სიმბოლოთი მონიშნული ყველა ველი აუცილებელია
            </p>
          </div>

          <div className="space-y-4">

            {/* NAME */}
            <div className="relative">
              <input
                type="text"
                placeholder="სახელი / გვარი*"
                className="w-full border border-gray-300 rounded-md px-10 py-2"
              />
              <Image
                src="/icons/publicinfofirst.svg"
                alt="user"
                width={16}
                height={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-auto h-auto"
              />
            </div>

            {/* PHONE */}
            <div className="relative">
              <input
                type="text"
                placeholder="საკონტაქტო ტელეფონის ნომერი*"
                className="w-full border border-gray-300 rounded-md px-10 py-2"
              />
              <Image
                src="/icons/publicmobile.svg"
                alt="phone"
                width={16}
                height={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-auto h-auto"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <input
                type="email"
                placeholder="ელ. ფოსტა*"
                className="w-full border border-gray-300 rounded-md px-10 py-2"
              />
              <Image
                src="/icons/publicmail.svg"
                alt="mail"
                width={16}
                height={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-auto h-auto"
              />
            </div>

            {/* TEXTAREA */}
            <textarea
              placeholder="შეტყობინება"
              className="w-full border border-gray-300 rounded-md px-4 py-3 h-[180px]"
            />

            {/* CAPTCHA */}
            <ReCaptcha onChange={setCaptchaToken} />

            {/* BUTTON */}
            <button
              disabled={!captchaToken}
              className={`w-[179px] h-[48px] flex items-center justify-center text-white rounded transition
                ${
                  captchaToken
                    ? "bg-[#039855] hover:bg-[#03814A] cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }
              `}
            >
              გაგზავნა
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}