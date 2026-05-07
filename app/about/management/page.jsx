"use client";


import ManagementCard from "@/components/ManagementCard";

const data = [
  {
    id: "mixeil",
    name: "მიხეილ გიორგიძე",
    role: "დირექტორი",
    image: "/headPhoto.png",
  },
  { id: "ana", name: "ანა მჭედლიშვილი", role: "მენეჯერი", image: "/headPhoto.png" },
  {
    id: "giorgi",
    name: "გიორგი ქავთარაძე",
    role: "სპეციალისტი",
    image: "/headPhoto.png",
  },
];

export default function ManagementPage() {
  return (
    
      <div className="py-10">

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div key={item.id} className="w-full">
              <ManagementCard
                id={item.id}
                name={item.name}
                role={item.role}
                image={item.image}
              />
            </div>
          ))}
        </div>

      </div>
    
  );
}