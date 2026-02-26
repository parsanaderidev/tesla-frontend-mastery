import Image from 'next/image';

function Feature() {
    return (
        <section className="flex gap-8">
            {/* Safe Travel Card */}
            <div className="w-7xl">
                <div className="relative">
                    <Image
                        src={'/tesla-contents/images/Homepage-FSD-Safety-Report-Split.jpg'}
                        alt='Safety Report'
                        width={800}
                        height={800}
                        quality={100}
                        className="object-cover w-full rounded-lg"
                    />

                    <div className="absolute bottom-10">
                        {/* Content */}
                        <div className="grid">
                            <h2 className="pl-10 text-white text-[43px] font-semibold">Travel Safer, Arrive Refreshed</h2>
                            <p className="pl-9 text-white text-[23px]">Full self-Driving (Supervised)</p>
                        </div>

                        {/* Button */}
                        <div className="flex gap-2 pl-9 pt-5">
                            <button className="w-45 h-full bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition cursor-pointer">
                                Demo FSD (Supervised)
                            </button>

                            <button className="w-55 h-12 bg-white text-black rounded-md font-semibold hover:bg-gray-100 transition cursor-pointer">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature */}
            <div className="flex">
                <div className="w-110 h-full relative rounded-lg overflow-hidden">
                    <Image
                        src={'/tesla-contents/images/Homepage-Features.jpg'}
                        alt='Safety Report'
                        width={800}
                        height={800}
                        quality={75}
                        className="object-cover w-full h-full"
                    />

                    <div className="absolute bottom-10">
                        {/* Content */}
                        <div className="grid w-auto">
                            <h2 className="pl-10 text-white text-[43px] font-semibold leading-13">Feature That <br /> Come Standard</h2>
                        </div>

                        {/* Button */}
                        <div className="flex gap-2 pl-9 pt-5">
                            <button className="w-45 h-12 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition cursor-pointer">
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