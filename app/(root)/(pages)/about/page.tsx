import { ParallaxSection } from "@/app/shared/animated/ParallaxSection";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
	return (
		<div className="wrapper space-y-20">
			<div className="w-full h-screen flex gap-10">
				<div
					className="basis-1/2 h-full bg-cover bg-center"
					style={{ backgroundImage: "url(/hero-bg.webp)" }}></div>
				<div className="basis-1/2 flex flex-col justify-center gap-10 pr-10">
					<p className="text-neutral-500">[ About ]</p>
					<p className="text-7xl font-bold leading-tight">
						Lithuania HQ:
						<br />
						Revolutionizing
						<br />
						electronic music
						<br />
						since 2012
					</p>
					<div className="w-full h-px bg-neutral-500"></div>
					<div className="flex justify-between text-neutral-500 text-lg">
						<p className="basis-[45%]">
							As proud pioneers of the dark, catchy, and edgy, we are credited
							with inventing and becoming the main trendsetters.
						</p>
						<p className="basis-[45%]">
							Today, Lithuania HQ has expanded globally, releasing tracks in
							diverse electronic styles with producers worldwide.
						</p>
					</div>

					<p className="text-neutral-500">[ Scroll to explore ]</p>
				</div>
			</div>

			<div className="px-10">
				<div className="h-px bg-neutral-500"></div>
			</div>

			<div className="h-screen px-10">
				<div className="h-[70%] flex gap-10">
					<div className="basis-1/2 flex flex-col justify-between">
						<p className="text-4xl indent-80">
							At Lithuania HQ, we believe in building strong and collaborative
							relationships with artists who share our vision for innovation and
							creativity
						</p>
						<Link href="/">Send your demo</Link>
					</div>
					<div className="basis-1/2 flex gap-5">
						<div className="basis-1/2 flex flex-col justify-end text-neutral-500 gap-5 text-lg text-left">
							<p>
								Our big story began in 2017 with therelease of &apos;In My
								Mind&apos; by Dynoro and Gigi D'Agostino, a track that reshaped
								the music industry. Achieving over 2.7 billion streams, it
								garnered Diamond status in Germany and France and topped global
								charts.
							</p>
							<p>
								Following the success of Dynoro, we signed other talented
								artists to the label, releasing tracks that later became
								worldwide hits, such as &apos;Moonlight&apos; by Gaullin,
								&apos;Goosebumps&apos; by HVME, and &apos;Cooler Than Me&apos;
								by Lucky Luke. In total, we have accumulated over 10 billion
								streams across all our releases, which is a great testament to
								the global appeal of our curated music.
							</p>
						</div>

						<div className="basis-1/2 relative">
							<Image src="/about.webp" fill className="object-cover" alt="" />
						</div>
					</div>
				</div>
			</div>

			<div className="h-[80vh] px-10 flex justify-center relative">
				{/* <div className="absolute">
					<div className="font-extrabold text-6xl leading-[0.55]">
						<p className="ml-32">
							Lithuania HQ is <span className="text-neutral-500">home</span>
						</p>
						<br />
						<p className="-ml-2">for audacious visionaries</p>
						<br />
						<p className="text-right -mr-14">where controversy</p>
						<br />
						<p className="text-neutral-500 ml-14">finds its place</p>
					</div>
				</div>
				<div className="">
					<Image
						src="/about-2.webp"
						width="500"
						height="661"
						alt=""
						className="object-contain"
					/>
				</div> */}

				<ParallaxSection image="/about-2.webp" />
			</div>
		</div>
	);
}
