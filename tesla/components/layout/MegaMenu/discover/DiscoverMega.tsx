export const discoverContent = {
    Resources: {
        items: [
            'Demo Drive',
            'Insurance',
            'Current Offers',
            'Learn',
            'Video Guides',
            'Customer Stories',
            'Event',
            'Safety',
        ]
    },
    LocationServices: {
        items: [
            'Find Us',
            'Find a Collision Center',
            'Find a Certified Installer',
        ]
    },
    Company: {
        items: [
            'About',
            'Careers',
            'Investor Relations',
        ]
    },
};

function DiscoverMega() {
    return (
        <>
            <section className="py-5 px-75 grid grid-cols-3 gap-x-10 justify-center">
                {/* Resources */}
                <div className="w-full py-5 px-10">
                    <h2 className="font-semibold text-[14px] relative inline-block text-gray-400 mb-4">
                        Resources
                    </h2>

                    <div className="w-full">
                        {discoverContent.Resources.items.map((item, index) => (
                            <div key={index} className="mb-2 group cursor-pointer">
                                <h3 className="font-semibold text-[14px] relative inline-block">
                                    {item}
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Location Services */}
                <div className="w-full py-5 px-10">
                    <h2 className="font-semibold text-[14px] relative inline-block text-gray-400 mb-4">
                        Location Service
                    </h2>

                    <div className="w-full">
                        {discoverContent.LocationServices.items.map((item, index) => (
                            <div key={index} className="mb-2 group cursor-pointer">
                                <h3 className="font-semibold text-[14px] relative inline-block">
                                    {item}
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Company */}
                <div className="w-full py-5 px-10">
                    <h2 className="font-semibold text-[14px] relative inline-block text-gray-400 mb-4">
                        Company
                    </h2>

                    <div className="w-full">
                        {discoverContent.Company.items.map((item, index) => (
                            <div key={index} className="mb-2 group cursor-pointer">
                                <h3 className="font-semibold text-[14px] relative inline-block">
                                    {item}
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default DiscoverMega;