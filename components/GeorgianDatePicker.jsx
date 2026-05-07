"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ka } from "date-fns/locale";

export default function GeorgianDatePicker({ value, onChange }) {
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      locale={ka}
      dateFormat="dd/MM/yyyy"
      placeholderText="აირჩიე თარიღი"
      className="w-full h-[44px] pl-10 pr-4 border border-[#DADADA] rounded text-sm"
    />
  );
}