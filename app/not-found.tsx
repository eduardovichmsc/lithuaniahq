import { Navbar } from "@/app/shared/components/Navbar";
import { Footer } from "@/app/shared/components/Footer";
import { ParallaxText } from "./shared/animated/ParallaxText";
import Link from "next/link";

export default function NotFound() {
	return (
		<main className="relative w-full min-h-screen bg-black text-white overflow-x-hidden flex items-center">
			<div className="absolute w-full h-full flex flex-col justify-between py-[2.5vh]">
				<ParallaxText count={20}>
					<p className="text-[15rem] leading-none text-neutral-500">404 — </p>
				</ParallaxText>
				<ParallaxText count={20}>
					<p className="text-[15rem] leading-none text-neutral-500">404 — </p>
				</ParallaxText>
			</div>
			<div className="relative w-full text-center backdrop-grayscale-0 backdrop-blur-lg flex flex-col items-center justify-center h-[75vh]">
				<div className="max-w-[400px]">
					<p className="uppercase text-2xl">Oops! Page Not Found</p>
					<p className="text-2xl">
						Sorry, the page you&apos;re looking for doesn&apos;t exist.
					</p>
					<div className="pt-10">
						<Link
							href="/"
							className="rounded-3xl bg-white text-black font-light text-lg px-10 py-4">
							Back to home
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
