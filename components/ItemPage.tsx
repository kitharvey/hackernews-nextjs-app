import { ItemType } from "@/types";
import Link from "next/link";
import React from "react";
import Comment from "./Comment";
import getTimePassed from "@/lib/getTimePassed";

interface ItemPageProps {
	item: ItemType;
}

const ItemPage: React.FC<ItemPageProps> = ({ item }) => {
	const { title, text, by, comments, time, url } = item;
	const timePassed = getTimePassed(time);
	let domain = new URL(url).hostname;
	const markup = { __html: `<div>${text}</div>` };
	return (
		<div className="p-4">
			<div className="flex flex-col items-start">
				{title && <h1 className="text-3xl">{title}</h1>}
				{text && <div dangerouslySetInnerHTML={markup} />}
				<div className="flex gap-4">
					<p className="text-gray-light">
						by{" "}
						<Link href={`/user/${by}`}>
							<span className="hover:text-accent-light">{by}</span>
						</Link>
					</p>
					{time && <p className="text-gray-light">{timePassed}</p>}
					<Link href={url}>
						<p className="text-gray-light hover:text-accent-light">{domain}</p>
					</Link>
				</div>
			</div>
			{comments.map(
				(comment) =>
					comment && (
						<Comment
							key={comment.id}
							comment={comment}
						></Comment>
					)
			)}
		</div>
	);
};

export default ItemPage;
