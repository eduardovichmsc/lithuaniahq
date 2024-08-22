import Link from "next/link";

const PlayLists = [
	{
		image: "",
		title: "Soulful Serenade",
		href: "",
	},
	{
		image: "",
		title: "Rhytmic Reverie",
		href: "",
	},
	{
		image: "",
		title: "Melodic Moments",
		href: "",
	},
	{
		image: "",
		title: "Echoes of Euphoria",
		href: "",
	},
];

export const PlaylistList = () => {
	return (
		<div className="flex flex-col gap-5">
			{PlayLists.map((item, index) => (
				<>
					<div className="w-full h-px bg-neutral-700" />
					<div className="flex w-full items-center justify-between">
						<div className="flex w-1/2 items-center space-x-6">
							<div className="size-20 rounded-lg bg-neutral-400"></div>
							<p className="bg-opacity-75 text-2xl">{item.title}</p>
						</div>
						<Link href={item.href} className="w-fit shrink">
							Listen playlist
						</Link>
					</div>

					{index === PlayLists.length - 1 && (
						<div className="w-full h-px bg-neutral-700" />
					)}
				</>
			))}

			<Link href="/" className="">
				See more playlists
			</Link>
		</div>
	);
};
