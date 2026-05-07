import Container from "@/components/Container";
import Image from "next/image";

import { allNewObjects } from "@/data/newObjects";
import Button from "@/components/Button";
import ImageGallery from "@/components/ImageGallery";

export default async function NewDetailPage({ params, searchParams }) {
  const { id } = await params;
  const { page } = await searchParams;

  const item = allNewObjects.find((n) => String(n.id) === id);

  if (!item) {
    return <div className="p-10 text-center">არ მოიძებნა</div>;
  }

  return (
    <Container>
      <div className="space-y-10 py-10 max-w-[800px] mx-auto lg:max-w-none">

        {/* 🔥 FLOAT SECTION */}
        <div className="text-sm text-gray-700 leading-6 text-center lg:text-left">

          {/* IMAGE */}
          <div
            className="relative w-full max-w-[500px] h-[220px] mx-auto mb-4
              lg:w-[400px] lg:h-[260px] lg:float-left lg:mr-6 lg:mb-2 rounded-lg overflow-hidden"
          >
            <Image
              src={item.img}
              alt={item.title}
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

          {/* TITLE */}
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">
            {item.title}
          </h1>

          {/* TEXT */}
          <p>{item.text}</p>

          <div className="clear-both" />
        </div>
      </div>

      {/* 🔙 BACK */}
      <div className="flex justify-center lg:justify-start pt-6">
        <Button
          text="დაბრუნება"
          href={`/landfill/new?page=${page || 1}`}
        />
      </div>
    </Container>
  );
}