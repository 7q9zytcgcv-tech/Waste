import Container from "@/components/Container";
import Image from "next/image";
import { allNews } from "@/data/news";
import Button from "@/components/Button";
import ImageGallery from "@/components/ImageGallery";
import CustomList from "@/components/CustomList";

export default async function Page({ params, searchParams }) {
  const { id } = await params;
  const { page } = await searchParams;

  const news = allNews.find((n) => String(n.id) === id);

  if (!news) {
    return <div className="p-10 text-center">არ მოიძებნა</div>;
  }

  // ✅ ქართული date formatter
  const formatDate = (date) => {
    const months = [
      "იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი",
      "ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი",
    ];

    const [year, month, day] = date.split("-");
    return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
  };

  return (
    <Container>
      <div className="py-10 space-y-10 max-w-[800px] mx-auto lg:max-w-none">

        {/* 🔥 IMAGE + TEXT */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* IMAGE */}
          <div className="relative w-full h-[220px] sm:h-[260px] lg:w-[400px] lg:h-[260px] rounded-lg overflow-hidden shrink-0">
            <Image
              src={news.img}
              alt={news.title}
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
          <div className="text-sm text-gray-700 leading-6 text-center lg:text-left flex-1">

            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              {news.title}
            </h1>

            {/* 📅 DATE */}
            <CustomList
              text={formatDate(news.date)}
              logoSrc="/icons/filterCalendar.svg"
              variant="calendar"
              className="bg-[#0C6D1D]/15 shadow-md w-[190px] h-[30px] mb-3 mx-auto lg:mx-0"
              textClassName="text-black text-base flex items-center justify-center w-full h-full"
            />

            <p className="whitespace-pre-line">
              {news.text}
            </p>

          </div>
        </div>

        {/* 🔙 BACK */}
        <div className="flex justify-center lg:justify-start pt-6">
          <Button
            text="დაბრუნება"
            href={`/about/news?page=${page || 1}`}
          />
        </div>

      </div>
    </Container>
  );
}