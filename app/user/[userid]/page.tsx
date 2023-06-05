import Comment from "@/components/Comment";
import Post from "@/components/Post";
import { getItemsList, getUser } from "@/lib/getData";
import { ItemListType } from "@/types";

export default async function Page({ params }: { params: { userid: string } }) {
	const { userid } = params;
	const userData = await getUser(userid);
	let posts: ItemListType = [];
	let comments: ItemListType = [];
	if (userData && userData.submitted) {
		const items = await getItemsList(userData.submitted);
		items.forEach((item) => {
			if (item) {
				if (item.type !== "comment") {
					posts.push(item);
				} else {
					comments.push(item);
				}
			}
		});
	}
	return (
		<ul>
			{posts &&
				posts.map(
					(post) =>
						post && (
							<Post
								key={post.id}
								item={post}
							/>
						)
				)}
			{comments &&
				comments.map(
					(comment) =>
						comment && (
							<Comment
								key={comment.id}
								comment={comment}
							/>
						)
				)}
		</ul>
	);
}
