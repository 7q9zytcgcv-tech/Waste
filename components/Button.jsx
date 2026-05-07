"use client";

import Link from "next/link";

export default function Button({
  text,
  onClick,
  href,
  className = "",
}) {
  const styles = `
    w-[179px]
    h-[48px]
    flex items-center justify-center
    bg-[#039855]
    text-white
    rounded
    hover:bg-[#03814A]
    transition
    cursor-pointer
    ${className}
  `;

  // 👉 თუ href აქვს → Link
  if (href) {
    return (
      <Link href={href} className={styles}>
        {text}
      </Link>
    );
  }

  // 👉 სხვა შემთხვევაში → button
  return (
    <button onClick={onClick} className={styles}>
      {text}
    </button>
  );
}