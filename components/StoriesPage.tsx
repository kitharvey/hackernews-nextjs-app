import React from "react";
import Item from "./Item";
import { ListType } from "@/types";

interface PostComponentProps {
	posts: ListType;
}

const StoriesPage: React.FC<PostComponentProps> = ({ posts }) => {
	return (
		<div>
			{posts.map(
				(post) =>
					post && (
						<Item
							key={post}
							id={post}
						/>
					)
			)}
		</div>
	);
};

export default StoriesPage;
