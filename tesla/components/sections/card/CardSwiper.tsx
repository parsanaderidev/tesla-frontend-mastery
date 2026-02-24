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
    title?: string;
    topicImg?: string;
    subtitle?: string;
    img: string;
    primaryBtnText: string;
    secondaryBtnText: string;
    hasTextOverlay?: boolean;
};

const slides: SlideType[] = [
    {
        id: 1,
        img: "/tesla-contents/images/Homepage-Card-Cybertruck.jpg",
        topicImg: "/public/tesla-contents/images/CyberTruck.jpg",
        subtitle: "Starting at $59,990",
        primaryBtnText: "Order Now",
        secondaryBtnText: "Learn More",
        hasTextOverlay: true,
    },
    {
        id: 2,
        title: "Model 3",
        subtitle: "0.99% APR Available",
        img: "/tesla-contents/images/Homepage-Card-Model-3-PS.webp",
        primaryBtnText: "Order Now",
        secondaryBtnText: "View Inventory",
        hasTextOverlay: true,
    },
    {
        id: 3,
        title: "Model Y",
        subtitle: "Long Range",
        img: "/tesla-contents/images/Homepage-Vehicle-Card-Model-Y.jpg",
        primaryBtnText: "Order Now",
        secondaryBtnText: "Learn More",
        hasTextOverlay: true,
    },
    {
        id: 4,
        title: "Model X",
        subtitle: "0% APR Available",
        img: "/tesla-contents/images/Homepage-Card-Model-X.jpg",
        primaryBtnText: "Order Now",
        secondaryBtnText: "View Inventory",
        hasTextOverlay: true,
    },
    {
        id: 5,
        title: "Model S",
        subtitle: "0% APR Available",
        img: "/tesla-contents/images/Homepage-Card-Model-S-v3.avif",
        primaryBtnText: "Order Now",
        secondaryBtnText: "View Inventory",
        hasTextOverlay: true,
    },
];

export default function CardSwiper() {
    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

    return (
        <section className="relative w-full">
            <div className="max-w-500 mx-auto relative">

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}      
                    slidesPerView={1.5}   
                    speed={600}
                    onBeforeInit={(swiper: SwiperType) => {
                        if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }
                    }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} className="pl-8 pr-0!">
                            <CardSlide {...slide} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <div
                    ref={prevRef}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-full hover:brightness-110 transition"
                >
                    <ChevronLeft size={26} />
                </div>

                <div
                    ref={nextRef}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-full hover:brightness-110 transition"
                >
                    <ChevronRight size={26} />
                </div>

            </div>
        </section>
    );
};