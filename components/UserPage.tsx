import { UserType } from "@/types";
import React from "react";
import Item from "./Item";

interface UserPageProps {
	user: UserType;
}

const UserPage: React.FC<UserPageProps> = ({ user }) => {
	const { submitted, created, karma, id, about } = user;
	const markup = { __html: `<div>${about}</div>` };
	const cakeday = new Date(created * 1000).toLocaleDateString("en-US");
	return (
		<div>
			<div className="flex flex-col p-4 pb-8">
				<p className="text-2xl text-accent-light">{id}</p>
				<p>karma: {karma}</p>
				<p>created: {cakeday}</p>
				{about && <div dangerouslySetInnerHTML={markup} />}
			</div>
			{submitted ? (
				<ul>
					{submitted.map((submission) => (
						<Item
							key={submission}
							id={submission}
						/>
					))}
				</ul>
			) : (
				<div className="p-4">
					<p>This place needs some action!</p>
				</div>
			)}
		</div>
	);
};

export default UserPage;
