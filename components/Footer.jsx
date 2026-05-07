"use client";

import CustomList from "./CustomList";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0f0d] text-gray-300">
      {/* CONTAINER (იგივე რაც header-ში) */}
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-x-16 gap-y-10">
          {/* LEFT */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">WASTE.GOV.GE</h2>

            <p className="text-sm text-gray-400 leading-relaxed">
              საიტზე განთავსებული ინფორმაცია წარმოადგენს კომპანიის საკუთრებას
              მისი გავრცელება შეგიძლიათ მხოლოდ ბმულის გაზიარებით. დაუშვებელია
              მასალის ჩამოტვირთვა და სხვაგან ატვირთვა, ამ შემთხვევაში კომპანია
              უფლებას იტოვებს მიმართოს შესაბამის ზომებს.
            </p>
          </div>

          {/* CENTER */}
          <div>
            <h3 className="font-bpg text-[24px] leading-[28px] font-bold mb-4">
              სასარგებლო ბმულები
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CustomList text="საჩივრები" logoSrc="/icons/footerOne.svg" />
              <CustomList text="გამოცემები" logoSrc="/icons/publish.svg" />
              <CustomList
                text="ვიზიტორთა სტატისტიკა"
                logoSrc="/icons/visitors.svg"
              />
              <CustomList text="ტენდერები" logoSrc="/icons/tenders.svg" />
              <CustomList text="პარტნიორები" logoSrc="/icons/footerthird.svg" />             
              <CustomList
                text="ხშირად დასმული კითხვები"
                logoSrc="/icons/questions.svg"
              />
            </div>
          </div>
  
          {/* RIGHT */}
          <div>
            <h3 className="font-bpg text-[24px] leading-[28px] font-bold mb-4">კონტაქტი</h3>
 
            <div className="space-y-4">
              <CustomList
                text="example@waste.gov.ge"
                logoSrc="/icons/mail.svg"
              />
              <CustomList text="+0 000 000 0000" logoSrc="/icons/phone.svg" />
              <CustomList text="მისამართი" logoSrc="/icons/location.svg" />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="w-full  text-center text-xs text-gray-500 py-4 px-4">
        © {new Date().getFullYear()} © ყველა უფლება დაცულია | შექმნილია IT
        დეპარტამენტის მიერ
      </div>
    </footer>
  );
}
