import getTimePassed from "@/lib/getTimePassed";
import { ItemType } from "@/types";
import Link from "next/link";

interface CommentProps {
	comment: ItemType;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
	const { by, text, time, comments } = comment;
	const timePassed = getTimePassed(time);
	const markup = { __html: `<div>${text}</div>` };
	return (
		<div className="my-4">
			{text && (
				<div
					className="text-sm text-html"
					dangerouslySetInnerHTML={markup}
				/>
			)}
			<div className="flex gap-2">
				<p className="text-xs text-gray-light">
					by{" "}
					<Link href={`/user/${by}`}>
						<span className="hover:text-accent-light">{by}</span>
					</Link>
				</p>
				{time && <p className="text-xs text-gray-light">{timePassed}</p>}
			</div>
			{comments &&
				comments.map(
					(reply) =>
						reply && (
							<div
								className="pl-4 border-l border-accent"
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
