"use client";

import { useState } from "react";
import Image from "next/image";
import { CircleQuestionMark, Globe, CircleUser, MessageSquareMore } from "lucide-react";
import { PiSteeringWheelFill } from "react-icons/pi";
import MegaMenu from "./MegaMenu";
import Link from "next/link";

export const navLinks = [
	{ label: "Vehicles", key: "vehicles" },
	{ label: "Energy", key: "energy" },
	{ label: "Charging", key: "charging" },
	{ label: "Discover", key: "discover" },
	{ label: "Shop", key: "shop" },
];

export const navIcons = [
	{ label: "Help", icon: "question" },
	{ label: "Language", icon: "globe" },
	{ label: "Account", icon: "user" }
];

const iconMap = {
	question: CircleQuestionMark,
	globe: Globe,
	user: CircleUser
};

function Navbar() {
	const [activeMenu, setActiveMenu] = useState<string | null>(null)

	return (
		<>
			<nav className="top-navbar relative flex items-center justify-between px-10 h-16">

				<div className="logo">
					<Link href="/" className="inline-block">
						<Image src="/tesla-contents/images/Tesla.jpg" alt="Tesla" width={100} height={100} priority />
					</Link>
				</div>

				<ul className="flex">
					{navLinks.map((item) => (
						<li
							key={item.key}
							onMouseEnter={() => setActiveMenu(item.key)}
							onMouseLeave={() => setActiveMenu(null)}
							className="relative text-[15px] font-semibold cursor-pointer py-2 px-6 rounded-sm
						transition-colors duration-200 hover:backdrop-blur-2xl hover:bg-gray-100"
						>
							{item.label}

							<span
								className={`absolute left-0 -bottom-1 h-0.5
                        transition-all duration-300
                        ${activeMenu === item.key ? "w-full" : "w-0"}`}
							/>
						</li>
					))}
				</ul>

				<div className="flex">
					{navIcons.map((item) => {
						const IconComponent = iconMap[item.icon as keyof typeof iconMap]

						return (
							<IconComponent
								key={item.label}
								className="p-1.5 text-gray-800 rounded-sm hover:backdrop-blur-2xl hover:bg-gray-100 cursor-pointer"
								width={35}
								height={35}
							/>
						)
					})}
				</div>

				{activeMenu && (
					<div
						className="absolute top-10 left-0 w-full h-full bg-white-200 z-10 p-10"
						onMouseEnter={() => setActiveMenu(activeMenu)}
						onMouseLeave={() => setActiveMenu(null)}
					>
						<MegaMenu type={activeMenu} />
					</div>
				)}
			</nav>

			<div className="bottom-navbar fixed bottom-0 p-3 flex gap-2 bg-white w-full align-center justify-center">
				<div className="Question">
					<button className="bg-gray-100 flex gap-2 items-center p-1.5 px-5 border border-gray-400 rounded-sm cursor-pointer"><MessageSquareMore className="text-gray-800" size={20} /> Ask a Question</button>
				</div>
				<div className="Sch-Drive">
					<button className="bg-gray-100 flex gap-2 items-center p-1.5 px-5 border border-gray-400 rounded-sm cursor-pointer"><PiSteeringWheelFill className="text-blue-500" size={25} /> Schedule a Drive Today</button>
				</div>
			</div>
		</>
	);
};

export default Navbar;