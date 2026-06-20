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
        <div className="relative h-[22rem] sm:h-[26rem] md:h-[28rem] lg:h-[31.25rem] rounded-xl overflow-hidden group">

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
                <div className="absolute pb-6 sm:pb-10 inset-0 flex flex-col justify-end p-4 sm:p-6 z-10 text-white">

                    <div className="text-start absolute top-4 sm:top-6 left-4 sm:left-6">
                        {subtopic && <p className="text-sm sm:text-base font-bold">{subtopic}</p>}
                    </div>

                    {/* Topic */}
                    <div className="mb-3 sm:mb-4">
                        {topicImg ? (
                            <div className="relative top-4 sm:top-8 -right-4 sm:-right-15">
                                <Image
                                    src={topicImg}
                                    alt="topic"
                                    width={350}
                                    height={350}
                                    className="w-[200px] sm:w-[280px] md:w-[350px] h-auto"
                                />
                            </div>
                        ) : (
                            title && <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">{title}</h3>
                        )}
                        {subtitle && (
                            <div className="mt-0 flex flex-col relative w-max">
                                <p className="text-base sm:text-lg">{subtitle}</p>
                                <span className="block h-[0.5px] bg-white -mt-0.6"></span>
                            </div>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button className="w-full sm:w-40 md:w-45 h-10 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition cursor-pointer text-sm sm:text-base">
                            {primaryBtnText}
                        </button>

                        <button className="w-full sm:w-40 md:w-45 h-10 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition cursor-pointer text-sm sm:text-base">
                            {secondaryBtnText}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardSlide;
