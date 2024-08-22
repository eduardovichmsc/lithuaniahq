"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArtistCard } from "./ArtistCard";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";

interface IArtistInfo {
	main: string;
	additional: string;
}
interface IPopularSongs {
	image: string;
	title: string;
	href: string;
}

interface IArtist {
	name: string;
	image: string;
	href: string;
	popularSongs: IPopularSongs[];
	info: IArtistInfo;
}

export const Artists: IArtist[] = [
	{
		name: "Lucky Luke",
		image: "artists/lucky-luke.jpg",
		href: "/lucky-luke",
		popularSongs: [
			{
				image: "",
				title: "Hands Up",
				href: "",
			},
			{
				image: "",
				title: "In For The Kill",
				href: "",
			},
			{
				image: "",
				title: "Give it to me",
				href: "",
			},
			{
				image: "",
				title: "F.E.E.L.",
				href: "",
			},
			{
				image: "",
				title: "LYD (Like You Do)",
				href: "",
			},
		],
		info: {
			main: "4X PLATINUM AND 9X GOLD CERTIFIED IN 12 COUNTRIES",
			additional:
				"His biggest hit yet, Cooler Than Me, has clocked 270 million streams on Spotify and has been signed by Sony B1 Germany. It earned the support of established names in the music industry such as KSHMR, Dimitri Vegas & Like Mike, David Guetta, Twocolors, Alok, Tiesto, Timmy Trumpet and Joel Corry among others. Lucky Luke continued his success with tracks like 'Wonderwall, 'F.E.E.L.', 'Drüg' and ‘Give it to Me’. These were well-received by fans globally, further increasing his fame clocking over 150 000 000 streams on Spotify only.",
		},
	},
	{
		name: "HVME",
		image: "artists/hvme.jpg",
		href: "/hvme",
		popularSongs: [],
		info: {
			main: "",
			additional: "",
		},
	},
	{
		name: "Dynoro",
		image: "artists/dynoro.jfif",
		href: "/dynoro",
		popularSongs: [
			{ image: "", title: "In My Mind", href: "" },
			{ image: "", title: "Me Provocas", href: "" },
			{ image: "", title: "Rockstar", href: "" },
			{ image: "", title: "Obsessed", href: "" },
			{ image: "", title: "Elektro", href: "" },
		],
		info: {
			main: "DIAMOND AND MULTI-PLATINUM certified Lithuanian DJ",
			additional:
				"His biggest hit 'In My Mind with Gigi D'Agostino gained over 2.700.000.000 streams and sold more than 3.7 million copies worldwide. It reached #1 on Spotify, Apple Music and Shazam Global. The track also hit Shazam #1 staying on top of the charts in many different countries for weeks. 'In My Mind’ got diamond status in Germany and France as well as platinum and double platinum in a dozen other countries. During his career Dynoro has played at many major music festivals and clubs including Tomorrowland, Airbeat One Festival, Lollapalooza & many others. He has collaborated with some of the biggest names in the music industry, including Gigi D'Agostino, Alok, 24kGoldn, Fumaratto, Outwork and Sencan.",
		},
	},
	{
		name: "Gaullin",
		image: "artists/gaullin.jpg",
		href: "/gaullin",
		popularSongs: [],
		info: {
			main: "",
			additional: "",
		},
	},
	{
		name: "Dan Port",
		image: "artists/dan-port.jfif",
		href: "/dan-port",
		popularSongs: [],
		info: {
			main: "",
			additional: "",
		},
	},
	{
		name: "Dwin",
		image: "artists/dwin.jfif",
		href: "/dwin",
		popularSongs: [],
		info: { main: "", additional: "" },
	},
	{
		name: "Brohm",
		image: "artists/brohm.jpg",
		href: "/brohm",
		popularSongs: [],
		info: {
			main: "",
			additional: "",
		},
	},
	{
		name: "Ilkan Gunuc",
		image: "artists/ilkan-gunuc.jpeg",
		href: "/ilkan-gunuc",
		popularSongs: [],
		info: {
			main: "",
			additional: "",
		},
	},
	{
		name: "Xd",
		image: "artists/xd.jpg",
		href: "/xd",
		popularSongs: [],
		info: { main: "", additional: "" },
	},
	{
		name: "Siadou",
		image: "artists/siadou.jpg",
		href: "/siadou",
		popularSongs: [],
		info: {
			main: "",
			additional: "",
		},
	},
	{
		name: "Otnicka",
		image: "artists/otnicka.jfif",
		href: "/otnicka",
		popularSongs: [],
		info: {
			main: "",
			additional: "",
		},
	},
	{
		name: "Not So Bad",
		image: "artists/notsobad.jpg",
		href: "/notsobad",
		popularSongs: [],
		info: {
			main: "",
			additional: "",
		},
	},
	{
		name: "Kastuvas",
		image: "artists/kastuvas.jpg",
		href: "/kastuvas",
		popularSongs: [],
		info: {
			main: "",
			additional: "",
		},
	},
	{
		name: "Fella",
		image: "artists/fella.jfif",
		href: "/fella",
		popularSongs: [],
		info: {
			main: "",
			additional: "",
		},
	},
	{
		name: "Ed Marquis",
		image: "artists/ed-marquis.jpg",
		href: "/ed-marquis",
		popularSongs: [],
		info: {
			main: "",
			additional: "",
		},
	},
	{
		name: "Kertscher",
		image: "artists/kertscher.jpg",
		href: "/ketscher",
		popularSongs: [],
		info: {
			main: "",
			additional: "",
		},
	},
	{
		name: "Trfn",
		image: "artists/trfn.jpg",
		href: "/trfn",
		popularSongs: [],
		info: { main: "", additional: "" },
	},
	{
		name: "Scott Rill",
		image: "artists/scott-rill.jpg",
		href: "/scott-rill",
		popularSongs: [],
		info: {
			main: "",
			additional: "",
		},
	},
	{
		name: "Aivarask",
		image: "artists/aivarask.jpeg",
		href: "/aivarask",
		popularSongs: [],
		info: {
			main: "",
			additional: "",
		},
	},
	{
		name: "Marcus Cardello",
		image: "artists/marcus-cardello.jpg",
		href: "/marcus-cardello",
		popularSongs: [],
		info: {
			main: "",
			additional: "",
		},
	},
	{
		name: "Danell Arma",
		image: "artists/danell-arma.jpeg",
		href: "/danell-arma",
		popularSongs: [],
		info: {
			main: "",
			additional: "",
		},
	},
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
