import Navbar from "@/components/layout/Navbar";
import CardSwiper from "@/components/sections/card/CardSwiper";
import HeroSwiper from "@/components/sections/hero/HeroSwiper";
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
			</main>

			<footer className="w-full h-24 flex items-center justify-center">
				{/* Footer content */}
			</footer>
		</>
	);
};

export default Home;