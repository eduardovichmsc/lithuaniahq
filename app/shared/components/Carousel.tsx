"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArtistCard } from "./ArtistCard";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";

export const Artists = [
	{ name: "Lucky Luke", image: "artists/lucky-luke.jpg", href: "/" },
	{ name: "HVME", image: "artists/hvme.jpg", href: "/" },
	{ name: "Dynoro", image: "artists/dynoro.jfif", href: "/" },
	{ name: "Gaullin", image: "artists/gaullin.jpg", href: "/" },
	{ name: "Dan Port", image: "artists/dan-port.jfif", href: "/" },
	{ name: "Dwin", image: "artists/dwin.jfif", href: "/" },
	{ name: "Brohm", image: "artists/brohm.jpg", href: "/" },
	{ name: "Ilkan Gunuc", image: "artists/ilkan-gunuc.jpeg", href: "/" },
	{ name: "Xd", image: "artists/xd.jpg", href: "/" },
	{ name: "Siadou", image: "artists/siadou.jpg", href: "/" },
	{ name: "Otnicka", image: "artists/otnicka.jfif", href: "/" },
	{ name: "Not So Bad", image: "artists/notsobad.jpg", href: "/" },
	{ name: "Kastuvas", image: "artists/kastuvas.jpg", href: "/" },
	{ name: "Fella", image: "artists/fella.jfif", href: "/" },
	{ name: "Ed Marquis", image: "artists/ed-marquis.jpg", href: "/" },
	{ name: "Kertscher", image: "artists/kertscher.jpg", href: "/" },
	{ name: "Trfn", image: "artists/trfn.jpg", href: "/" },
	{ name: "Scott Rill", image: "artists/scott-rill.jpg", href: "/" },
	{ name: "Aivarask", image: "artists/aivarask.jpeg", href: "/" },
	{ name: "Marcus Cardello", image: "artists/marcus-cardello.jpg", href: "/" },
	{ name: "Danell Arma", image: "artists/danell-arma.jpeg", href: "/" },
];

export const Carousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSlideChange = (swiper: SwiperType) => {
		setActiveIndex(swiper.realIndex);
	};

	return (
		<>
			<Swiper
				slidesPerView={3}
				pagination={{
					clickable: true,
				}}
				autoplay={{ delay: 2000, disableOnInteraction: false }}
				loop
				modules={[Navigation]}
				navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
				className="w-full h-full flex"
				onSlideChange={handleSlideChange}>
				<SwiperSlide>
					<ArtistCard
						name="Lucky Luke"
						image="artists/lucky-luke.jpg"
						href="/"
						isActive={activeIndex === 0}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<ArtistCard
						name="HVME"
						image="artists/hvme.jpg"
						href="/"
						isActive={activeIndex === 1}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<ArtistCard
						name="Dynoro"
						image="artists/dynoro.jfif"
						href="/"
						isActive={activeIndex === 2}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<ArtistCard
						name="Gaullin"
						image="artists/gaullin.jpg"
						href="/"
						isActive={activeIndex === 3}
					/>
				</SwiperSlide>
			</Swiper>
			<div className="">
				<div className="absolute -bottom-5 right-10 w-full flex justify-end space-x-4 mt-4">
					<button className="custom-prev border rotate-180 rounded-full size-14 flex justify-center items-center hover:bg-neutral-800 transition">
						<Image
							src="/icons/left.svg"
							width="20"
							height="20"
							className="w-[75%] stroke-black"
							alt=""
						/>
					</button>
					<button className="custom-next border rounded-full size-14 flex justify-center hover:bg-neutral-800 transition items-center">
						<Image
							src="/icons/right.svg"
							width="20"
							height="20"
							className="w-[75%]"
							alt=""
						/>
					</button>
				</div>
			</div>
		</>
	);
};
