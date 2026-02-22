"use client";

interface HeroSlideProps {
    title: string;
    subtitle: string;
    img: string;
}

export default function HeroSlide({ title, subtitle, img }: HeroSlideProps) {
    return (
        <div
            className="w-full h-full bg-center bg-cover flex flex-col justify-center items-start px-10"
            style={{ backgroundImage: `url(${img})` }}
        >
            <h1 className="text-black text-5xl font-bold mb-2">{title}</h1>
            <p className="text-black text-xl">{subtitle}</p>
        </div>
    );
};