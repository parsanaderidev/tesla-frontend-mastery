import Navbar from "@/components/layout/Navbar";
import CardSwiper from "@/components/sections/card/CardSwiper";
import ChargerSwiper from "@/components/sections/charger/ChargerSwiper";
import Feature from "@/components/sections/feature/Feature";
import HeroSwiper from "@/components/sections/hero/HeroSwiper";
import MapExplorer from "@/components/sections/map/MapExplorer";
import PromotionCard from "@/components/sections/promotion/PromotionCard";
import Footer from "@/components/layout/Footer";

function Home() {
	return (
		<>
			<header className="w-full">
				<Navbar />
			</header>

			<main className="w-full flex flex-col pt-16 pb-28 sm:pb-24">
				{/* Hero Section */}
				<section className="w-full">
					<HeroSwiper />
				</section>

				{/* Card Section */}
				<section className="w-full py-5">
					<CardSwiper />
				</section>

				<section className="w-full py-4 sm:py-5 px-4 sm:px-6 lg:px-10">
					<PromotionCard />
				</section>

				<section className="w-full py-4 sm:py-5 px-4 sm:px-6 lg:px-10">
					<Feature />
				</section>

				<section className="w-full py-4 sm:py-5 px-4 sm:px-6 lg:px-10">
					<MapExplorer />
				</section>

				<section className="w-full py-4 sm:py-5">
					<ChargerSwiper />
				</section>
			</main>

			<Footer />
		</>
	);
};

export default Home;