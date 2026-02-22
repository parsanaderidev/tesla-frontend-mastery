"use client";

interface HeroSlideProps {
    title: string;
    subtitle: string;
    img: string;    
    isVideo?: boolean;   
    subtitleStyle?: "underline" | "inline" | "normal";
}

export default function HeroSlide({ title, subtitle, img, isVideo = false, subtitleStyle = "normal" }: HeroSlideProps) {
    return (
        <div className="w-full h-full flex flex-col justify-center items-start px-10 relative">

            {/* Render video if isVideo is true, otherwise render image */}
            {isVideo ? (
                <video
                    src={img}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            ) : (
                <div
                    className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${img})` }}
                />
            )}

            {/* Overlay for text */}
            <div className="relative z-10 text-white">
                <h1 className="text-5xl font-bold mb-2">{title}</h1>
                <p
                    className={`text-xl ${subtitleStyle === "underline"
                            ? "border-b border-white inline-block"
                            : subtitleStyle === "inline"
                                ? "inline-block"
                                : ""
                        }`}
                >
                    {subtitle}
                </p>
            </div>
        </div>
    );
};