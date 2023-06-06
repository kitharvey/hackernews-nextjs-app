import getTimePassed from "@/lib/getTimePassed";
import { ItemType } from "@/types";
import Link from "next/link";
import React from "react";

interface PostComponentProps {
	item: ItemType;
}

const Post: React.FC<PostComponentProps> = ({ item }) => {
	const { by, title, time, id, score, kids } = item;
	const timePassed = getTimePassed(time);

	return (
		<Link href={`/item/${id}`}>
			<div className="relative m-1 group rounded-xl">
				<div className="p-4 post rounded-xl ">
					<div className="flex flex-col">
						<p className="text-lg transition group-hover:text-accent-light">
							{title}
						</p>

						<div className="flex gap-2">
							<p className="text-xs text-lightgray">
								by <span>{by}</span>
							</p>
							{time && <p className="text-xs text-lightgray">{timePassed}</p>}
							<p className="text-center text-xs text-lightgray">
								{score ? score : 0} points
							</p>
							<p className="text-xs text-lightgray">
								{kids ? kids.length : 0} comments
							</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Post;
