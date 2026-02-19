import Image from 'next/image';

export const vehiclesData = [
    {
        title: "Model S",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Vehicles-Model-S.jpg",
        Learn: 'Learn',
        Order: 'Order'
    },
    {
        title: "Model 3",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Vehicles-Model-3-Performance-LHD.jpg",
        Learn: 'Learn',
        Order: 'Order'
    },
    {
        title: "Model Y",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Vehicles-Model-Y-2.jpg",
        Learn: 'Learn',
        Order: 'Order'
    },
    {
        title: "Model X",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Vehicles-Model-X.jpg",
        Learn: 'Learn',
        Order: 'Order'
    },
    {
        title: "Cybertruck",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Vehicles-Cybertruck.jpg",
        Learn: 'Learn',
        Order: 'Order'
    },
    {
        title: "Inventory",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Vehicles-Inventory.jpg",
        Learn: 'New',
        Order: 'Pre-Owned'
    },
];

export const vehiclesContent = {
    items: [
        'Full self-Driving (Supervised)',
        'Current Offers',
        'Demo Drive',
        'Trade-in',
        'Vehicle Safety Report',
        'Pre-Owned',
        'Trip Planner',
        'Feature',
        'Help Me Choose',
        'Compare',
        'Safety',
        'Fleet',
        'Semi',
        'Roadster',
        'Robotaxi'
    ]
};

function VehiclesMega() {
    return (
        <>
            {/* Vehicles */}
            <section className="py-5 px-25 grid grid-cols-[3fr_1px_1fr] gap-x-5">
                {/* Cars */}
                <div className="grid pr-6 gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-min cursor-pointer">
                    {vehiclesData.map((item) => (
                        <div key={item.title} className="flex flex-col items-center">
                            <Image src={item.image} alt={item.title} width={200} height={200} />
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
                <div className="w-full pt-5 px-5">
                    {vehiclesContent.items.map((item, index) => (
                        <div key={index} className="mb-2 group cursor-pointer">
                            <h4 className="font-semibold text-[14px] relative inline-block">
                                {item}
                                {/* Underline */}
                                <span className="absolute left-0 bottom-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                            </h4>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
};

export default VehiclesMega;