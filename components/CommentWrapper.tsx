import React from "react";
import useSWR from "swr";
import { getItem } from "@/lib/getData";
import CommentLoader from "./CommentLoader";
import Comment from "./Comment";

interface CommentWrapperProps {
	id: number;
}

const CommentWrapper: React.FC<CommentWrapperProps> = ({ id }) => {
	const { data, isLoading } = useSWR(`${id}`, getItem);
	if (isLoading) return <CommentLoader />;
	if (!data) return <p className="text-sm">Did I miss the party?</p>;
	return <Comment data={data} />;
};

export default CommentWrapper;
