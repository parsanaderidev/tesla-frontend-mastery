import Image from "next/image";

type CardSlideProps = {
    title?: string;
    topicImg?: string;
    subtopic?: string;
    subtitle?: string;
    img: string;
    primaryBtnText: string;
    secondaryBtnText: string;
    hasTextOverlay?: boolean;
};

function CardSlide({
    title,
    topicImg,
    subtopic,
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
                quality={75}
                className="object-cover"
            />

            {/* Overlay Content */}
            {hasTextOverlay && (
                <div className="absolute pb-10 inset-0 flex flex-col justify-end p-6 z-10 text-white">

                    <div className="text-start absolute top-6 left-6">
                        {subtopic && <p className="text-md font-bold">{subtopic}</p>}
                    </div>

                    {/* Topic */}
                    <div className="mb-4">
                        {topicImg ? (
                            <div className="relative top-8 right-15">
                                <Image
                                    src={topicImg}
                                    alt="topic"
                                    width={350}
                                    height={350}
                                />
                            </div>
                        ) : (
                            title && <h3 className="text-5xl font-semibold">{title}</h3>
                        )}
                        {subtitle && (
                            <div className="mt-0 flex flex-col relative w-max">
                                <p className="text-lg">{subtitle}</p>
                                <span className="block h-[0.5px] bg-white -mt-0.6"></span>
                            </div>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button className="w-45 h-10 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition cursor-pointer">
                            {primaryBtnText}
                        </button>

                        <button className="w-45 h-10 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition cursor-pointer">
                            {secondaryBtnText}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardSlide;