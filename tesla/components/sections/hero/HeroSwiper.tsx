"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import HeroSlide from "./HeroSlide";

import { ChevronRight, ChevronLeft } from 'lucide-react';

// Slides data with type-safe subtitleStyle
const heroSlides: {
    id: number;
    title: string;
    subtitle: string;
    img: string;
    isVideo?: boolean;
    subtitleStyle?: "inline" | "underline" | "normal";
    primaryBtnText: string;
    secondaryBtnText: string;
}[] = [
        {
            id: 1,
            title: "Full Self-Driving (Supervised)",
            subtitle: "Available for $99/mo",
            img: "/tesla-contents/videos/Homepage-Promo-Carousel-FSD-Supervised-Tablet.webm",
            isVideo: true,
            subtitleStyle: "inline",
            primaryBtnText: "Demo FSD (Supervised)",
            secondaryBtnText: "Learn More",
        },
        {
            id: 2,
            title: "Model 3",
            subtitle: "0.99% APR Available",
            img: "/tesla-contents/images/Homepage-Promo-Model-3.jpg",
            subtitleStyle: "underline",
            primaryBtnText: "Order Now",
            secondaryBtnText: "View Inventory",
        },
        {
            id: 3,
            title: "Model Y",
            subtitle: "0% APR Available",
            img: "/tesla-contents/images/Homepage-Promo-Meet-Model-Y.jpg",
            subtitleStyle: "underline",
            primaryBtnText: "Order Now",
            secondaryBtnText: "View Inventory",
        },
    ];

export default function HeroSwiper() {

    return (
        <section className="hero-swiper relative w-full h-[80vh]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
                className="hero-swiper w-full h-full"
            >
                {heroSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <HeroSlide {...slide} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom arrows with content */}
            <div className="custom-prev">{<ChevronLeft />}</div>
            <div className="custom-next">{<ChevronRight />}</div>
        </section>
    );
};