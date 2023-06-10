"use client";
import { getItem } from "@/lib/getData";
import React from "react";
import useSWR from "swr";
import Post from "./Post";
import PostLoader from "./PostLoader";
interface PostComponentProps {
	id: number;
}

const PostWrapper: React.FC<PostComponentProps> = ({ id }) => {
	const { data, isLoading } = useSWR(`${id}`, getItem);
	if (isLoading) return <PostLoader />;
	if (!data) return <p className="hidden">Error</p>;
	if (!data.deleted && !data.dead && data.type != "comment") {
		return <Post data={data} />;
	} else return <p className="hidden">Error</p>;
};

export default PostWrapper;
