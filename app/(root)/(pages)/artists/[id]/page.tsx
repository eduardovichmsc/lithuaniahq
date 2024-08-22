"use client";
import { Artists } from "@/app/shared/components/Carousel";
import { SendDemoSection } from "@/app/shared/sections/SendDemoSection";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

export default function OneArtistPage() {
	const { id } = useParams();
	const data = Artists.find((item) => item.href.includes(String(id)));
	console.log(data);

	return (
		<div className="">
			<div className="w-full min-h-screen h-screen">
				<div
					className="relative w-full h-full bg-fixed bg-cover bg-[0%_15%] bg-no-repeat "
					style={{ backgroundImage: `url(/${data?.image})` }}>
					<div className="absolute w-full bottom-[5vh]">
						<div className="flex flex-col gap-10 px-10">
							<p className="font-bold text-8xl">{data?.name}</p>
							<div className="h-px bg-white"></div>
							<div className="flex justify-between">
								<p className="text-2xl">
									Join us in celebrating the power of music
									<br />
									and the artists who bring it to life.
								</p>
								<div className="flex gap-2">
									<Link href="/" className="">
										<Image
											src="/icons/spotify.svg"
											width={20}
											height={20}
											alt=""
											className="size-16"
										/>
									</Link>
									<Link href="/" className="">
										<Image
											src="/icons/instagram.svg"
											width={20}
											height={20}
											alt=""
											className="size-16"
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full h-screen py-[10vh] space-y-14">
				<p className="text-center font-bold text-6xl">Most popular songs</p>
				<div className="px-10">
					<Swiper slidesPerView={3} spaceBetween="50">
						{data?.popularSongs.map((item) => (
							<SwiperSlide key="" className="w-2/6 space-y-6">
								<div className="aspect-square bg-neutral-500"></div>
								<p className="font-semibold text-4xl">{item.title}</p>
								<p className="font-medium text-neutral-500 text-md">
									{data?.name}
								</p>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			<div className="h-screen flex gap-10 py-[10vh] my-[10vh] px-10">
				<div className="w-1/2 flex flex-col justify-between">
					<p className="font-semibold text-7xl">{data?.info?.main}</p>
					<div className="flex justify-end">
						<div className="text-neutral-400 w-[35%]">
							{data?.info?.additional}
						</div>
					</div>
				</div>
				<div className="w-1/2 h-full flex gap-3">
					<div
						className="w-1/2 h-full bg-cover bg-center"
						style={{ backgroundImage: `url(/${data?.image});` }}></div>
					<div className="w-1/2 flex flex-col gap-[inherit]">
						<div
							className="h-[50%] bg-cover bg-center"
							style={{ backgroundImage: `url(/${data?.image});` }}></div>
						<div
							className="h-[50%] bg-cover bg-center"
							style={{ backgroundImage: `url(/${data?.image});` }}></div>
					</div>
				</div>
			</div>

			<SendDemoSection />
		</div>
	);
}
