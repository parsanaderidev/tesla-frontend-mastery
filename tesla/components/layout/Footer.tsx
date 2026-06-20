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
    <footer className="w-full py-6 md:py-8 flex flex-col items-center gap-4 text-xs text-[#5c5e62] bg-black">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-4">
        {links.map((link) => (
          <span key={link} className="hover:text-[#8e8e93] cursor-pointer transition-colors duration-200">
            {link}
          </span>
        ))}
      </div>
      <p>Tesla &copy; 2026</p>
    </footer>
  );
}
