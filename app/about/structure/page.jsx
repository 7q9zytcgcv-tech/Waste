"use client";

import { useState } from "react";
import TreeCard from "@/components/TreeCard";
import Image from "next/image";

export default function TreePage() {
  const [selected, setSelected] = useState(null);

  const handleOpen = (person) => {
    setSelected({
      ...person,
      description:
        "ეს არის დამატებითი ინფორმაცია ამ პირის შესახებ. მომავალში ეს მონაცემი წამოვა ბაზიდან.",
    });
  };

  return (
    <div className="py-10 w-full">

      {/* 🔥 DESKTOP TREE */}
      <div className="hidden lg:block">
        <div className="flex flex-col items-center">
          
          {/* ROOT */}
          <div
            onClick={() =>
              handleOpen({
                name: "მიხეილ გიორგიძე",
                role: "დირექტორი",
                image: "/HeadPhoto.png",
              })
            }
            className="cursor-pointer"
          >
            <TreeCard
              name="მიხეილ გიორგიძე"
              role="დირექტორი"
              image="/HeadPhoto.png"
            />
          </div>

          <div className="w-[2px] h-10 bg-gray-300"></div>

          {/* LEVEL 2 */}
          <div className="flex gap-20 relative">
            
            <div className="absolute top-[-80px] left-[885px] right-[225px] h-[2px] bg-gray-300"></div>
            <div className="absolute top-[-80px] left-[225px] right-[885px] h-[2px] bg-gray-300"></div>

            {["დეპარტამენტი", "დეპარტამენტი", "დეპარტამენტი"].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                
                <div className="w-3 h-3 bg-green-600 rounded-full -mt-1 mb-2"></div>

                <div
                  onClick={() =>
                    handleOpen({
                      name: `${item} უფროსი`,
                      role: "დირექტორი",
                    })
                  }
                  className="cursor-pointer"
                >
                  <TreeCard name={`${item} უფროსი`} role="დირექტორი" />
                </div>

                <div className="w-[2px] h-10 bg-gray-300"></div>

                <div className="flex gap-4">
                  {[1, 2].map((_, j) => (
                    <div
                      key={j}
                      onClick={() =>
                        handleOpen({
                          name: "სამმართველოს უფროსი",
                          role: "სტაფი",
                        })
                      }
                      className="cursor-pointer"
                    >
                      <TreeCard name="სამმართველოს უფროსი" role="სტაფი" />
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 MOBILE / TABLET */}
      <div className="flex flex-col gap-6 lg:hidden w-full">

        {/* ROOT */}
        <div
          onClick={() =>
            handleOpen({
              name: "მიხეილ გიორგიძე",
              role: "დირექტორი",
              image: "/logo.png",
            })
          }
          className="cursor-pointer w-full max-w-[400px] sm:max-w-none"
        >
          <TreeCard name="მიხეილ გიორგიძე" role="დირექტორი" image="/logo.png" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-full">
          {["დეპარტამენტი", "დეპარტამენტი", "დეპარტამენტი"].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 w-full"
            >
              <div
                onClick={() =>
                  handleOpen({
                    name: `${item} უფროსი`,
                    role: "დირექტორი",
                  })
                }
                className="cursor-pointer w-full"
              >
                <TreeCard name={`${item} უფროსი`} role="დირექტორი" />
              </div>

              {[1, 2].map((_, j) => (
                <div
                  key={j}
                  onClick={() =>
                    handleOpen({
                      name: "სამმართველოს უფროსი",
                      role: "სტაფი",
                    })
                  }
                  className="cursor-pointer w-full"
                >
                  <TreeCard name="სამმართველოს უფროსი" role="სტაფი" />
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl w-full max-w-[450px] p-6 relative">
            
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer"
            >
              ✕
            </button>

            {selected.image && (
              <div className="relative w-full h-[180px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
            )}

            <h2 className="text-lg font-semibold">{selected.name}</h2>
            <p className="text-gray-500 mb-3">{selected.role}</p>

            <p className="text-sm text-gray-700 leading-6">
              {selected.description}
            </p>

          </div>
        </div>
      )}
    </div>
  );
}