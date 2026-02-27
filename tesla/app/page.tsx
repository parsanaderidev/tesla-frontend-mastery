import Navbar from "@/components/layout/Navbar";
import CardSwiper from "@/components/sections/card/CardSwiper";
import ChargerSwiper from "@/components/sections/charger/ChargerSwiper";
import Feature from "@/components/sections/feature/Feature";
import HeroSwiper from "@/components/sections/hero/HeroSwiper";
import MapExplorer from "@/components/sections/map/MapExplorer";
import PromotionCard from "@/components/sections/promotion/PromotionCard";

function Home() {
	return (
		<>
			<header className="w-full">
				<Navbar />
			</header>

			<main className="w-full flex flex-col">
				{/* Hero Section */}
				<section className="w-full">
					<HeroSwiper />
				</section>

				{/* Card Section */}
				<section className="w-full py-5">
					<CardSwiper />
				</section>

				<section className="w-full py-5 px-4">
					<PromotionCard />
				</section>

				<section className="w-full py-5 px-4">
					<Feature />
				</section>

				<section className="w-full py-5 px-4">
					<MapExplorer />
				</section>

				<section className="w-full py-5">
					<ChargerSwiper />
				</section>
			</main>

			<footer className="w-full h-24 flex items-center justify-center">
				{/* Footer content */}
			</footer>
		</>
	);
};

export default Home;