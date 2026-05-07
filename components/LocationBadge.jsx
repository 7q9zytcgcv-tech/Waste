import Image from "next/image";

export default function LocationBadge({ location, logo }) {
  return (
    <div className="flex items-center rounded-lg overflow-hidden border border-green-200 w-fit">
      
      {/* LEFT ICON */}
      <div className="bg-[#039855] flex items-center justify-center px-3 py-1">
        <Image src={logo} alt="location" width={30} height={20} className="w-auto h-auto"/>
      </div>

      {/* TEXT */}
      <div className="bg-[#E6F0E8] px-4 py-3 text-sm text-gray-800">
        {location}
      </div>

    </div>
  );
}