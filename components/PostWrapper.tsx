"use client";
import { ItemListType } from "@/types";
import React, { useState, MouseEvent } from "react";
import Post from "./Post";

interface PostWrapperProps {
	posts: ItemListType;
}

const PostWrapper: React.FC<PostWrapperProps> = ({ posts }) => {
	return (
		<div className="max-w-4xl p-4">
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

export default PostWrapper;
