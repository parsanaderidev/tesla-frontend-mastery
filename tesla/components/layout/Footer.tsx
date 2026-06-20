export default function Footer() {
  const links = [
    "Privacy & Legal",
    "Vehicle Recalls",
    "Contact",
    "News",
    "Get Updates",
    "Locations",
  ];

  return (
    <footer className="w-full pt-4 md:pt-5 pb-36 sm:pb-28 md:pb-20 flex flex-col items-center gap-5 text-xs text-[#5c5e62] border-t border-[#ebebeb]">
      <div className="flex flex-wrap justify-center gap-x-5 sm:gap-x-6 gap-y-2 px-4 sm:px-6 lg:px-10 max-w-4xl">
        {links.map((link) => (
          <span
            key={link}
            className="hover:text-[#393939] cursor-pointer transition-colors duration-200"
          >
            {link}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-[#8e8e93]">
        <p>Tesla &copy; 2026</p>
        <span className="hidden sm:inline text-[#d1d1d6]">&middot;</span>
        <p className="text-center">
          Cloned by{" "}
          <a
            href="https://parsanaderi-dev.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#393939] hover:text-black underline decoration-[#c7c7cc] underline-offset-[3px] hover:decoration-black transition-all duration-200"
          >
            parsanaderi
          </a>
        </p>
      </div>
    </footer>
  );
}
