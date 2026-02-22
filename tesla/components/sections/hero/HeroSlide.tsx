"use client";

import Image from "next/image";

interface HeroSlideProps {
    title: string;
    subtitle: string;
    img: string;
    isVideo?: boolean;
    subtitleStyle?: "inline" | "underline" | "normal";
}

export default function HeroSlide({
    title,
    subtitle,
    img,
    isVideo,
    subtitleStyle = "normal",
}: HeroSlideProps) {
    return (
        <div className="relative w-full h-full">
            {isVideo ? (
                <video
                    src={img}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                />
            ) : (
                <Image
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                    width={1920}
                    height={1080}
                />
            )}

            <div className="absolute bottom-10 left-10 text-white">
                <h2 className="text-3xl font-bold">{title}</h2>
                <p
                    className={`text-lg mt-2 ${subtitleStyle === "inline"
                            ? "inline"
                            : subtitleStyle === "underline"
                                ? "underline"
                                : ""
                        }`}
                >
                    {subtitle}
                </p>
            </div>
        </div>
    );
};