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
    ]
};

function EnergyMega() {
    return (
        <>
            {/* Vehicles */}
            <section className="py-5 px-25 grid grid-cols-[3fr_1px_1fr] gap-x-5">
                {/* Cars */}
                <div className="grid pr-6 gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-min cursor-pointer">
                    {energyData.map((item) => (
                        <div key={item.title} className="flex flex-col items-center">
                            <Image src={item.image} alt={item.title} width={250} height={250} />
                            <h3 className="font-semibold mt-2">{item.title}</h3>
                            <div className='flex gap-5 mt-2'>
                                <h4 className='underline'>{item.Learn}</h4>
                                <h4 className='underline'>{item.Order}</h4>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Line */}
                <div className="bg-gray-400 w-px"></div>

                {/* Content */}
                <div className="w-full py-5 px-10">
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