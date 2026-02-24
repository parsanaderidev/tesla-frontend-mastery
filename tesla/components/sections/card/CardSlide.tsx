import Image from "next/image";

type CardSlideProps = {
    title: string;
    subtitle: string;
    img: string;
    primaryBtnText: string;
    secondaryBtnText: string;
};

export default function CardSlide({
    title,
    subtitle,
    img,
    primaryBtnText,
    secondaryBtnText,
}: CardSlideProps) {
    return (
        <div className="relative h-150 w-250 rounded-2xl overflow-hidden group">
            <Image
                src={img}
                alt={title}
                fill
                priority
                quality={100}
                className="object-cover"
            />

            <div className="absolute inset-0 flex flex-col justify-between p-8 text-white z-10">
                <div>
                    <h3 className="text-3xl font-semibold">{title}</h3>
                    <p className="mt-2 text-lg">{subtitle}</p>
                </div>

                <div className="flex gap-4">
                    <button className="px-6 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition">
                        {primaryBtnText}
                    </button>
                    <button className="px-6 py-2 border border-white rounded-md font-medium hover:bg-white hover:text-black transition">
                        {secondaryBtnText}
                    </button>
                </div>
            </div>
        </div>
    );
}