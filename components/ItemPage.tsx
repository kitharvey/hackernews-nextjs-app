import { ItemType } from "@/types";
import Link from "next/link";
import React from "react";
import Comment from "./Comment";
import { getTimePassed } from "@/lib/getTime";

interface ItemPageProps {
	item: ItemType;
}

const ItemPage: React.FC<ItemPageProps> = ({ item }) => {
	const { title, text, by, comments, time, url, score, kids, type } = item;
	const timePassed = getTimePassed(time);
	let domain = url ? new URL(url).hostname : "";
	const markup = { __html: `<div>${text}</div>` };
	return (
		<>
			{" "}
			{type === "comment" ? (
				<Comment comment={item} />
			) : (
				<>
					<div className="flex flex-col items-start p-4 pb-8">
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
							{domain && (
								<Link href={url}>
									<p className="text-gray-light hover:text-accent-light">
										{domain}
									</p>
								</Link>
							)}
							<p className="text-lightgray">{score ? score : 0} points</p>
							<p className="text-lightgray">
								{kids ? kids.length : 0} comments
							</p>
						</div>
					</div>
					{comments ? (
						comments.map(
							(comment) =>
								comment && (
									<Comment
										key={comment.id}
										comment={comment}
									/>
								)
						)
					) : (
						<div className="p-4">
							<p>Seems pretty quiet around here.</p>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default ItemPage;
