import PostLoader from "./PostLoader";

const StoriesPageLoader = () => {
	const items = Array.from(Array(20).keys());
	return (
		<>
			{items.map((_item, index) => (
				<PostLoader key={index} />
			))}
		</>
	);
};

export default StoriesPageLoader;
