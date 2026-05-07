"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[600px] md:min-h-[500px] flex items-center py-10"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTAINER */}
      <div className="relative z-10 w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 text-white">
        
        <div
          className="
            max-w-2xl
            lg:max-w-[700px]

            w-full
            h-auto

            bg-black/40
            shadow-[0px_0px_10px_rgba(0,0,0,0.16)]
            rounded-[10px]

            p-4 sm:p-6 lg:p-8
          "
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 leading-tight">
            სათაური
          </h1>

          <p className="mb-6 text-sm sm:text-base leading-relaxed">
            „საქართველოს მყარი ნარჩენების მართვის კომპანიის“ დირექტორი მიხეილ გოგოლიძე ქვემო ქართლში იმყოფებოდა. კომპანიის დირექტორი თეთრიწყაროს მუნიციპალიტეტში, სოფელ წინწყაროს მიმდებარედ, რეგიონული, არასახიფათო ნარჩენების განთავსების ობიექტის სამშენებლო სამუშაოებს ადგილზე გაეცნო. ახალი ობიექტი საერთაშორისო სტანდარტების შესაბამისად, „ქვემო ქართლის მყარი ნარჩენების პროექტის“ ფარგლებში შენდება. პროექტი ევროპის რეკონსტრუქციისა და განვითარების ბანკის (EBRD) ფინანსური მხარდაჭერით ხორციელდება. ობიექტი, 29 წლის განმავლობაში, 5 მუნიციპალიტეტს: თეთრიწყარო, მარნეული, წალკა, დმანისი, ბოლნისი მოემსახურება. მისი ექსპლუატაციაში შესვლის შემდეგ, ეტაპობრივად დაიხურება ყველა არსებული ძველი ნაგავსაყრელი. მიხეილ გოგოლიძე ქვემო ქართლში მარნეულის მუნიციპალიტეტში არსებული ნაგავსაყრელზე არსებულ მდგომარეობასაც გაეცნო და ბოლნისის მუნიციპალიტეტში ნარჩენების გადამტვირთავ ახალ სადგურზეც იმყოფებოდა.
          </p>

          <Link
            href="/landfill"
            className="inline-block bg-[#F5F5F5] text-[#1A1A1A]/60 px-5 py-2 text-sm sm:text-base rounded-[3px] hover:bg-gray-200 transition"
          >
            სრულად ნახვა →
          </Link>
        </div>
      </div>
    </section>
  );
}