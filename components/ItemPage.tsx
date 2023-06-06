import { ItemListType, ItemType } from "@/types";
import Link from "next/link";
import React from "react";
import Comment from "./Comment";

interface ItemPageProps {
	item: ItemType;
}

const ItemPage: React.FC<ItemPageProps> = ({ item }) => {
	const { title, text, by, comments } = item;
	const markup = { __html: `<div>${text}</div>` };
	return (
		<div className="p-4">
			{title}
			{text && <div dangerouslySetInnerHTML={markup} />}
			<Link href={`/user/${by}`}>
				<p>{by}</p>
			</Link>
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
