"use client";

import CardsCarousel from "./CardsCarousel";

const agencies = [
  {
    title:
      "გარემოს დაცვისა და სოფლის მეურნეობის სამინისტროს\nსაქართველოს მყარი ნარჩენების\nმართვის კომპანია",
    logo: "/agencies-icon/universal-logo.png",
  },
  {
    title: "საქართველოს\nმელიორაცია",
    logo: "/agencies-icon/melioracia.png",
  },
  {
    title: "სსიპ დაცული\nტერიტორიების სააგენტო",
    logo: "/agencies-icon/universal-logo.png",
  },
  {
    title: "სსიპ ღვინის\nეროვნული სააგენტო",
    logo: "/agencies-icon/universal-logo.png",
  },
  {
    title: "სოფლის განვითარების\nსააგენტო",
    logo: "/agencies-icon/rda.png",
  },
  {
    title: "სსიპ სურსათის\nეროვნული სააგენტო",
    logo: "/agencies-icon/universal-logo.png",
  },
  {
    title: "სსიპ გარემოს\nეროვნული სააგენტო",
    logo: "/agencies-icon/universal-logo.png",
  },
  {
    title: "სსიპ მინერალური რესურსების\nეროვნული სააგენტო",
    logo: "/agencies-icon/universal-logo.png",
  },
];

export default function Cards() {
  return (
    <section className="py-10 sm:py-12">
      
      {/* alignment იგივე რაც სხვაგან */}
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
        <CardsCarousel items={agencies} />
      </div>

    </section>
  );
}