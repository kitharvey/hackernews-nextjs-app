import Comment from "@/components/Comment";
import { getComments, getItem } from "@/lib/getData";
import { ItemListType } from "@/types";

export default async function Page({ params }: { params: { id: number } }) {
	const { id } = params;
	const data = await getItem(id);
	let comments: ItemListType = [];
	if (data && data.kids) {
		comments = await getComments(data.kids);
	}
	return (
		<>
			{data && data.title}
			{data && data.text}
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
		</>
	);
}
