import Image from "next/image";

type CardSlideProps = {
    title?: string;     
    topicImg?: string; 
    subtitle?: string;
    img: string;         
    primaryBtnText: string;
    secondaryBtnText: string;
    hasTextOverlay?: boolean;
};

export default function CardSlide({
    title,
    topicImg,
    subtitle,
    img,
    primaryBtnText,
    secondaryBtnText,
    hasTextOverlay = true,
}: CardSlideProps) {
    return (
        <div className="relative h-125 rounded-xl overflow-hidden group">

            {/* Background Image */}
            <Image
                src={img}
                alt={title || "slide"}
                fill
                priority
                quality={100}
                className="object-cover"
            />

            {/* Overlay Content */}
            {hasTextOverlay && (
                <div className="absolute inset-0 flex flex-col justify-between p-6 z-10 text-white">
                    <div>
                        {topicImg ? (
                            <div className="h-16 w-auto relative">
                                <Image src={topicImg} alt="topic" fill className="object-contain" />
                            </div>
                        ) : (
                            title && <h3 className="text-2xl font-semibold">{title}</h3>
                        )}
                        {subtitle && <p className="mt-2 text-sm">{subtitle}</p>}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button className="px-5 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition">
                            {primaryBtnText}
                        </button>
                        <button className="px-5 py-2 border border-white rounded-md font-medium hover:bg-white hover:text-black transition">
                            {secondaryBtnText}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};