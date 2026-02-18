import Image from "next/image";

import { CircleQuestionMark, Globe, CircleUser  } from 'lucide-react';

function Navbar() {
	return (
		<>
			<section className="navbar flex items-center justify-between px-10">
				<div className="logo">
					<Image src="/tesla-contents/images/Tesla.jpg" alt="Tesla" width={100} height={100} />
				</div>

				<div className="content">
					<ol className="ol-list flex gap-9">
						<li className="li-list text-[15px] font-bold">Vehicles</li>
						<li className="li-list text-[15px] font-bold">Energy</li>
						<li className="li-list text-[15px] font-bold">Charging</li>
						<li className="li-list text-[15px] font-bold">Discover</li>
						<li className="li-list text-[15px] font-bold">Shop</li>
					</ol>
				</div>

				<div className="icons flex gap-2.5">
					<CircleQuestionMark className="icon" />
					<Globe className="icon" />
					<CircleUser className="icon" />
				</div>
			</section>
		</>
	);
};

export default Navbar