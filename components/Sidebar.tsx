"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Sidebar = ({}) => {
	const links = [
		"topstories",
		"newstories",
		"beststories",
		"askstories",
		"showstories",
		"jobstories",
	];

	const pathname = usePathname();
	return (
		<header className="h-full w-1/2 flex justify-end sticky top-0">
			<div className="max-w-xs p-8 flex flex-col items-end gap-8">
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
									<span
										className={`capitalize hover:text-accent-light ${
											pathname === "/" ? "text-accent-light" : ""
										}`}
									>
										{link.replace("stories", "")}
									</span>
								</Link>
							);
						return (
							<Link
								key={link}
								href={link}
							>
								<span
									className={`capitalize hover:text-accent-light ${
										pathname.includes(link) ? "text-accent-light" : ""
									}`}
								>
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
