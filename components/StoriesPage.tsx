import { ItemListType } from "@/types";
import React from "react";
import Post from "./Post";

interface StoriesPageProps {
	posts: ItemListType;
}

const StoriesPage: React.FC<StoriesPageProps> = ({ posts }) => {
	return (
		<div>
			{posts.map(
				(post) =>
					post && (
						<Post
							key={post.id}
							item={post}
						/>
					)
			)}
		</div>
	);
};

export default StoriesPage;
