import Image from "next/image";

export default function TreeCard({ name, role, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md px-6 py-4 flex items-center gap-4 relative">
      
      {image && (
        <div className="relative w-14 h-14">
          <Image
            src={image}
            alt={name}
            fill
            sizes="56px"
            className="rounded-full border-4 border-green-600 object-cover"
          />
        </div>
      )}

      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>

    </div>
  );
}