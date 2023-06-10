"use client";
import React, { useState } from "react";
import PostWrapper from "./PostWrapper";
import { ListType } from "@/types";

interface PostComponentProps {
	posts: ListType;
}

const StoriesPage: React.FC<PostComponentProps> = ({ posts }) => {
	const itemsNumber = 20;
	const [items, setItems] = useState(posts.slice(0, itemsNumber));
	const [page, setPage] = useState(itemsNumber);
	const handleClick = () => {
		setItems(posts.slice(0, page + itemsNumber));
		setPage(page + itemsNumber);
	};
	return (
		<div className="grid gap-y-4">
			<div className="">
				{items.map(
					(item) =>
						item && (
							<PostWrapper
								key={item}
								id={item}
							/>
						)
				)}
			</div>
			<div className="p-4 flex md:justify-start justify-center w-full">
				<button
					disabled={page >= posts.length}
					onClick={handleClick}
					className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-orange-500 hover:bg-orange-600 focus:bg-orange-700 disabled:cursor-not-allowed disabled:border-orange-300 disabled:bg-orange-300 disabled:shadow-none"
				>
					<span>Load More</span>
				</button>
			</div>
		</div>
	);
};

export default StoriesPage;
