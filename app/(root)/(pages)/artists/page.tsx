"use client";
import { ArtistCard } from "@/app/shared/components/ArtistCard";
import { Artists } from "@/app/shared/components/Carousel";
import { ParallaxText } from "@/app/shared/animated/ParallaxText";
import { SendDemoSection } from "@/app/shared/sections/SendDemoSection";

export default function ArtistsPage() {
	return (
		<div className="wrapper pt-[15vh]">
			<ParallaxText count={8} baseVelocity={-2}>
				<p className="text-[10rem] leading-[1] capitalize">Our artists — </p>
			</ParallaxText>

			<div className="px-10 py-[15vh] grid grid-cols-3 gap-10">
				{Artists.map((item) => (
					<ArtistCard
						isActive={true}
						key={item.name}
						image={item.image}
						name={item.name}
						href={item.href}
					/>
				))}
			</div>

			<SendDemoSection />
		</div>
	);
}
