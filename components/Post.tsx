import { ItemType } from "@/types";
import Link from "next/link";
import React from "react";

interface PostComponentProps {
	item: ItemType;
}

const Post: React.FC<PostComponentProps> = ({ item }) => {
	const { by, title, time, id, score, kids, type } = item;
	// const timePassed = getTimePassed(time);
	const timePassed = new Date(time * 1000);

	return (
		<li>
			<p>{type}</p>
			<Link href={`/${id}`}>
				<p>{title}</p>
			</Link>
			<Link href={`/user/${by}`}>
				<p>{by}</p>
			</Link>
			<p>{JSON.stringify(timePassed)}</p>
			<p>{JSON.stringify(time)}</p>
			<p>{score ? score : 0}points</p>
			<p>{kids ? kids.length : 0}comments</p>
		</li>
	);
};

export default Post;
