// npm install framer-motion
"use client";
import { ParallaxText } from "@/shared/components/ui/parallaxtext";
import {
	motion,
	MotionStyle,
	MotionValue,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import Image from "next/image";
import { FC, ReactNode, useRef } from "react";

const variants: MotionStyle = {};

const useParallax = (value: MotionValue<number>, distance: number) => {
	return useTransform(value, [0, 1], [-distance, distance]);
};

interface ParallaxSectionProps {
	image: string;
}

export const ParallaxSection: FC<ParallaxSectionProps> = ({ image }) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const spring = useSpring(scrollYProgress, {
		damping: 50,
		mass: 0.7,
		stiffness: 100,
	});
	const y = useParallax(spring, 100);

	return (
		<section className="flex justify-center items-center relative">
			<Image
				src={image}
				ref={ref}
				width="500"
				height="661"
				alt=""
				className="object-contain"
			/>
			<div className="absolute">
				<motion.div
					style={{ y }}
					className="w-max font-extrabold text-6xl leading-[0.55]">
					<p className="ml-32">
						Lithuania HQ is <span className="text-neutral-500">home</span>
					</p>
					<br />
					<p className="-ml-2">for audacious visionaries</p>
					<br />
					<p className="text-right -mr-14">where controversy</p>
					<br />
					<p className="text-neutral-500 ml-14">finds its place</p>
				</motion.div>
			</div>
		</section>
	);
};
