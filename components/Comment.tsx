"use client";
import getTimePassed from "@/lib/getTimePassed";
import { ItemType } from "@/types";

interface CommentProps {
	comment: ItemType;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
	const { by, text, time, comments } = comment;
	const timePassed = getTimePassed(time);
	const markup = { __html: `<div>${text}</div>` };
	return (
		<div className="comment">
			<p>{by}</p>
			<p>{timePassed}</p>
			{text && <div dangerouslySetInnerHTML={markup} />}

			{comments &&
				comments.map(
					(reply) =>
						reply && (
							<div
								className="pl-8 reply"
								key={reply.id}
							>
								<Comment comment={reply} />
							</div>
						)
				)}
		</div>
	);
};

export default Comment;
