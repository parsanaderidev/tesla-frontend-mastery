"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import HeroSlide from "./HeroSlide";

// Use literal types for subtitleStyle
const heroSlides: {
    id: number;
    title: string;
    subtitle: string;
    img: string;
    isVideo?: boolean;
    subtitleStyle?: "inline" | "underline" | "normal";
}[] = [
        {
            id: 1,
            title: "Full Self-Driving (Supervised)",
            subtitle: "Available for $99/mo",
            img: "/tesla-contents/videos/Homepage-Promo-Carousel-FSD-Supervised-Tablet.webm",
            isVideo: true,
            subtitleStyle: "inline"
        },
        {
            id: 2,
            title: "Model 3",
            subtitle: "0.99% APR Available",
            img: "/tesla-contents/images/Homepage-Promo-Model-3.jpg",
            subtitleStyle: "underline"
        },
        {
            id: 3,
            title: "Model Y",
            subtitle: "0% APR Available",
            img: "/tesla-contents/images/Homepage-Promo-Meet-Model-Y.jpg",
            subtitleStyle: "normal"
        },
    ];

export default function HeroSwiper() {
    return (
        <section className="relative w-full h-[80vh]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                {heroSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <HeroSlide {...slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};