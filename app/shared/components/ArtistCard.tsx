import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ArtistCardProps {
	image: string;
	isActive: boolean;
	name: string;
	href: string;
}

export const ArtistCard: FC<ArtistCardProps> = ({
	href,
	image,
	name,
	isActive,
}) => {
	return (
		<>
			<div
				className="basis-1/3 relative h-fit aspect-[5/7] bg-neutral-400 bg-cover bg-center"
				style={{ backgroundImage: `url('${image}')` }}>
				<div
					className={`w-full h-full bg-black bg-opacity-20 absolute z-40 p-10 flex flex-col justify-between transition-all ${
						isActive === false ? "opacity-0" : "opacity-100"
					}`}>
					<div className="flex gap-5 *:transition-all">
						<Link
							href={href}
							className="size-14 rounded-full opacity-75 hover:opacity-100">
							<Image
								src="/icons/instagram.svg"
								width="20"
								height="20"
								alt=""
								className="w-full h-full"
							/>
						</Link>
						<Link
							href={href}
							className="size-14 rounded-full opacity-75 hover:opacity-100">
							<Image
								src="/icons/spotify.svg"
								width="20"
								height="20"
								alt=""
								className="w-full h-full"
							/>
						</Link>
						<Link
							href={href}
							className="size-14 rounded-full opacity-75 hover:opacity-100">
							<Image
								src="/icons/youtube.svg"
								width="20"
								height="20"
								alt=""
								className="w-full h-full"
							/>
						</Link>
					</div>
					<div className="flex justify-between items-center">
						<Link href={"artists" + href} className="text-6xl font-bold">
							{name}
						</Link>
						<Link href={href}>
							<Image
								src="/icons/arrow-45.svg"
								width="20"
								height="20"
								alt=""
								className="size-12"
							/>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
