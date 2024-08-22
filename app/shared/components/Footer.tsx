import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="bg-neutral-950 h-fit flex text-white px-10 py-20">
			<div className="w-2/4">
				<Image
					src="/lhq-logo.svg"
					width="241"
					height="72"
					alt=""
					className="w-[50%]"
				/>
			</div>
			<div className="w-1/4 font-light gap-5 flex flex-col">
				<p className="text-2xl">Navigation</p>
				<Link href="/" className="text-xl text-neutral-400">
					Home
				</Link>
				<Link href="/" className="text-xl text-neutral-400">
					Weekly releases
				</Link>
				<Link href="/" className="text-xl text-neutral-400">
					Playlists
				</Link>
			</div>
			<div className="w-1/4 font-light gap-5 flex flex-col">
				<p className="text-2xl">Social Media</p>
				<Link href="/" className="text-xl text-neutral-400">
					Spotify
				</Link>
				<Link href="/" className="text-xl text-neutral-400">
					Instagram
				</Link>
				<Link href="/" className="text-xl text-neutral-400">
					Youtube
				</Link>
			</div>
		</footer>
	);
};
