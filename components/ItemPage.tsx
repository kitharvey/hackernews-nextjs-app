"use client";

import { ItemType } from "@/types";
import Link from "next/link";
import React from "react";
import { getTimePassed } from "@/lib/getTime";
import CommentWrapper from "./CommentWrapper";

interface ItemPageProps {
	item: ItemType;
}

const ItemPage: React.FC<ItemPageProps> = ({ item }) => {
	const { title, text, by, time, url, score, kids } = item;
	const timePassed = getTimePassed(time);
	let domain = url ? new URL(url).hostname : "";
	const markup = { __html: `<div>${text}</div>` };
	return (
		<>
			<div className="flex flex-col items-start py-4">
				{title && <h1 className="text-3xl">{title}</h1>}
				{text && (
					<div
						className="max-w-xl"
						dangerouslySetInnerHTML={markup}
					/>
				)}
				<div className="flex gap-x-4 flex-col md:flex-row">
					<p className="text-gray-500">by{" " + by}</p>
					{time && <p className="text-gray-500">{timePassed}</p>}
					{domain && (
						<Link href={url}>
							<p className="underline text-gray-500 hover:text-orange-500">
								{domain}
							</p>
						</Link>
					)}
					<p className="text-gray-500">{score ? score : 0} points</p>
					<p className="text-gray-500">{kids ? kids.length : 0} comments</p>
				</div>
			</div>
			{kids ? (
				kids.map(
					(comment) =>
						comment && (
							<CommentWrapper
								key={comment}
								id={comment}
							/>
						)
				)
			) : (
				<div className="p-4">
					<p>Seems pretty quiet around here.</p>
				</div>
			)}
		</>
	);
};

export default ItemPage;
