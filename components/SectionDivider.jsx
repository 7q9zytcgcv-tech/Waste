export default function SectionDivider() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 my-8 sm:my-10">
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Left line */}
        <span className="flex-1 h-px bg-gray-300" />

        {/* Text */}
        <span className="text-black-600 text-[14px] sm:text-[20px] whitespace-nowrap">
          სამინისტროს უწყებები
        </span>

        {/* Right line */}
        <span className="flex-1 h-px bg-gray-300" />
      </div>
    </div>
  );
}
