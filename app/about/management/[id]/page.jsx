import Image from "next/image";
import FileUploadCard from "@/components/FileUploadCard";
import Container from "@/components/Container";
import Button from "@/components/Button";
import ImageGallery from "@/components/ImageGallery";
import Link from "next/link";

const data = {
  mixeil: {
    name: "მიხეილ გიორგიძე",
    role: "დირექტორი",
    image: "/headPhoto.png",
    text: "მიხეილ გიორგიძე არის კომპანიის დირექტორი მრავალწლიანი გამოცდილებით...",
  },
  ana: {
    name: "ანა მჭედლიშვილი",
    role: "მენეჯერი",
    image: "/headPhoto.png",
    text: "ანა არის კომპანიის დირექტორი მრავალწლიანი გამოცდილებით...",
  },
  giorgi: {
    name: "გიორგი ქავთარაძე",
    role: "სპეციალისტი",
    image: "/headPhoto.png",
    text: "გიორგი არის კომპანიის დირექტორი მრავალწლიანი გამოცდილებით...",
  },
};

export default async function ManagementDetailPage({ params }) {
  const { id } = await params; // ✅ სწორი გზა Next 16-ში

  const person = data[id];

  if (!person) {
    return (
      <div className="p-10 text-center">
        <p className="mb-4 text-lg">ვერ მოიძებნა</p>
        <Link
          href="/about/management"
          className="px-4 py-2 bg-[#039855] text-white rounded inline-block"
        >
          დაბრუნება
        </Link>
      </div>
    );
  }

  return (
    <Container>
      <div className="space-y-10 py-10 max-w-[800px] mx-auto lg:max-w-none">

        {/* 🔥 FLOAT SECTION */}
        <div className="text-gray-700 leading-6 text-center lg:text-left">

          {/* IMAGE */}
          <div
            className="
              relative 
              w-full 
              aspect-[16/9]
              mb-4
              lg:w-[400px] 
              lg:h-[260px] 
              lg:float-left 
              lg:mr-6 
              lg:mb-2 
              rounded-lg 
              overflow-hidden
            "
          >
            <Image
              src={person.image}
              alt={person.name}
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
              showGallery={false}
            />
          </div>

          {/* TEXT */}
          <h1 className="text-xl md:text-2xl font-semibold mb-2">
            {person.name}
          </h1>

          <p className="text-gray-500 mb-3">{person.role}</p>

          <p className="whitespace-pre-line">{person.text}</p>

          <div className="clear-both" />
        </div>

        {/* EXTRA */}
        <div className="text-gray-700 leading-6 text-center lg:text-left">
          დამატებითი ინფორმაცია თანამშრომლის შესახებ...
        </div>

        {/* COMPONENT */}
        <div className="space-y-6">
          <div className="w-full max-w-[500px] mx-auto lg:max-w-none">
            <FileUploadCard
              text="დოკუმენტაცია თანამშრომლის შესახებ"
              logoSrc="/icons/filedownload.svg"
              secondLogoSrc="/icons/fileview.svg"
            />
          </div>
        </div>

        {/* BACK */}
        <div className="flex justify-center lg:justify-start pt-6">
          <Button
            text="უკან დაბრუნება"
            href="/about/management"
          />
        </div>

      </div>
    </Container>
  );
}