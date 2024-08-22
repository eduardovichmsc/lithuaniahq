import { FC } from "react";

interface InfoCardProps {
	image?: string;
	imageClass?: string;
	isPadding?: boolean;
	text: string;
	title: string;
}

export const InfoCard: FC<InfoCardProps> = ({
	image,
	imageClass,
	isPadding,
	text,
	title,
}) => {
	return (
		<div
			className={`border-2 border-neutral-800 rounded-xl flex flex-col justify-between ${
				isPadding ? "p-8" : ""
			}`}>
			<div
				className={`w-full aspect-square bg-contain bg-no-repeat ${
					!isPadding && "rounded-xl"
				} ${imageClass}`}
				style={{ backgroundImage: `url(${image})` }}></div>
			<div className={`space-y-5 ${isPadding ? "pt-8" : "p-8"}`}>
				<p className="text-neutral-500 text-lg font-semibold">{text}</p>
				<p className="font-bold text-8xl">{title}</p>
			</div>
		</div>
	);
};
