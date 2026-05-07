import Container from "@/components/Container";
import Image from "next/image";
import { allLandfills } from "@/data/landfill";
import Button from "@/components/Button";
import ImageGallery from "@/components/ImageGallery";

export default async function Page({ params, searchParams }) {
  const { id } = await params;
  const { page } = await searchParams;

  const landfill = allLandfills.find((n) => String(n.id) === id);

  if (!landfill) {
    return <div className="p-10 text-center">არ მოიძებნა</div>;
  }

  return (
    <Container>
      <div className="py-10 space-y-10 max-w-[800px] mx-auto lg:max-w-none lg:mx-0">

        {/* 🔥 FLOAT IMAGE + TEXT */}
        <div className="text-sm text-gray-700 leading-6 text-center lg:text-left">

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
              src={landfill.img}
              alt={landfill.title}
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

          {/* TEXT */}
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
            {landfill.title}
          </h1>

          <p className="whitespace-pre-line">
            {landfill.text}
          </p>

          <div className="clear-both" />
        </div>

        {/* 🔙 BACK */}
        <div className="flex justify-center lg:justify-start pt-6">
          <Button
            text="დაბრუნება"
            href={`/landfill?page=${page || 1}`}
          />
        </div>

      </div>
    </Container>
  );
}