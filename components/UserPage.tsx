import { UserType } from "@/types";
import React from "react";
import Post from "./Post";
import Comment from "./Comment";

interface UserPageProps {
	user: UserType;
}

const UserPage: React.FC<UserPageProps> = ({ user }) => {
	return (
		<div>
			<ul>
				{user.submissions &&
					user.submissions.map((submission) => {
						if (submission) {
							if (submission.type === "comment")
								return <Comment comment={submission} />;
						}
					})}
			</ul>
			<ul>
				{user.submissions &&
					user.submissions.map((submission) => {
						if (submission) {
							if (submission.type != "comment")
								return <Post item={submission} />;
						}
					})}
			</ul>
		</div>
	);
};

export default UserPage;
