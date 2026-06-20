import Image from "next/image";
import { GiElectric } from "react-icons/gi";
import { RiOutletFill } from "react-icons/ri";

function MapExplorer() {
    return (
        <section className="grid w-full">
            {/* MapExplorer */}
            <div className="cursor-grab overflow-hidden rounded-lg">
                <Image
                    src={'/tesla-contents/images/MapExplorer.png'}
                    alt="Map"
                    width={900}
                    height={900}
                    quality={75}
                    className="object-cover w-full h-auto rounded-lg"
                />
            </div>

            {/* Find Charger */}
            <div className="w-full flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 xl:gap-40 py-8 md:py-10">
                {/* Find Your Charge */}
                <div className="flex flex-col gap-4 sm:gap-5 flex-1">
                    <div className="grid gap-1 sm:gap-2">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Find Your Charge</h2>
                        <p className="text-base sm:text-lg md:text-[20px] text-[#393939]">
                            View the network of Tesla Supercharge and Destination Chargers available near you.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <button className="w-full sm:w-35 h-10 bg-black text-white rounded-md text-sm sm:text-[15px] font-semibold cursor-pointer hover:bg-gray-900 transition">
                            View Network
                        </button>

                        <button className="w-full sm:w-35 h-10 bg-gray-100 text-black rounded-md text-sm sm:text-[15px] font-semibold cursor-pointer hover:bg-gray-200 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Icons */}
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 lg:gap-12">
                    {/* SuperCharge */}
                    <div className="flex flex-col gap-2 leading-tight">
                        <div className="flex items-center gap-3">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">35,691</h2>
                            <GiElectric className="w-10 h-10 sm:w-12 sm:h-12 p-2 rounded-full bg-red-500 text-white shrink-0" />
                        </div>
                        <span className="text-base sm:text-[19px]">Superchargers</span>
                    </div>

                    {/* Destination Chargers */}
                    <div className="flex flex-col gap-2 leading-tight">
                        <div className="flex items-center gap-3">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">493</h2>
                            <RiOutletFill className="w-10 h-10 sm:w-12 sm:h-12 p-2 rounded-full bg-gray-400 text-white shrink-0" />
                        </div>
                        <span className="text-base sm:text-[19px]">Destination Chargers</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapExplorer;
