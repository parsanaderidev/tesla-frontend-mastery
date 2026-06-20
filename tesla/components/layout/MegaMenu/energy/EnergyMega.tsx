import Image from 'next/image';

export const energyData = [
    {
        title: "Solar Panels",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Energy-Solar-Panels.jpg",
        Learn: 'Learn',
        Order: 'Order'
    },
    {
        title: "Solar Roof",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Energy-Solar-Roof.jpg",
        Learn: 'Learn',
        Order: 'Order'
    },
    {
        title: "Powerwall",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Energy-Powerwall-US.jpg",
        Learn: 'Learn',
        Order: 'Order'
    },
    {
        title: "Megapack",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Energy-Megapack.jpg",
        Learn: 'Learn',
        Order: null
    },
];

export const energyContent = {
    items: [
        'Schedule a Consultation',
        'Why Solar',
        'Incentives',
        'Support',
        'Partner with Tesla',
        'Commercial',
        'Utilities',
    ],
};

function EnergyMega() {
    return (
        <>
            {/* Vehicles */}
            <section className="py-5 md:py-10 px-4 sm:px-8 lg:px-25 grid grid-cols-1 lg:grid-cols-[3fr_1px_1fr] gap-y-6 gap-x-5">
                {/* Cars */}
                <div className="grid pr-0 lg:pr-6 gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-min cursor-pointer">
                    {energyData.map((item) => (
                        <div key={item.title} className="flex flex-col items-center">
                            <Image src={item.image} alt={item.title} width={200} height={200} className="w-full max-w-[160px] sm:max-w-[200px] h-auto" />
                            <h3 className="font-semibold mt-2">{item.title}</h3>
                            <div className='flex gap-5 mt-2'>
                                <h4 className='underline'>{item.Learn}</h4>
                                <h4 className='underline'>{item.Order}</h4>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Line */}
                <div className="hidden lg:block bg-gray-400 w-px"></div>

                {/* Content */}
                <div className="w-full py-0 lg:py-5 px-2 sm:px-10 border-t lg:border-t-0 border-gray-200">
                    {energyContent.items.map((item, index) => (
                        <div key={index} className="mb-2 group cursor-pointer">
                            <h3 className="font-semibold text-[14px] relative inline-block">
                                {item}
                                {/* Underline */}
                                <span className="absolute left-0 bottom-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
};

export default EnergyMega;