"use client";
import { getItem } from "@/lib/getData";
import React from "react";
import useSWR from "swr";
import PostCard from "./Post";
interface PostComponentProps {
	id: number;
}

const Item: React.FC<PostComponentProps> = ({ id }) => {
	const { data, isLoading } = useSWR(`${id}`, getItem);
	if (isLoading) return <p>Loading...</p>;
	if (!data) return <p className="hidden">Error</p>;
	if (!data.deleted && !data.dead && data.type != "comment") {
		return <PostCard data={data} />;
	} else return <p className="hidden">Error</p>;
};

export default Item;
