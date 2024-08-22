"use client";
import { useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Links = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Weekly releases",
		href: "/weekly",
	},
	{
		label: "Playlists",
		href: "/playlists",
	},
	{
		label: "Artists",
		href: "/artists",
	},
	{
		label: "Booking",
		href: "/booking",
	},
	{
		label: "Events",
		href: "/events",
	},
	{
		label: "About",
		href: "/about",
	},
	{
		label: "Demo drop",
		href: "/demo",
	},
];

export const Navbar = () => {
	const whenToActive = 0.13;
	const [hoveredLink, setHoveredLink] = useState("");

	const { scrollYProgress } = useScroll();
	const [scrollProgress, setScrollProgress] = useState(scrollYProgress.get());

	console.log(scrollProgress);

	useEffect(() => {
		const unsubscribe = scrollYProgress.on("change", (latest) => {
			setScrollProgress(latest);
		});
		return () => unsubscribe();
	}, [scrollYProgress]);

	return (
		<nav className="fixed w-[100vw] z-50">
			<div
				className={`container flex items-center bg-transparent px-10 py-6 transition-all duration-300 ${
					scrollProgress < whenToActive
						? ""
						: "bg-black bg-opacity-50 backdrop-blur-[2px]"
				}`}>
				<div className="basis-1/2">
					<Image
						src="/lhq-logo.svg"
						width="241"
						height="72"
						className="w-[7rem]"
						alt=""
					/>
				</div>
				<div className="basis-1/2 flex text-lg justify-between">
					{Links.map((link, index) => (
						<>
							<Link
								key={index}
								href={link.href}
								className={`whitespace-nowrap transition-all duration-300 ease-in-out ${
									hoveredLink && hoveredLink !== link.href
										? "text-neutral-500"
										: "text-white"
								}`}
								onMouseEnter={() => setHoveredLink(link.href)}
								onMouseLeave={() => setHoveredLink("")}>
								{link.label}
							</Link>
							{index !== Links.length - 1 && (
								<p className="text-neutral-500 cursor-default">/</p>
							)}
						</>
					))}
				</div>
			</div>
		</nav>
	);
};
