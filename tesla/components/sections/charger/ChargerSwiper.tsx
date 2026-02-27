"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ChargerSlide from "./ChargerSlide";

type SlideType = {
    id: number;
    title?: string;
    topicImg?: string;
    subtopic?: string;
    subtitle?: string;
    img: string;
    primaryBtnText?: string;
    secondaryBtnText?: string;
    hasTextOverlay?: boolean;
};

const slides: SlideType[] = [
    {
        id: 1,
        title: "Solar Panels",
        subtitle: "Power Your Home and Reduce Your Electricity Bill",
        img: "/tesla-contents/images/Homepage-Card-Model-3-PS.webp",
        primaryBtnText: "Order Now",
        secondaryBtnText: "Learn More",
        hasTextOverlay: true
    },
    {
        id: 2,
        title: "Powerwall",
        subtitle: "Keep Your Lights On During Outages",
        img: "/tesla-contents/images/Homepage-Vehicle-Card-Model-Y.jpg",
        primaryBtnText: "Order Now",
        secondaryBtnText: "Learn More",
        hasTextOverlay: true
    },
    {
        id: 3,
        title: "Megapack",
        subtitle: "Massive Batteries for Massive Energy Support",
        img: "/tesla-contents/images/Homepage-Card-Model-X.jpg",
        primaryBtnText: "Learn More",
        hasTextOverlay: true
    },
    {
        id: 4,
        title: "Solar Roof",
        subtitle: "Generate Clean Energy With Your Roof",
        img: "/tesla-contents/images/Homepage-Card-Model-S-v3.avif",
        primaryBtnText: "Order Now",
        secondaryBtnText: "Learn More",
        hasTextOverlay: true
    },
];

function ChargerSwiper() {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="card-swiper relative w-full">
            <div className="max-w-500 mx-auto relative">

                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1.5}
                    spaceBetween={0}
                    speed={600}
                    loop={false}
                    pagination={{
                        clickable: true,
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                        setTimeout(() => {
                            if (prevRef.current && nextRef.current && typeof swiper.params.navigation === 'object') {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.destroy();
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }
                        }, 0);
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} className="pl-3 pr-3">
                            <ChargerSlide {...slide} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Prev Button */}
                <div
                    ref={prevRef}
                    className={`absolute left-5 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-md hover:brightness-110 transition ${activeIndex === 0 ? "opacity-0 pointer-events-none" : ""}`}
                >
                    <ChevronLeft size={26} />
                </div>

                {/* Next Button */}
                <div
                    ref={nextRef}
                    className={`absolute right-5 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-md hover:brightness-110 transition ${activeIndex === slides.length - 1 ? "opacity-0 pointer-events-none" : ""}`}
                >
                    <ChevronRight size={26} />
                </div>

            </div>
        </section>
    );
};

export default ChargerSwiper;