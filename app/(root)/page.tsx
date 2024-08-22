import Image from "next/image";
import Link from "next/link";

import { InfoCard } from "@/app/shared/components/InfoCard";
import { Carousel } from "@/app/shared/components/Carousel";
import { PlaylistList } from "@/app/shared/components/PlaylistList";
import { ParallaxText } from "../shared/animated/ParallaxText";
import { SendDemoSection } from "../shared/sections/SendDemoSection";

export default function Home() {
	return (
		<>
			<header className="container mx-auto h-screen relative">
				<div className="absolute w-full h-full z-20 opacity-90">
					<video autoPlay loop muted className="w-full h-full object-cover">
						<source src="/lhq-bgvideo.mp4" type="video/mp4" />
					</video>
				</div>
				<div className="w-full h-full relative">
					<div className="w-1/2 absolute z-30 left-0 top-[70%] pl-10">
						<p className="text-8xl font-bold relative -top-2">
							Home of global talented artists
						</p>
					</div>
					<div className="w-1/3 absolute z-30 top-[70%] right-0 flex flex-col gap-6 pr-10">
						<p className="text-neutral-500">[ About ]</p>
						<p className="text-3xl leading-snug">
							Lithuania HQ is more than a record label - it&apos;s a force for
							musicial innovation, diversity and creativity.
						</p>
					</div>
				</div>
			</header>

			<div className="space-y-40">
				<div className="container mx-auto h-screen relative p-10 space-y-5">
					<div className="w-full h-px bg-neutral-500" />
					<div className="space-y-24">
						<div className="flex">
							<div className="w-1/2">
								<p className="text-neutral-300">[ Body text ]</p>
							</div>
							<div className="w-1/2">
								<p className="text-[2.75rem] leading-[0.95] indent-72">
									<span>It&apos;s a place where</span>
									<span className="text-neutral-400"> artists </span>
									<span>can grow, where</span>
									<span className="text-neutral-400"> music lovers </span>
									<span>
										can discover new sounds, and where tradition and modernity
									</span>
									<span className="text-neutral-400">
										{" "}
										harmoniously coexist.
									</span>
								</p>
							</div>
						</div>

						<div className="grid grid-cols-4 grid-rows-1 gap-10">
							<InfoCard
								image="/cards/sm-nam.svg"
								isPadding
								imageClass="mt-[10%]"
								title="10B+"
								text="All-time streams"
							/>
							<InfoCard
								image="/cards/billboard-logo.svg"
								isPadding
								title="#1"
								imageClass="w-[75%]"
								text="Billboard Electronic"
							/>
							<InfoCard isPadding title="300M" text="Streaming Monthly" />
							<InfoCard
								image="/cards/artists.webp"
								title="52+"
								text="Talented Artists"
							/>
						</div>
					</div>
				</div>

				<div className="container mx-auto h-screen relative">
					<div className="">
						<Carousel />
					</div>
				</div>

				<div className="container mx-auto h-screen relative p-10">
					<div className="w-full h-full flex justify-between">
						<div className="w-1/4 flex flex-col gap-6 mt-4">
							<p className="text-3xl font-light text-neutral-400">
								Join us in celebrating the power of music, and the artists who
								bring it to life.
							</p>
							<Link href="/demo" className="font-medium relative text-2xl">
								<span>Send your demos</span>
								<span>
									<Image src="/icons/arrow-45.svg" fill alt="" />
								</span>
							</Link>
						</div>
						<div className="w-3/5 flex flex-col">
							<div className="flex justify-between">
								<p className="text-8xl font-semibold">
									<span>Our</span>
									<br />
									<span>Playlists</span>
								</p>
								<Link href="/" className="self-end">
									<Image
										src="/icons/spotify.svg"
										width="20"
										height="20"
										alt=""
										className="w-16"
									/>
								</Link>
							</div>

							<div className="my-14">
								<PlaylistList />
							</div>
						</div>
					</div>
				</div>

				<SendDemoSection />
			</div>
		</>
	);
}
