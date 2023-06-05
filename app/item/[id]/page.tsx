import Comment from "@/components/Comment";
import { getComments, getItem } from "@/lib/getData";
import { ItemListType } from "@/types";
import Link from "next/link";

export default async function Page({ params }: { params: { id: number } }) {
	const { id } = params;
	const data = await getItem(id);
	let comments: ItemListType = [];
	if (data) {
		const { title, text, by } = data;
		if (data.kids) {
			comments = await getComments(data.kids);
		}
		return (
			<article>
				{title}
				{text}
				<Link href={`/user/${by}`}>
					<p>{by}</p>
				</Link>
				{comments &&
					comments.map(
						(comment) =>
							comment && (
								<Comment
									key={comment.id}
									comment={comment}
								></Comment>
							)
					)}
			</article>
		);
	}
}
