"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import HeroSlide from "./HeroSlide";

const heroSlides = [
    { id: 1, title: "Model S", subtitle: "Plaid", img: "/images/hero1.jpg" },
    { id: 2, title: "Model 3", subtitle: "Performance", img: "/images/hero2.jpg" },
    { id: 3, title: "Model X", subtitle: "Long Range", img: "/images/hero3.jpg" },
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
                className="h-full w-full"
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