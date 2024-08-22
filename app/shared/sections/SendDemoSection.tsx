import Image from "next/image";
import { ParallaxText } from "../animated/ParallaxText";
import Link from "next/link";

export const SendDemoSection = () => {
	return (
		<div className="w-full h-screen overflow-hidden relative flex items-center">
			<div className="absolute w-[1500%] -left-[10vw] bottom-[60vh]">
				<ParallaxText baseVelocity={2} count={2}>
					<Image
						src="/lithuania-long.svg"
						width={12685}
						height={314}
						alt=""
						className="object-cover"
					/>
				</ParallaxText>
			</div>
			<div className="absolute bottom-0 w-full h-[75vh] backdrop-blur-md flex justify-center items-center">
				<div className="flex flex-col items-center">
					<p className="text-2xl font-light text-center">
						Send your demo and <br /> join our team
					</p>
					<Link
						href="/"
						className="bg-neutral-700 relative text-4xl font-light px-32 py-10 -bottom-10 rounded-[5rem] bg-[linear-gradient(92deg,#615fe3,#3695da)]">
						Fill-in the form
					</Link>
				</div>
			</div>
		</div>
	);
};
