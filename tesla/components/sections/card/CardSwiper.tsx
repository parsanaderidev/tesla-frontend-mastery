"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import CardSlide from "./CardSlide";
import { ChevronRight, ChevronLeft } from "lucide-react";

type SlideType = {
    id: number;
    title: string;
    subtitle: string;
    img: string;
    isVideo?: boolean;
    subtitleStyle?: "inline" | "underline" | "normal";
    primaryBtnText: string;
    secondaryBtnText: string;
};

const slides: SlideType[] = [
    {
        id: 1,
        title: "Cybertruck",
        subtitle: "Plaid",
        img: "/tesla-contents/images/Homepage-Card-Cybertruck.jpg",
        primaryBtnText: "Order Now",
        secondaryBtnText: "Learn More",
    },
    {
        id: 2,
        title: "Model 3",
        subtitle: "0.99% APR Available",
        img: "/tesla-contents/images/Homepage-Promo-Model-3.jpg",
        primaryBtnText: "Order Now",
        secondaryBtnText: "View Inventory",
    },
    {
        id: 3,
        title: "Model X",
        subtitle: "Long Range",
        img: "/public/tesla-contents/images/",
        primaryBtnText: "Order Now",
        secondaryBtnText: "Learn More",
    },
    {
        id: 4,
        title: "Model Y",
        subtitle: "0% APR Available",
        img: "/public/tesla-contents/images/",
        primaryBtnText: "Order Now",
        secondaryBtnText: "View Inventory",
    },
];

export default function CardSwiper() {
    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

    return (
        <section className="relative w-full">
            <div className="max-w-[2000] pl-8">

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1.5}
                    speed={600}
                    breakpoints={{
                        1280: { slidesPerView: 1.5, spaceBetween: 100 },
                    }}
                    onBeforeInit={(swiper: SwiperType) => {
                        if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }
                    }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <CardSlide {...slide} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <div
                    ref={prevRef}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-full hover:brightness-110 transition"
                >
                    <ChevronLeft size={26} />
                </div>

                <div
                    ref={nextRef}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-full hover:brightness-110 transition"
                >
                    <ChevronRight size={26} />
                </div>

            </div>
        </section>
    );
}