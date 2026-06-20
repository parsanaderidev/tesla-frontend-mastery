"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import CardSlide from "./CardSlide";
import { ChevronRight, ChevronLeft } from "lucide-react";

type SlideType = {
    id: number;
    title?: string;
    topicImg?: string;
    subtopic?: string;
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
        topicImg: "/tesla-contents/images/Cybertruck-logo.png",
        subtopic: "Utility Truck",
        subtitle: "Starting at $59,990",
        primaryBtnText: "Order Now",
        secondaryBtnText: "Learn More",
        hasTextOverlay: true
    },
    {
        id: 2,
        title: "Model 3",
        subtopic: "Sport Sedan",
        img: "/tesla-contents/images/Homepage-Card-Model-3-PS.webp",
        primaryBtnText: "Order Now",
        secondaryBtnText: "Learn More",
        hasTextOverlay: true
    },
    {
        id: 3,
        title: "Model Y",
        subtopic: "Midsize SUV",
        subtitle: "Lease From $459/mo",
        img: "/tesla-contents/images/Homepage-Vehicle-Card-Model-Y.jpg",
        primaryBtnText: "Order Now",
        secondaryBtnText: "Learn More",
        hasTextOverlay: true
    },
    {
        id: 4,
        title: "Model X",
        subtopic: "Luxury SUV",
        subtitle: "3.99% APR Available",
        img: "/tesla-contents/images/Homepage-Card-Model-X.jpg",
        primaryBtnText: "Order Now",
        secondaryBtnText: "Learn More",
        hasTextOverlay: true
    },
    {
        id: 5,
        title: "Model S",
        subtopic: "Luxury Sedan",
        subtitle: "3.99% APR Available",
        img: "/tesla-contents/images/Homepage-Card-Model-S-v3.avif",
        primaryBtnText: "Order Now",
        secondaryBtnText: "Learn More",
        hasTextOverlay: true
    },
];

function CardSwiper() {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="card-swiper relative w-full pl-4 sm:pl-6 lg:pl-10 pr-0">
            <div className="relative w-full">

                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1.5}
                    spaceBetween={20}
                    speed={600}
                    loop={false}
                    breakpoints={{
                        768: { slidesPerView: 1.5, spaceBetween: 28 },
                        1024: { slidesPerView: 1.5, spaceBetween: 32 },
                    }}
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
                        <SwiperSlide key={slide.id}>
                            <CardSlide {...slide} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Prev Button */}
                <div
                    ref={prevRef}
                    className={`absolute left-3 sm:left-5 lg:left-6 top-[36%] sm:top-[38%] md:top-[40%] -translate-y-1/2 z-20 cursor-pointer bg-white shadow-md w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-md hover:brightness-110 transition ${activeIndex === 0 ? "opacity-0 pointer-events-none" : ""}`}
                >
                    <ChevronLeft size={26} />
                </div>

                {/* Next Button */}
                <div
                    ref={nextRef}
                    className={`absolute right-6 sm:right-8 lg:right-10 top-[36%] sm:top-[38%] md:top-[40%] -translate-y-1/2 z-20 cursor-pointer bg-white shadow-md w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-md hover:brightness-110 transition ${activeIndex === slides.length - 1 ? "opacity-0 pointer-events-none" : ""}`}
                >
                    <ChevronRight size={26} />
                </div>

            </div>
        </section>
    );
};

export default CardSwiper;