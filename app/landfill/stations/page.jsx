import ImageGallery from "@/components/ImageGallery";
import LocationBadge from "@/components/LocationBadge";
import Image from "next/image";

export default function StationsPage() {
  return (
    <div className="space-y-10 py-10 max-w-[800px] mx-auto lg:max-w-none lg:mx-0">

      {/* 🔥 FLOAT SECTION */}
      <div className="text-sm text-gray-700 leading-6 text-center lg:text-left">

        {/* 🔥 IMAGE + BADGE WRAPPER */}
        <div className="lg:float-left lg:mr-6 mb-4 lg:mb-2">

          {/* IMAGE */}
          <div
            className="
              relative 
              w-full 
              aspect-[16/9]
              mb-3
              lg:w-[455px] 
              lg:h-[360px] 
              rounded-lg 
              overflow-hidden
            "
          >
            <Image
              src="/news/1.jpg"
              alt="stations"
              fill
              className="object-cover"
            />

            <ImageGallery
                          images={[
                            "/news/1.jpg",
                            "/news/2.jpg",
                            "/news/3.jpg",
                          ]}
                          showPrint={true}
                        />
          </div>

          {/* 🔥 LOCATION */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 lg:gap-10 justify-center lg:justify-start">
            <LocationBadge
              logo="/icons/location.svg"
              location="თბილისი, გლდანი"
            />
            <LocationBadge
              logo="/icons/location.svg"
              location="თბილისი, გლდანი"
            />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">
          გადამტვირთავი სადგურები
        </h1>

        {/* TEXT */}
        <p>
          აქ ჩასვი შენი სრული ტექსტი... აქ ჩასვი შენი სრული ტექსტი... აქ ჩასვი
          შენი სრული ტექსტი... აქ ჩასვი შენი სრული ტექსტი... აქ ჩასვი შენი
          სრული ტექსტი... აქ ჩასვი შენი სრული ტექსტი... აქ ჩასვი შენი სრული
          ტექსტი... აქ ჩასვი შენი სრული ტექსტი... აქ ჩასვი შენი სრული
          ტექსტი... აქ ჩასვი შენი სრული ტექსტი... აქ ჩასვი შენი სრული
          ტექსტი... აქ ჩასვი შენი სრული ტექსტი... აქ ჩასვი შენი სრული
          ტექსტი... აქ ჩასვი შენი სრული ტექსტი... აქ ჩასვი შენი სრული
          ტექსტი... აქ ჩასვი შენი სრული ტექსტი... აქ ჩასვი შენი სრული
          ტექსტი... აქ ჩასვი შენი სრული ტექსტი... აქ ჩასვი შენი სრული
          ტექსტი... აქ ჩასვი შენი სრული ტექსტი...
        </p>

        {/* CLEAR FLOAT */}
        <div className="clear-both" />
      </div>

      {/* 🔥 EXTRA TEXT */}
      <div className="text-sm text-gray-700 leading-6 text-center lg:text-left">
        დამატებითი ინფორმაცია სადგურების შესახებ...
      </div>

    </div>
  );
}