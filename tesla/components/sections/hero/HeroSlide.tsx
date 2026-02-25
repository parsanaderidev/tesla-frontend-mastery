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
                />
            ) : (
                <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover"
                />
            )}

            <div className="absolute top-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-center text-white">
                <h2 className="text-5xl font-semibold">{title}</h2>

                <p
                    className={`text-xl mt-2 ${subtitleStyle === "inline"
                        ? "inline"
                        : subtitleStyle === "underline"
                            ? "underline"
                            : ""
                        }`}
                >
                    {subtitle}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                    <button className="w-55 h-10 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition cursor-pointer">
                        {primaryBtnText}
                    </button>

                    <button className="w-55 h-10 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition cursor-pointer">
                        {secondaryBtnText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSlide;