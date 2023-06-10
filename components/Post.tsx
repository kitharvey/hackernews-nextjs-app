import { getTimePassed } from "@/lib/getTime";
import { ItemType } from "@/types";
import Link from "next/link";
import React from "react";

interface PostCardProps {
	data: ItemType;
}

const PostCard: React.FC<PostCardProps> = ({ data }) => {
	const { by, title, time, id, score, kids, url } = data;
	const timePassed = getTimePassed(time);
	return (
		<div className="p-4 rounded-xl">
			<div className="flex flex-col">
				<Link href={url ? url : `/item/${id}`}>
					<p className="text-lg transition hover:text-accent-light">{title}</p>
				</Link>

				<div className="flex gap-2">
					<p className="text-xs text-lightgray">
						<Link href={`/user/${by}`}>
							by <span className="hover:text-accent-light">{by}</span>
						</Link>
					</p>
					{time && <p className="text-xs text-lightgray">{timePassed}</p>}
					<p className="text-center text-xs text-lightgray">
						{score ? score : 0} points
					</p>
					<Link href={`/item/${id}`}>
						<p className="text-xs text-lightgray hover:text-accent-light">
							{kids ? kids.length : 0} comments
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
