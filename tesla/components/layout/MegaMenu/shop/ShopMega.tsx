import Image from 'next/image';

export const chargingData = [
    {
        title: "Charging",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Charging-Home-Charging.jpg",
    },
    {
        title: "Vehicle Accessories",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Shop-Vehicle-Accessories.jpg",
    },
    {
        title: "Apparel",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Shop-Apparel.jpg",
    },
    {
        title: "Lifestyle",
        image: "/tesla-contents/images/MegaMenu/Mega-Menu-Shop-Lifestyle.jpg",
    },
];

function ShopMega() {
    return (
        <>
            {/* Vehicles */}
            <section className="py-5 px-25 flex mx-auto justify-center">
                {/* Cars */}
                <div className="grid pr-6 gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-min cursor-pointer">
                    {chargingData.map((item) => (
                        <div key={item.title} className="flex flex-col items-center text-center">
                            <Image src={item.image} alt={item.title} width={250} height={250} />
                            <h3 className="font-semibold mt-2">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
};

export default ShopMega;