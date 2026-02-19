"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	CircleQuestionMark,
	Globe,
	CircleUser,
	MessageSquareMore,
} from "lucide-react";
import { PiSteeringWheelFill } from "react-icons/pi";
import MegaMenuFactory from "./MegaMenu/MegaMenuFactory";

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
		{ label: "Account", icon: "user" },
	];

	const iconMap = {
		question: CircleQuestionMark,
		globe: Globe,
		user: CircleUser,
	};

	function Navbar() {
		const [activeMenu, setActiveMenu] = useState<string | null>(null);
		const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

		const handleMouseEnter = () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};

		const handleMouseLeave = () => {
			timeoutRef.current = setTimeout(() => {
				setActiveMenu(null);
			}, 120);
		};

		return (
			<>
				<nav
					className="relative flex items-center justify-between px-10 h-16"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{/* Logo */}
					<div>
						<Link href="/" className="inline-block">
							<Image
								src="/tesla-contents/images/Tesla.jpg"
								alt="Tesla"
								width={115}
								height={115}
								priority
							/>
						</Link>
					</div>

					{/* Center Nav Links */}
					<ul className="flex relative">
						{navLinks.map((item) => (
							<li
								key={item.key}
								onMouseEnter={() => setActiveMenu(item.key)}
								className="relative text-[15px] font-semibold cursor-pointer py-2 px-6 rounded-sm
								transition-colors duration-200 hover:bg-gray-100"
							>
								{item.label}
							</li>
						))}
					</ul>

					{/* Right Icons */}
					<div className="flex">
						{navIcons.map((item) => {
							const IconComponent =
								iconMap[item.icon as keyof typeof iconMap];

							return (
								<IconComponent
									key={item.label}
									className="p-1.5 text-gray-800 rounded-sm hover:bg-gray-100 cursor-pointer"
									size={35}
								/>
							);
						})}
					</div>

					{/* Mega Menu */}
					<div
						className={`absolute top-full left-0 w-full bg-white z-50 p-10
							transition-all duration-300
							ease-[cubic-bezier(0.22,1,0.36,1)]
							${activeMenu
								? "opacity-100 translate-y-0 pointer-events-auto"
								: "opacity-0 -translate-y-3 pointer-events-none"
							}`}
					>
						{activeMenu && <MegaMenuFactory type={activeMenu} />}
					</div>
				</nav>

				{/* Bottom Navbar */}
				<div className="fixed bottom-0 p-3 flex gap-2 bg-white w-full justify-center">
					<button className="bg-gray-100 flex gap-2 items-center p-1.5 px-5 border border-gray-400 rounded-sm cursor-pointer">
						<MessageSquareMore size={20} />
						Ask a Question
					</button>

					<button className="bg-gray-100 flex gap-2 items-center p-1.5 px-5 border border-gray-400 rounded-sm cursor-pointer">
						<PiSteeringWheelFill size={25} className="text-blue-500" />
						Schedule a Drive Today
					</button>
				</div>
			</>
		);
	}

	export default Navbar;