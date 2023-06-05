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
		<li>
			<article className="p-4 rounded-xl border border-white/0 transition-all ease-in hover:border-white/5">
				<Link href={`/item/${id}`}>
					<div className="flex flex-col">
						<p className="text-lg">{title}</p>
						<div className="flex gap-2">
							<p className="text-xs text-lightgray">
								by <span>{by}</span>
							</p>
							<p className="text-center text-xs text-lightgray">
								{score ? score : 0} points
							</p>
							{time && <p className="text-xs text-lightgray">{timePassed}</p>}
							<p className="text-xs text-lightgray">
								{kids ? kids.length : 0} comments
							</p>
						</div>
					</div>
				</Link>
			</article>
		</li>
	);
};

export default Post;
