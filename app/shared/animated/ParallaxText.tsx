"use client";
import { FC, ReactNode, useRef } from "react";
import { wrap } from "@motionone/utils";
import { motion } from "framer-motion";
import {
	useAnimationFrame,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
	useVelocity,
} from "framer-motion";

interface ParallaxTextProps {
	children: ReactNode;
	count?: number;
	baseVelocity?: number;
}

export const ParallaxText: FC<ParallaxTextProps> = ({
	children,
	count = 1,
	baseVelocity = 1,
}) => {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();

	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});

	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1], {
		clamp: false,
	});

	const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

	const directionFactor = useRef<number>(1);
	useAnimationFrame((t, delta) => {
		let moveby = directionFactor.current * baseVelocity * (delta / 1000);

		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveby += directionFactor.current * moveby * velocityFactor.get();
		baseX.set(baseX.get() + moveby);
	});

	return (
		<div className="overflow-hidden whitespace-nowrap flex flex-nowrap snap-mandatory snap-y">
			<motion.div
				className="font-[600] uppercase text-[64px] flex flex-nowrap"
				style={{ x }}>
				{[...Array(count)].map((_, i) => (
					<span key={i} className="mr-4">
						{children}
					</span>
				))}
			</motion.div>
		</div>
	);
};
