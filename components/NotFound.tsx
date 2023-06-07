import React from "react";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({}) => {
	return (
		<div className="p-4">
			<h2 className="text-4xl text-accent-light">Not Found</h2>
			<p className="text-sm">Could not find requested resource</p>
		</div>
	);
};

export default NotFound;
