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
		<div className="p-4 max-w-3xl">
			<div className="flex flex-col">
				<Link href={url ? url : `/item/${id}`}>
					<p className="text-lg transition hover:text-orange-500 whitespace-nowrap overflow-hidden truncate">
						{title}
					</p>
				</Link>

				<div className="flex gap-2">
					<p className="text-xs text-gray-500">by {by}</p>
					{time && <p className="text-xs text-gray-500">{timePassed}</p>}
					<p className="text-center text-xs text-gray-500">
						{score ? score : 0} points
					</p>
					<Link href={`/item/${id}`}>
						<p className="text-xs text-gray-500 hover:text-orange-500">
							{kids ? kids.length : 0} comments
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
