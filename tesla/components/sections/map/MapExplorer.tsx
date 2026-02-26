import Image from "next/image";
import { GiElectric } from "react-icons/gi";
import { RiOutletFill } from "react-icons/ri";

function MapExplorer() {
    return (
        <section className="grid">
            {/* MapExplorer */}
            <div className="cursor-grab">
                <Image
                    src={'/tesla-contents/images/MapExplorer.png'}
                    alt="Map"
                    width={900}
                    height={900}
                    quality={75}
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>

            {/* Find Charger */}
            <div className="w-full flex gap-40 px-10 py-10">
                {/* Find Your Charge */}
                <div className="flex flex-col gap-5">
                    {/* Content */}
                    <div className="grid gap-1">
                        <h2 className="text-4xl font-semibold">Find Your Charge</h2>
                        <p className="text-[20px]">View the network of Tesla Supercharge and Destination Chargers available near you.</p>
                    </div>

                    {/* Button */}
                    <div className="flex gap-3">
                        <button className="w-35 h-10 bg-black text-white rounded-md text-[15px] font-semibold cursor-pointer">
                            View Network
                        </button>

                        <button className="w-35 h-10 bg-gray-100 text-black rounded-md text-[15px] font-semibold cursor-pointer">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Icons */}
                <div className="flex gap-10">
                    {/* SuperCharge */}
                    <div className="flex flex-col gap-2 leading-tight">
                        <div className="flex gap-2">
                            <h2 className="text-5xl font-semibold">35,691</h2>

                            <GiElectric className="w-12 h-12 p-2 rounded-full bg-red-500 text-white" />
                        </div>

                        <span className="text-[19px]">Superchargers</span>
                    </div>

                    {/* Destination Chargers */}
                    <div className="flex flex-col gap-2 leading-tight">
                        <div className="flex gap-2">
                            <h2 className="text-5xl font-semibold">493</h2>

                            <RiOutletFill className="w-12 h-12 p-2 rounded-full bg-gray-400 text-white" />
                        </div>

                        <span className="text-[19px]">Destination Chargers</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapExplorer;