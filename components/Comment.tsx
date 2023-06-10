import { getTimePassed } from "@/lib/getTime";
import { ItemType } from "@/types";
import CommentWrapper from "./CommentWrapper";
import { useState } from "react";
interface CommentProps {
	data: ItemType;
}

const Comment: React.FC<CommentProps> = ({ data }) => {
	const [collapse, setCollapse] = useState(false);
	const { by, text, time, kids, deleted, dead } = data;
	const timePassed = getTimePassed(time);
	const markup = { __html: `<div>${text}</div>` };
	return (
		<div
			className={`pt-8 max-w-full ${deleted || dead || !by ? "hidden" : ""}`}
		>
			<div className="">
				<div className="flex gap-2">
					<p className="text-xs text-gray-500">by{" " + by}</p>
					{time && <p className="text-xs text-gray-500">{timePassed}</p>}
				</div>
				{text && (
					<div
						className="text-sm text-html"
						dangerouslySetInnerHTML={markup}
					/>
				)}
			</div>
			{kids && (
				<>
					<button
						className="group"
						onClick={() => setCollapse(!collapse)}
					>
						<span className="text-xs underline text-gray-500 group-hover:text-orange-500">
							{collapse ? "collapse" : "show replies"}
						</span>
					</button>
					{collapse &&
						kids.map(
							(reply) =>
								reply && (
									<div
										className="pl-4 border-l border-gray-700"
										key={reply}
									>
										<CommentWrapper id={reply} />
									</div>
								)
						)}
				</>
			)}
		</div>
	);
};

export default Comment;
