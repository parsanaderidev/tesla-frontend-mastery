import Image from 'next/image';

function Feature() {
    return (
        <section className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 w-full">
            {/* Safe Travel Card */}
            <div className="w-full lg:flex-[1.6]">
                <div className="relative">
                    <Image
                        src={'/tesla-contents/images/Homepage-FSD-Safety-Report-Split.jpg'}
                        alt='Safety Report'
                        width={800}
                        height={800}
                        quality={100}
                        className="object-cover w-full rounded-lg aspect-[4/3] sm:aspect-auto sm:min-h-[320px] lg:min-h-[400px]"
                    />

                    <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-0 right-0">
                        <div className="grid px-4 sm:px-6 md:pl-9 lg:pl-10">
                            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[43px] font-semibold leading-tight">
                                Travel Safer, Arrive Refreshed
                            </h2>
                            <p className="text-white text-base sm:text-lg md:text-[23px] mt-1">
                                Full self-Driving (Supervised)
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 px-4 sm:px-6 md:pl-9 lg:pl-10 pt-4 sm:pt-5">
                            <button className="w-full sm:w-40 md:w-45 h-10 sm:h-12 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition cursor-pointer text-sm sm:text-base">
                                Demo FSD (Supervised)
                            </button>

                            <button className="w-full sm:w-48 md:w-55 h-10 sm:h-12 bg-white text-black rounded-md font-semibold hover:bg-gray-100 transition cursor-pointer text-sm sm:text-base">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature */}
            <div className="w-full lg:flex-1">
                <div className="w-full h-full relative rounded-lg overflow-hidden min-h-[280px] sm:min-h-[320px] lg:min-h-0">
                    <Image
                        src={'/tesla-contents/images/Homepage-Features.jpg'}
                        alt='Features'
                        width={800}
                        height={800}
                        quality={75}
                        className="object-cover w-full h-full min-h-[280px] sm:min-h-[320px]"
                    />

                    <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-0 right-0">
                        <div className="grid px-4 sm:px-6 md:pl-9 lg:pl-10">
                            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[43px] font-semibold leading-tight">
                                Feature That <br className="hidden sm:block" /> Come Standard
                            </h2>
                        </div>

                        <div className="flex px-4 sm:px-6 md:pl-9 lg:pl-10 pt-4 sm:pt-5">
                            <button className="w-full sm:w-40 md:w-45 h-10 sm:h-12 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition cursor-pointer text-sm sm:text-base">
                                Discover
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
