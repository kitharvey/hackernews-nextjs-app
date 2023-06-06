import Link from "next/link";
import React from "react";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
	const links = [
		"topstories",
		"newstories",
		"beststories",
		"askstories",
		"showstories",
		"jobstories",
	];
	return (
		<header className="h-full flex grow justify-end relative">
			<div className="fixed top-0 max-w-xs px-4 py-8 flex flex-col items-end gap-8">
				<Link href="/">
					<span className="font-bold text-4xl bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
						Hackernews
					</span>
				</Link>
				<ul className="flex flex-col items-end gap-4">
					{links.map((link) => {
						if (link === "topstories")
							return (
								<Link href="/">
									<span className="capitalize hover:text-accent-light">
										{link.replace("stories", "")}
									</span>
								</Link>
							);
						return (
							<Link
								key={link}
								href={link}
							>
								<span className="capitalize hover:text-accent-light">
									{link.replace("stories", "")}
								</span>
							</Link>
						);
					})}
				</ul>
			</div>
		</header>
	);
};

export default Sidebar;
