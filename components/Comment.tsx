"use client";

import { getTimePassed } from "@/lib/getTime";
import Link from "next/link";
import useSWR from "swr";
import { getItem } from "@/lib/getData";
interface CommentProps {
	id: number;
}

const Comment: React.FC<CommentProps> = ({ id }) => {
	const { data, isLoading } = useSWR(`${id}`, getItem);
	if (isLoading) return <p>Loading...</p>;
	if (!data) return <p>Error</p>;
	const { by, text, time, kids, deleted, dead } = data;
	const timePassed = getTimePassed(time);
	const markup = { __html: `<div>${text}</div>` };
	return (
		<div className={`pt-8 max-w-full ${deleted && dead ? "hidden" : ""}`}>
			<div className="flex gap-2">
				<p className="text-xs text-gray-light">
					by{" "}
					<Link href={`/user/${by}`}>
						<span className="hover:text-accent-light">{by}</span>
					</Link>
				</p>
				{time && <p className="text-xs text-gray-light">{timePassed}</p>}
			</div>
			{text && (
				<div
					className="text-sm text-html"
					dangerouslySetInnerHTML={markup}
				/>
			)}
			{kids &&
				kids.map(
					(reply) =>
						reply && (
							<div
								className="pl-4 border-l border-gray-700"
								key={reply}
							>
								<Comment id={reply} />
							</div>
						)
				)}
		</div>
	);
};

export default Comment;
