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
		<aside className="h-max w-full md:w-1/3 flex justify-end static md:sticky top-0">
			<div className="w-full max-w-full md:max-w-xs p-4 md:p-8 flex flex-col items-center md:items-end gap-y-4 md:gap-y-8">
				<Link href="/">
					<span className="font-bold text-4xl bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent">
						Hackernews
					</span>
				</Link>
				<ul className="flex flex-row md:flex-col items-end md:gap-4 gap-2">
					{links.map((link) => {
						if (link === "topstories")
							return (
								<Link
									key={link}
									href="/"
								>
									<span
										className={`capitalize font-semibold text-xl hover:text-orange-500 ${
											pathname === "/" ? "text-orange-500" : ""
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
									className={`capitalize font-semibold text-xl hover:text-orange-500 ${
										pathname.includes(link) ? "text-orange-500" : ""
									}`}
								>
									{link.replace("stories", "")}
								</span>
							</Link>
						);
					})}
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
