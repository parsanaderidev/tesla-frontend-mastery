import Navbar from "@/components/layout/Navbar";
import SwiperHero from "@/components/sections/hero/HeroSwiper";

export default function Home() {
	return (
		<>
			<header className="header">
				<div className="navbar">
					<Navbar />
				</div>
			</header>

			<main className="main">
				<SwiperHero />
			</main>

			<footer className="footer"></footer>
		</>
	);
};
