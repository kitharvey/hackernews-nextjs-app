const PostLoader = () => {
	const widths = [60, 64, 72, 80, 96];
	function getRandomWidth(min: number, max: number) {
		return Math.floor(Math.random() * (max - min) + min);
	}
	const randomWidth = widths[getRandomWidth(0, widths.length - 1)] / 4 + "rem";
	return (
		<div className="flex flex-col gap-4 p-4 animate-pulse w-full">
			<div
				className={`h-4 bg-gray-50 rounded`}
				style={{ width: randomWidth }}
			/>
			<div className="flex gap-2">
				<div className="h-3 w-16 rounded bg-gray-500" />
				<div className="h-3 w-16 rounded bg-gray-500" />
				<div className="h-3 w-16 rounded bg-gray-500" />
				<div className="h-3 w-16 rounded bg-gray-500 " />
			</div>
		</div>
	);
};

export default PostLoader;
