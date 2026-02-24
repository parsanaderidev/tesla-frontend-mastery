"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	CircleQuestionMark,
	Globe,
	CircleUser,
} from "lucide-react";
import { PiSteeringWheelFill } from "react-icons/pi";
import { RiMessage2Fill } from "react-icons/ri";
import MegaMenuFactory from "./MegaMenu/MegaMenuFactory";

export const navLinks = [
	{ label: "Vehicles", key: "vehicles" },
	{ label: "Energy", key: "energy" },
	{ label: "Charging", key: "charging" },
	{ label: "Discover", key: "discover" },
	{ label: "Shop", key: "shop" },
];

export const navIcons = [
	{ label: "Help", icon: "question", key: "help" },
	{ label: "Language", icon: "globe", key: "language" },
	{ label: "Account", icon: "user", key: "account" },
];

const iconMap = {
	question: CircleQuestionMark,
	globe: Globe,
	user: CircleUser,
};

const menuHeights: Record<string, number> = {
	vehicles: 600,
	energy: 320,
	charging: 500,
	discover: 400,
	shop: 350,
	language: 600,
	help: 180,
	account: 180,
};

function Navbar() {
	const [visibleMenu, setVisibleMenu] = useState<string | null>(null);
	const [isAnimatingOut, setIsAnimatingOut] = useState(false);

	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const handleMouseEnter = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			closeMenu();
		}, 150);
	};

	const openMenu = (key: string) => {
		if (!visibleMenu) {
			setVisibleMenu(key);
			return;
		}

		if (key !== visibleMenu) {
			setIsAnimatingOut(true);

			setTimeout(() => {
				setVisibleMenu(key);
				setIsAnimatingOut(false);
			}, 250);
		}
	};

	const closeMenu = () => {
		setIsAnimatingOut(true);
		setTimeout(() => {
			setVisibleMenu(null);
			setIsAnimatingOut(false);
		}, 250);
	};

	return (
		<>
			<div className="fixed z-50 w-full bg-white">
				<nav
					className="relative flex items-center justify-between px-10 h-16"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{/* Logo */}
					<Link href="/">
						<Image
							src="/tesla-contents/images/Tesla.jpg"
							alt="Tesla"
							width={105}
							height={105}
							priority
						/>
					</Link>

					{/* Center Links */}
					<ul className="flex">
						{navLinks.map((item) => (
							<li
								key={item.key}
								onMouseEnter={() => openMenu(item.key)}
								className="text-[15px] font-semibold cursor-pointer py-2 px-6 rounded-sm hover:bg-gray-100"
							>
								{item.label}
							</li>
						))}
					</ul>

					{/* Icons */}
					<div className="flex gap-2">
						{navIcons.map((item) => {
							const IconComponent =
								iconMap[item.icon as keyof typeof iconMap];

							return (
								<button
									key={item.label}
									onClick={() =>
										visibleMenu === item.key
											? closeMenu()
											: openMenu(item.key)
									}
									className="p-1.5 rounded-sm hover:bg-gray-100"
								>
									<IconComponent size={23} />
								</button>
							);
						})}
					</div>

					{/* Mega Menu */}
					<div
						className="absolute top-full left-0 w-full overflow-hidden transition-[height] duration-500 ease-in-out"
						style={{
							height: visibleMenu
								? menuHeights[visibleMenu]
								: 0,
						}}
					>
						{visibleMenu && (
							<div
								className={`bg-white transform-gpu transition-all duration-300 ease-in-out
							${isAnimatingOut
										? "opacity-0 -translate-y-4"
										: "opacity-100 translate-y-0"
									}`}
							>
								<MegaMenuFactory type={visibleMenu} />
							</div>
						)}
					</div>
				</nav>

				{/* Bottom Bar */}
				<div className="fixed bottom-0 z-50 p-3 flex gap-2 bg-white w-full justify-center">
					<button className="bg-gray-100 flex gap-2 items-center p-1.5 px-5 border border-gray-400 rounded-sm cursor-pointer">
						<RiMessage2Fill size={20} />
						Ask a Question
					</button>

					<button className="bg-gray-100 flex gap-2 items-center p-1.5 px-5 border border-gray-400 rounded-sm cursor-pointer">
						<PiSteeringWheelFill size={25} className="text-blue-500" />
						Schedule a Drive Today
					</button>
				</div>
			</div>
		</>
	);
};

export default Navbar;