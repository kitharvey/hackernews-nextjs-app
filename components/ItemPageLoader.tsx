import React from "react";
import CommentLoader from "./CommentLoader";

interface ItemPageLoaderProps {}

const ItemPageLoader: React.FC<ItemPageLoaderProps> = ({}) => {
	const items = Array.from(Array(10).keys());

	return (
		<>
			<div className="flex flex-col items-start py-4">
				<div className="h-8 w-3/4 rounded bg-gray-50 " />
				<div className="flex gap-x-4 flex-col md:flex-row">
					<div className="h-4 w-20 bg-gray-500" />
					<div className="h-4 w-20 bg-gray-500" />
					<div className="h-4 w-20 bg-gray-500" />
					<div className="h-4 w-20 bg-gray-500" />
					<div className="h-4 w-20 bg-gray-500" />
				</div>
			</div>
			{items.map((comment) => comment && <CommentLoader key={comment} />)}
		</>
	);
};

export default ItemPageLoader;
