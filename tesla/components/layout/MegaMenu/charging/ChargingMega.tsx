import Image from 'next/image';

export const chargingData = [
    {
        title: "Charging",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Charging-Charging.jpg",
        Learn: 'Learn',
        Order: 'Order'
    },
    {
        title: "Home Charging",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Charging-Home-Charging.jpg",
        Learn: 'Learn',
        Order: 'Order'
    },
    {
        title: "Supercharging",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Charging-Supercharging-NA.jpg",
        Learn: 'Learn',
        Order: 'Order'
    },
    {
        title: "Wall Connector for Business",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Charging-Charging-for-Business.jpg",
        Learn: 'Learn',
        Order: 'Order'
    },
    {
        title: "Supercharge for Business",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Charging-Supercharger-For-Business.jpg",
        Learn: 'Learn',
        Order: 'Order'
    },
];

export const chargingContent = {
    items: [
        'Help Me Charge',
        'Charging Calculator',
        'Charging with NACS',
        'Supercharger Voting',
        'Host a Supercharger',
    ],
};

function ChargingMega() {
    return (
        <>
            {/* Vehicles */}
            <section className="py-6 md:py-10 px-4 sm:px-8 lg:px-25 grid grid-cols-1 lg:grid-cols-[3fr_1px_1fr] gap-y-6 gap-x-5">
                {/* Cars */}
                <div className="grid pr-0 lg:pr-6 gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-min cursor-pointer">
                    {chargingData.map((item) => (
                        <div key={item.title} className="flex flex-col items-center text-center">
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
                    {chargingContent.items.map((item, index) => (
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

export default ChargingMega;