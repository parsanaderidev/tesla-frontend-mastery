import Image from "next/image";

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
            <div className=""></div>
        </section>
    );
};

export default MapExplorer;