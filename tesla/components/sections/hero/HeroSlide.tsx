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
export default function HeroSlide({
    title,
    subtitle,
    img,
    isVideo,
    subtitleStyle = "normal",
    primaryBtnText,
    secondaryBtnText,
}: HeroSlideProps) {
    return (
        <div className="relative w-full h-screen">

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

            <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-center text-white">
                <h2 className="text-5xl font-bold">{title}</h2>

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
                    <button className="px-18 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-gray-200 transition">
                        {primaryBtnText}
                    </button>

                    <button className="px-14 py-2 bg-white text-black rounded-md font-medium hover:bg-white hover:text-black transition">
                        {secondaryBtnText}
                    </button>
                </div>
            </div>
        </div>
    );
};