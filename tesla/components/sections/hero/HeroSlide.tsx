"use client";

import Image from "next/image";

interface HeroSlideProps {
    title: string;
    subtitle: string;
    img: string;
    isVideo?: boolean;
    subtitleStyle?: "inline" | "underline" | "normal";
    primaryBtnText: string;
    secondaryBtnText: string;
}
function HeroSlide({
    title,
    subtitle,
    img,
    isVideo,
    subtitleStyle = "normal",
    primaryBtnText,
    secondaryBtnText,
}: HeroSlideProps) {
    return (
        <div className="relative w-full h-full">

            {isVideo ? (
                <video
                    src={img}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            ) : (
                <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover"
                />
            )}

            <div className="absolute top-20 sm:top-24 md:top-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-center text-white px-4 w-full max-w-3xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">{title}</h2>

                <p
                    className={`text-sm sm:text-base md:text-lg lg:text-xl mt-2 ${subtitleStyle === "inline"
                        ? "inline"
                        : subtitleStyle === "underline"
                            ? "underline"
                            : ""
                        }`}
                >
                    {subtitle}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto px-2 sm:px-0 max-w-[280px] sm:max-w-none mx-auto sm:mx-0">
                    <button className="w-full sm:w-44 md:w-55 h-8 sm:h-10 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition cursor-pointer text-xs sm:text-base px-3">
                        {primaryBtnText}
                    </button>

                    <button className="w-full sm:w-44 md:w-55 h-8 sm:h-10 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition cursor-pointer text-xs sm:text-base px-3">
                        {secondaryBtnText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSlide;
