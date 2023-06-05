import getTimePassed from "@/lib/getTimePassed";
import { ItemType } from "@/types";

interface CommentProps {
	comment: ItemType;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
	const { by, text, time, comments, type } = comment;
	const timePassed = getTimePassed(time);
	return (
		<div>
			<p>{type}</p>
			<p>{by}</p>
			<p>{timePassed}</p>
			<p>{text}</p>
			{comments &&
				comments.map(
					(reply) =>
						reply && (
							<div
								className="reply"
								key={reply.id}
							>
								<Comment comment={reply}></Comment>
							</div>
						)
				)}
		</div>
	);
};

export default Comment;
