"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	CircleQuestionMark,
	Globe,
	CircleUser,
	Menu,
	X,
	ChevronDown,
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
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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

	const toggleMobileMenu = () => {
		setMobileMenuOpen((prev) => !prev);
		setMobileExpanded(null);
		if (mobileMenuOpen) closeMenu();
	};

	const toggleMobileSection = (key: string) => {
		setMobileExpanded((prev) => (prev === key ? null : key));
	};

	return (
		<>
			<div className="fixed z-50 w-full bg-white">
				<nav
					className="relative flex items-center justify-between px-4 sm:px-6 lg:px-10 h-16"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{/* Mobile menu button */}
					<button
						type="button"
						onClick={toggleMobileMenu}
						className="lg:hidden p-2 -ml-2 rounded-sm hover:bg-gray-100"
						aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
					>
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>

					{/* Logo */}
					<Link href="/" className="lg:static absolute left-1/2 -translate-x-1/2 lg:translate-x-0">
						<Image
							src="/tesla-contents/images/Tesla.jpg"
							alt="Tesla"
							width={105}
							height={105}
							priority
							className="w-[72px] sm:w-[88px] lg:w-[105px] h-auto"
						/>
					</Link>

					{/* Center Links — desktop only */}
					<ul className="hidden lg:flex">
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
					<div className="flex gap-1 sm:gap-2">
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
									aria-label={item.label}
								>
									<IconComponent size={22} className="sm:w-[23px] sm:h-[23px]" />
								</button>
							);
						})}
					</div>

					{/* Mega Menu — desktop hover (nav links only) */}
					<div
						className="absolute top-full left-0 w-full overflow-hidden transition-[height] duration-500 ease-in-out hidden lg:block"
						style={{
							height:
								visibleMenu && navLinks.some((l) => l.key === visibleMenu)
									? menuHeights[visibleMenu]
									: 0,
						}}
					>
						{visibleMenu && navLinks.some((l) => l.key === visibleMenu) && (
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

					{/* Language / icon mega menus — desktop dropdown */}
					{visibleMenu && ["language", "help", "account"].includes(visibleMenu) && (
						<div
							className="absolute top-full left-0 w-full overflow-hidden transition-[height] duration-500 ease-in-out hidden lg:block"
							style={{ height: menuHeights[visibleMenu] }}
						>
							<div className="bg-white">
								<MegaMenuFactory type={visibleMenu} />
							</div>
						</div>
					)}
				</nav>

				{/* Mobile menu panel */}
				{mobileMenuOpen && (
					<div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white overflow-y-auto pb-32">
						<ul className="divide-y divide-gray-100">
							{navLinks.map((item) => (
								<li key={item.key}>
									<button
										type="button"
										onClick={() => toggleMobileSection(item.key)}
										className="w-full flex items-center justify-between px-5 py-4 text-[15px] font-semibold hover:bg-gray-50"
									>
										{item.label}
										<ChevronDown
											size={18}
											className={`text-gray-400 transition-transform duration-200 ${mobileExpanded === item.key ? "rotate-180" : ""}`}
										/>
									</button>
									{mobileExpanded === item.key && (
										<div className="px-2 pb-4 bg-gray-50/50 border-t border-gray-100">
											<MegaMenuFactory type={item.key} />
										</div>
									)}
								</li>
							))}
						</ul>
					</div>
				)}

				{/* Language / icon mega menus — mobile overlay */}
				{visibleMenu && ["language", "help", "account"].includes(visibleMenu) && (
					<div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white overflow-y-auto pb-32">
						<div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
							<span className="font-semibold capitalize">{visibleMenu}</span>
							<button
								type="button"
								onClick={closeMenu}
								className="p-2 rounded-sm hover:bg-gray-100"
								aria-label="Close"
							>
								<X size={20} />
							</button>
						</div>
						<MegaMenuFactory type={visibleMenu} />
					</div>
				)}

				{/* Bottom Bar */}
				<div className="fixed bottom-0 z-50 p-2 sm:p-3 flex flex-col sm:flex-row gap-2 bg-white w-full justify-center items-stretch sm:items-center border-t border-gray-100">
					<button className="bg-gray-100 flex gap-2 items-center justify-center p-2 sm:p-1.5 px-4 sm:px-5 lg:pr-40 border border-gray-400 rounded-sm cursor-pointer text-sm sm:text-base w-full sm:w-auto">
						<RiMessage2Fill size={18} className="shrink-0" />
						<span className="whitespace-nowrap">Ask a Question</span>
						<span className="hidden lg:inline text-gray-500">&quot;What&apos;s Dog Mode?&quot;</span>
					</button>

					<button className="bg-gray-100 flex gap-2 items-center justify-center p-2 sm:p-1.5 px-4 sm:px-5 border border-gray-400 rounded-sm cursor-pointer text-sm sm:text-base w-full sm:w-auto whitespace-nowrap">
						<PiSteeringWheelFill size={22} className="text-blue-500 shrink-0" />
						Schedule a Drive Today
					</button>
				</div>
			</div>
		</>
	);
};

export default Navbar;
